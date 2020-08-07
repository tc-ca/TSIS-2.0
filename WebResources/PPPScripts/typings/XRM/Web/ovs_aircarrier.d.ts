interface ovs_AirCarrier_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  ovs_aircarrierid?: string | null;
  ovs_aircarriername?: string | null;
  ovs_callsign?: string | null;
  ovs_icaocode?: string | null;
  statecode?: ovs_aircarrier_statecode | null;
  statuscode?: ovs_aircarrier_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ovs_AirCarrier_Relationships {
  ovs_Country?: tc_Country_Result | null;
  ppp_Traveller_AirCarrier_ovs_AirCarrier?: ppp_Traveller_Result[] | null;
}
interface ovs_AirCarrier extends ovs_AirCarrier_Base, ovs_AirCarrier_Relationships {
  ovs_Country_bind$tc_countries?: string | null;
  ovs_Organization_bind$accounts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ovs_AirCarrier_Create extends ovs_AirCarrier {
}
interface ovs_AirCarrier_Update extends ovs_AirCarrier {
}
interface ovs_AirCarrier_Select {
  createdby_guid: WebAttribute<ovs_AirCarrier_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ovs_AirCarrier_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ovs_AirCarrier_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ovs_AirCarrier_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ovs_AirCarrier_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ovs_AirCarrier_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ovs_AirCarrier_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ovs_AirCarrier_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ovs_aircarrierid: WebAttribute<ovs_AirCarrier_Select, { ovs_aircarrierid: string | null }, {  }>;
  ovs_aircarriername: WebAttribute<ovs_AirCarrier_Select, { ovs_aircarriername: string | null }, {  }>;
  ovs_callsign: WebAttribute<ovs_AirCarrier_Select, { ovs_callsign: string | null }, {  }>;
  ovs_country_guid: WebAttribute<ovs_AirCarrier_Select, { ovs_country_guid: string | null }, { ovs_country_formatted?: string }>;
  ovs_icaocode: WebAttribute<ovs_AirCarrier_Select, { ovs_icaocode: string | null }, {  }>;
  ovs_organization_guid: WebAttribute<ovs_AirCarrier_Select, { ovs_organization_guid: string | null }, { ovs_organization_formatted?: string }>;
  ownerid_guid: WebAttribute<ovs_AirCarrier_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ovs_AirCarrier_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ovs_AirCarrier_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ovs_AirCarrier_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ovs_AirCarrier_Select, { statecode: ovs_aircarrier_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ovs_AirCarrier_Select, { statuscode: ovs_aircarrier_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ovs_AirCarrier_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ovs_AirCarrier_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ovs_AirCarrier_Select, { versionnumber: number | null }, {  }>;
}
interface ovs_AirCarrier_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ovs_aircarrierid: XQW.Guid;
  ovs_aircarriername: string;
  ovs_callsign: string;
  ovs_country_guid: XQW.Guid;
  ovs_icaocode: string;
  ovs_organization_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: ovs_aircarrier_statecode;
  statuscode: ovs_aircarrier_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ovs_AirCarrier_Expand {
  ovs_Country: WebExpand<ovs_AirCarrier_Expand, tc_Country_Select, tc_Country_Filter, { ovs_Country: tc_Country_Result }>;
  ppp_Traveller_AirCarrier_ovs_AirCarrier: WebExpand<ovs_AirCarrier_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller_AirCarrier_ovs_AirCarrier: ppp_Traveller_Result[] }>;
}
interface ovs_AirCarrier_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ovs_country_formatted?: string;
  ovs_organization_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ovs_AirCarrier_Result extends ovs_AirCarrier_Base, ovs_AirCarrier_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ovs_country_guid: string | null;
  ovs_organization_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ovs_AirCarrier_RelatedOne {
  ovs_Country: WebMappingRetrieve<tc_Country_Select,tc_Country_Expand,tc_Country_Filter,tc_Country_Fixed,tc_Country_Result,tc_Country_FormattedResult>;
}
interface ovs_AirCarrier_RelatedMany {
  ppp_Traveller_AirCarrier_ovs_AirCarrier: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ovs_aircarriers: WebMappingRetrieve<ovs_AirCarrier_Select,ovs_AirCarrier_Expand,ovs_AirCarrier_Filter,ovs_AirCarrier_Fixed,ovs_AirCarrier_Result,ovs_AirCarrier_FormattedResult>;
}
interface WebEntitiesRelated {
  ovs_aircarriers: WebMappingRelated<ovs_AirCarrier_RelatedOne,ovs_AirCarrier_RelatedMany>;
}
interface WebEntitiesCUDA {
  ovs_aircarriers: WebMappingCUDA<ovs_AirCarrier_Create,ovs_AirCarrier_Update,ovs_AirCarrier_Select>;
}
