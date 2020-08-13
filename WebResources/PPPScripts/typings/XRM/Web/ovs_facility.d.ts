interface ovs_Facility_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  ovs_address1city?: string | null;
  ovs_address1latitude?: number | null;
  ovs_address1longitude?: number | null;
  ovs_address1postalcode?: string | null;
  ovs_address1stateprovince?: string | null;
  ovs_address1street1?: string | null;
  ovs_class?: number | null;
  ovs_elevation?: number | null;
  ovs_facilityid?: string | null;
  ovs_facilitynameenglish?: string | null;
  ovs_facilitynamefrench?: string | null;
  ovs_facilitytype?: ovs_facilitytype | null;
  ovs_icaocode?: string | null;
  ovs_name?: string | null;
  statecode?: ovs_facility_statecode | null;
  statuscode?: ovs_facility_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ovs_Facility_Relationships {
  ovs_Countryid?: tc_Country_Result | null;
  ovs_ppp_Traveller_FlightConn_Facility?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection1?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection10?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection2?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection3?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection4?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection5?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection6?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection7?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection8?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightConnection9?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightDestination_ovs_Facili?: ppp_Traveller_Result[] | null;
  ppp_Traveller_FlightOrigin_ovs_Facility?: ppp_Traveller_Result[] | null;
}
interface ovs_Facility extends ovs_Facility_Base, ovs_Facility_Relationships {
  ovs_Accountid_bind$accounts?: string | null;
  ovs_Contactid_bind$contacts?: string | null;
  ovs_Countryid_bind$tc_countries?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ovs_Facility_Create extends ovs_Facility {
}
interface ovs_Facility_Update extends ovs_Facility {
}
interface ovs_Facility_Select {
  createdby_guid: WebAttribute<ovs_Facility_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ovs_Facility_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ovs_Facility_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ovs_Facility_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ovs_Facility_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ovs_Facility_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ovs_Facility_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ovs_Facility_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ovs_accountid_guid: WebAttribute<ovs_Facility_Select, { ovs_accountid_guid: string | null }, { ovs_accountid_formatted?: string }>;
  ovs_address1city: WebAttribute<ovs_Facility_Select, { ovs_address1city: string | null }, {  }>;
  ovs_address1latitude: WebAttribute<ovs_Facility_Select, { ovs_address1latitude: number | null }, {  }>;
  ovs_address1longitude: WebAttribute<ovs_Facility_Select, { ovs_address1longitude: number | null }, {  }>;
  ovs_address1postalcode: WebAttribute<ovs_Facility_Select, { ovs_address1postalcode: string | null }, {  }>;
  ovs_address1stateprovince: WebAttribute<ovs_Facility_Select, { ovs_address1stateprovince: string | null }, {  }>;
  ovs_address1street1: WebAttribute<ovs_Facility_Select, { ovs_address1street1: string | null }, {  }>;
  ovs_class: WebAttribute<ovs_Facility_Select, { ovs_class: number | null }, {  }>;
  ovs_contactid_guid: WebAttribute<ovs_Facility_Select, { ovs_contactid_guid: string | null }, { ovs_contactid_formatted?: string }>;
  ovs_countryid_guid: WebAttribute<ovs_Facility_Select, { ovs_countryid_guid: string | null }, { ovs_countryid_formatted?: string }>;
  ovs_elevation: WebAttribute<ovs_Facility_Select, { ovs_elevation: number | null }, {  }>;
  ovs_facilityid: WebAttribute<ovs_Facility_Select, { ovs_facilityid: string | null }, {  }>;
  ovs_facilitynameenglish: WebAttribute<ovs_Facility_Select, { ovs_facilitynameenglish: string | null }, {  }>;
  ovs_facilitynamefrench: WebAttribute<ovs_Facility_Select, { ovs_facilitynamefrench: string | null }, {  }>;
  ovs_facilitytype: WebAttribute<ovs_Facility_Select, { ovs_facilitytype: ovs_facilitytype | null }, { ovs_facilitytype_formatted?: string }>;
  ovs_icaocode: WebAttribute<ovs_Facility_Select, { ovs_icaocode: string | null }, {  }>;
  ovs_name: WebAttribute<ovs_Facility_Select, { ovs_name: string | null }, {  }>;
  ownerid_guid: WebAttribute<ovs_Facility_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ovs_Facility_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ovs_Facility_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ovs_Facility_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ovs_Facility_Select, { statecode: ovs_facility_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ovs_Facility_Select, { statuscode: ovs_facility_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ovs_Facility_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ovs_Facility_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ovs_Facility_Select, { versionnumber: number | null }, {  }>;
}
interface ovs_Facility_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ovs_accountid_guid: XQW.Guid;
  ovs_address1city: string;
  ovs_address1latitude: number;
  ovs_address1longitude: number;
  ovs_address1postalcode: string;
  ovs_address1stateprovince: string;
  ovs_address1street1: string;
  ovs_class: number;
  ovs_contactid_guid: XQW.Guid;
  ovs_countryid_guid: XQW.Guid;
  ovs_elevation: number;
  ovs_facilityid: XQW.Guid;
  ovs_facilitynameenglish: string;
  ovs_facilitynamefrench: string;
  ovs_facilitytype: ovs_facilitytype;
  ovs_icaocode: string;
  ovs_name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: ovs_facility_statecode;
  statuscode: ovs_facility_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ovs_Facility_Expand {
  ovs_Countryid: WebExpand<ovs_Facility_Expand, tc_Country_Select, tc_Country_Filter, { ovs_Countryid: tc_Country_Result }>;
  ovs_ppp_Traveller_FlightConn_Facility: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ovs_ppp_Traveller_FlightConn_Facility: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection1: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection1: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection10: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection10: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection2: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection2: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection3: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection3: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection4: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection4: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection5: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection5: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection6: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection6: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection7: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection7: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection8: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection8: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightConnection9: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightConnection9: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightDestination_ovs_Facili: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightDestination_ovs_Facili: ppp_Traveller_Result[] }>;
  ppp_Traveller_FlightOrigin_ovs_Facility: WebExpand<ovs_Facility_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_FlightOrigin_ovs_Facility: ppp_Traveller_Result[] }>;
}
interface ovs_Facility_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ovs_accountid_formatted?: string;
  ovs_contactid_formatted?: string;
  ovs_countryid_formatted?: string;
  ovs_facilitytype_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ovs_Facility_Result extends ovs_Facility_Base, ovs_Facility_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ovs_accountid_guid: string | null;
  ovs_contactid_guid: string | null;
  ovs_countryid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ovs_Facility_RelatedOne {
  ovs_Countryid: WebMappingRetrieve<tc_Country_Select,tc_Country_Expand,tc_Country_Filter,tc_Country_Fixed,tc_Country_Result,tc_Country_FormattedResult>;
}
interface ovs_Facility_RelatedMany {
  ovs_ppp_Traveller_FlightConn_Facility: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection1: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection10: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection2: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection3: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection4: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection5: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection6: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection7: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection8: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightConnection9: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightDestination_ovs_Facili: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
  ppp_Traveller_FlightOrigin_ovs_Facility: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ovs_facilities: WebMappingRetrieve<ovs_Facility_Select,ovs_Facility_Expand,ovs_Facility_Filter,ovs_Facility_Fixed,ovs_Facility_Result,ovs_Facility_FormattedResult>;
}
interface WebEntitiesRelated {
  ovs_facilities: WebMappingRelated<ovs_Facility_RelatedOne,ovs_Facility_RelatedMany>;
}
interface WebEntitiesCUDA {
  ovs_facilities: WebMappingCUDA<ovs_Facility_Create,ovs_Facility_Update,ovs_Facility_Select>;
}
