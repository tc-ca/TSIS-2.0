interface ovs_ppp_Traveller_ovs_Facility_Base extends WebEntity {
  ovs_facilityid?: string | null;
  ovs_ppp_traveller_ovs_facilityid?: string | null;
  ppp_travellerid?: string | null;
  versionnumber?: number | null;
}
interface ovs_ppp_Traveller_ovs_Facility_Relationships {
  ovs_ppp_Traveller_FlightConn_Facility?: ppp_Traveller_Result[] | null;
}
interface ovs_ppp_Traveller_ovs_Facility extends ovs_ppp_Traveller_ovs_Facility_Base, ovs_ppp_Traveller_ovs_Facility_Relationships {
}
interface ovs_ppp_Traveller_ovs_Facility_Create extends ovs_ppp_Traveller_ovs_Facility {
}
interface ovs_ppp_Traveller_ovs_Facility_Update extends ovs_ppp_Traveller_ovs_Facility {
}
interface ovs_ppp_Traveller_ovs_Facility_Select {
  ovs_facilityid: WebAttribute<ovs_ppp_Traveller_ovs_Facility_Select, { ovs_facilityid: string | null }, {  }>;
  ovs_ppp_traveller_ovs_facilityid: WebAttribute<ovs_ppp_Traveller_ovs_Facility_Select, { ovs_ppp_traveller_ovs_facilityid: string | null }, {  }>;
  ppp_travellerid: WebAttribute<ovs_ppp_Traveller_ovs_Facility_Select, { ppp_travellerid: string | null }, {  }>;
  versionnumber: WebAttribute<ovs_ppp_Traveller_ovs_Facility_Select, { versionnumber: number | null }, {  }>;
}
interface ovs_ppp_Traveller_ovs_Facility_Filter {
  ovs_facilityid: XQW.Guid;
  ovs_ppp_traveller_ovs_facilityid: XQW.Guid;
  ppp_travellerid: XQW.Guid;
  versionnumber: number;
}
interface ovs_ppp_Traveller_ovs_Facility_Expand {
  ovs_ppp_Traveller_FlightConn_Facility: WebExpand<ovs_ppp_Traveller_ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ovs_ppp_Traveller_FlightConn_Facility: ppp_Traveller_Result[] }>;
}
interface ovs_ppp_Traveller_ovs_Facility_FormattedResult {
}
interface ovs_ppp_Traveller_ovs_Facility_Result extends ovs_ppp_Traveller_ovs_Facility_Base, ovs_ppp_Traveller_ovs_Facility_Relationships {
  "@odata.etag": string;
}
interface ovs_ppp_Traveller_ovs_Facility_RelatedOne {
}
interface ovs_ppp_Traveller_ovs_Facility_RelatedMany {
  ovs_ppp_Traveller_FlightConn_Facility: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ovs_ppp_traveller_ovs_facilityset: WebMappingRetrieve<ovs_ppp_Traveller_ovs_Facility_Select,ovs_ppp_Traveller_ovs_Facility_Expand,ovs_ppp_Traveller_ovs_Facility_Filter,ovs_ppp_Traveller_ovs_Facility_Fixed,ovs_ppp_Traveller_ovs_Facility_Result,ovs_ppp_Traveller_ovs_Facility_FormattedResult>;
}
interface WebEntitiesRelated {
  ovs_ppp_traveller_ovs_facilityset: WebMappingRelated<ovs_ppp_Traveller_ovs_Facility_RelatedOne,ovs_ppp_Traveller_ovs_Facility_RelatedMany>;
}
interface WebEntitiesCUDA {
  ovs_ppp_traveller_ovs_facilityset: WebMappingCUDA<ovs_ppp_Traveller_ovs_Facility_Create,ovs_ppp_Traveller_ovs_Facility_Update,ovs_ppp_Traveller_ovs_Facility_Select>;
}
