interface ppp_Caller_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  ppp_callerid?: string | null;
  ppp_callername?: string | null;
  ppp_calltime?: Date | null;
  ppp_name?: string | null;
  statecode?: ppp_caller_statecode | null;
  statuscode?: ppp_caller_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ppp_Caller_Relationships {
  ppp_Traveller?: ppp_Traveller_Result | null;
}
interface ppp_Caller extends ppp_Caller_Base, ppp_Caller_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  ppp_Traveller_bind$ppp_travellers?: string | null;
}
interface ppp_Caller_Create extends ppp_Caller {
}
interface ppp_Caller_Update extends ppp_Caller {
}
interface ppp_Caller_Select {
  createdby_guid: WebAttribute<ppp_Caller_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ppp_Caller_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ppp_Caller_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ppp_Caller_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ppp_Caller_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ppp_Caller_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ppp_Caller_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ppp_Caller_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ppp_Caller_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ppp_Caller_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ppp_Caller_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ppp_Caller_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  ppp_callerid: WebAttribute<ppp_Caller_Select, { ppp_callerid: string | null }, {  }>;
  ppp_callername: WebAttribute<ppp_Caller_Select, { ppp_callername: string | null }, {  }>;
  ppp_calltime: WebAttribute<ppp_Caller_Select, { ppp_calltime: Date | null }, { ppp_calltime_formatted?: string }>;
  ppp_name: WebAttribute<ppp_Caller_Select, { ppp_name: string | null }, {  }>;
  ppp_traveller_guid: WebAttribute<ppp_Caller_Select, { ppp_traveller_guid: string | null }, { ppp_traveller_formatted?: string }>;
  statecode: WebAttribute<ppp_Caller_Select, { statecode: ppp_caller_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ppp_Caller_Select, { statuscode: ppp_caller_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ppp_Caller_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ppp_Caller_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ppp_Caller_Select, { versionnumber: number | null }, {  }>;
}
interface ppp_Caller_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  ppp_callerid: XQW.Guid;
  ppp_callername: string;
  ppp_calltime: Date;
  ppp_name: string;
  ppp_traveller_guid: XQW.Guid;
  statecode: ppp_caller_statecode;
  statuscode: ppp_caller_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ppp_Caller_Expand {
  ppp_Traveller: WebExpand<ppp_Caller_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { ppp_Traveller: ppp_Traveller_Result }>;
}
interface ppp_Caller_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  ppp_calltime_formatted?: string;
  ppp_traveller_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ppp_Caller_Result extends ppp_Caller_Base, ppp_Caller_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ppp_traveller_guid: string | null;
}
interface ppp_Caller_RelatedOne {
  ppp_Traveller: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
}
interface ppp_Caller_RelatedMany {
}
interface WebEntitiesRetrieve {
  ppp_callers: WebMappingRetrieve<ppp_Caller_Select,ppp_Caller_Expand,ppp_Caller_Filter,ppp_Caller_Fixed,ppp_Caller_Result,ppp_Caller_FormattedResult>;
}
interface WebEntitiesRelated {
  ppp_callers: WebMappingRelated<ppp_Caller_RelatedOne,ppp_Caller_RelatedMany>;
}
interface WebEntitiesCUDA {
  ppp_callers: WebMappingCUDA<ppp_Caller_Create,ppp_Caller_Update,ppp_Caller_Select>;
}
