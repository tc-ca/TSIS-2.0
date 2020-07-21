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
    public class RCIPlugin : PluginBase
    {
        public RCIPlugin()
             : base(typeof(RCIPlugin), runAsSystem: true)
        {
        }
        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (!(localContext.PluginExecutionContext.InputParameters["Target"] is Entity target))
                return;

            

            //Traveler Entity being updated
            var traveler = target.ToEntity<ppp_Traveller>();

            

            //Don't continue if fields are empty
            if (traveler.ppp_AirCarrierRepresentative == null && traveler.ppp_RepresentativePhoneNumber == null)
                return;

            if (localContext.PluginExecutionContext.MessageName == "Update") {
                traveler = GetTraveler(localContext, traveler.Id);
            }
           

            //New RepCallInfo to be added to the Traveler
            var callInfo = new ppp_repcallinfo();

            //Add info from Traveler to new RepCallInfo
            callInfo.ppp_Name = traveler.ppp_AirCarrierRepresentative;
            callInfo.ppp_PhoneNumber = traveler.ppp_RepresentativePhoneNumber;
            callInfo.ppp_CallTime = DateTime.Now;
            callInfo.ppp_Traveller = traveler.ToEntityReference(); //Create the reference

            //Create the repCallInfo in the DB
            localContext.OrganizationService.Create(callInfo);
        }

        protected ppp_Traveller GetTraveler(LocalPluginContext localContext, Guid travelerId)
        {
            var columns = new ColumnSet(true);
            return localContext.OrganizationService.Retrieve(ppp_Traveller.EntityLogicalName, travelerId, columns).ToEntity<ppp_Traveller>();
        }
    }
}
