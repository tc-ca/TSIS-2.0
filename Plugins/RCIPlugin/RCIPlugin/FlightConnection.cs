using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace Inspection.PPP
{
    public class FlightConnection : PluginBase
    {
        public FlightConnection()
             : base(typeof(RCIPlugin), runAsSystem: true)
        {
        }
        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            var context = localContext.PluginExecutionContext;

            EntityReference targetEntity = null;
            ppp_Traveller traveller = null;

            string relationshipName = string.Empty;

            EntityReferenceCollection relatedEntities = null;


            if (context.MessageName != "Associate")
            {
                return;
            }

            // Get the "Relationship" Key from context
            if (context.InputParameters.Contains("Relationship"))
            {
                relationshipName = context.InputParameters["Relationship"].ToString();
            }

            // Check the "Relationship Name" with your intended one
            if (relationshipName != "ovs_ppp_Traveller_FlightConn_Facility.Referenced")
            {
                return;
            }

            // Get Entity 1 reference from "Target" Key from context
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is EntityReference)
            {
                targetEntity = (EntityReference)context.InputParameters["Target"];
                traveller = GetTraveler(localContext, targetEntity.Id);
            }

            // Get Entity 2 reference from " RelatedEntities" Key from context
            if (context.InputParameters.Contains("RelatedEntities") && context.InputParameters["RelatedEntities"] is EntityReferenceCollection)
            {
                relatedEntities = context.InputParameters["RelatedEntities"] as EntityReferenceCollection;
                foreach (var flightConnection in relatedEntities)
                {
                    if(flightConnection.Id == traveller.ppp_FlightOrigin.Id || flightConnection.Id == traveller.ppp_FlightDestination.Id)
                    {
                        relatedEntities.Remove(flightConnection);
                        throw new InvalidPluginExecutionException("Fight connection cannot be the same as the flight origin or flight desitination");
                    }
                }
            }

        }

        protected ppp_Traveller GetTraveler(LocalPluginContext localContext, Guid travelerId)
        {
            var columns = new ColumnSet(true);
            return localContext.OrganizationService.Retrieve(ppp_Traveller.EntityLogicalName, travelerId, columns).ToEntity<ppp_Traveller>();
        }
    }
}
