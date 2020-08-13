interface ppp_travellerbusinessflow_Base extends WebEntity {
  activestagestartedon?: Date | null;
  bpf_duration?: number | null;
  bpf_name?: string | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: ppp_travellerbusinessflow_statecode | null;
  statuscode?: ppp_travellerbusinessflow_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ppp_travellerbusinessflow_Relationships {
}
interface ppp_travellerbusinessflow extends ppp_travellerbusinessflow_Base, ppp_travellerbusinessflow_Relationships {
  activestageid_bind$processstages?: string | null;
  bpf_ppp_travellerid_bind$ppp_travellers?: string | null;
  processid_bind$workflows?: string | null;
}
interface ppp_travellerbusinessflow_Create extends ppp_travellerbusinessflow {
}
interface ppp_travellerbusinessflow_Update extends ppp_travellerbusinessflow {
}
interface ppp_travellerbusinessflow_Select {
  activestageid_guid: WebAttribute<ppp_travellerbusinessflow_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<ppp_travellerbusinessflow_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  bpf_duration: WebAttribute<ppp_travellerbusinessflow_Select, { bpf_duration: number | null }, {  }>;
  bpf_name: WebAttribute<ppp_travellerbusinessflow_Select, { bpf_name: string | null }, {  }>;
  bpf_ppp_travellerid_guid: WebAttribute<ppp_travellerbusinessflow_Select, { bpf_ppp_travellerid_guid: string | null }, { bpf_ppp_travellerid_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<ppp_travellerbusinessflow_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<ppp_travellerbusinessflow_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<ppp_travellerbusinessflow_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ppp_travellerbusinessflow_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ppp_travellerbusinessflow_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ppp_travellerbusinessflow_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ppp_travellerbusinessflow_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ppp_travellerbusinessflow_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ppp_travellerbusinessflow_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<ppp_travellerbusinessflow_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ppp_travellerbusinessflow_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<ppp_travellerbusinessflow_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<ppp_travellerbusinessflow_Select, { statecode: ppp_travellerbusinessflow_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ppp_travellerbusinessflow_Select, { statuscode: ppp_travellerbusinessflow_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ppp_travellerbusinessflow_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<ppp_travellerbusinessflow_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ppp_travellerbusinessflow_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ppp_travellerbusinessflow_Select, { versionnumber: number | null }, {  }>;
}
interface ppp_travellerbusinessflow_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  bpf_duration: number;
  bpf_name: string;
  bpf_ppp_travellerid_guid: XQW.Guid;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: ppp_travellerbusinessflow_statecode;
  statuscode: ppp_travellerbusinessflow_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ppp_travellerbusinessflow_Expand {
  bpf_ppp_travellerid: WebExpand<ppp_travellerbusinessflow_Expand, ppp_Traveller_Select, ppp_Traveller_Filter, { bpf_ppp_travellerid: ppp_Traveller_Result }>;
}
interface ppp_travellerbusinessflow_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  bpf_ppp_travellerid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ppp_travellerbusinessflow_Result extends ppp_travellerbusinessflow_Base, ppp_travellerbusinessflow_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  bpf_ppp_travellerid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
}
interface ppp_travellerbusinessflow_RelatedOne {
  bpf_ppp_travellerid: WebMappingRetrieve<ppp_Traveller_Select,ppp_Traveller_Expand,ppp_Traveller_Filter,ppp_Traveller_Fixed,ppp_Traveller_Result,ppp_Traveller_FormattedResult>;
}
interface ppp_travellerbusinessflow_RelatedMany {
}
interface WebEntitiesRetrieve {
  ppp_travellerbusinessflows: WebMappingRetrieve<ppp_travellerbusinessflow_Select,ppp_travellerbusinessflow_Expand,ppp_travellerbusinessflow_Filter,ppp_travellerbusinessflow_Fixed,ppp_travellerbusinessflow_Result,ppp_travellerbusinessflow_FormattedResult>;
}
interface WebEntitiesRelated {
  ppp_travellerbusinessflows: WebMappingRelated<ppp_travellerbusinessflow_RelatedOne,ppp_travellerbusinessflow_RelatedMany>;
}
interface WebEntitiesCUDA {
  ppp_travellerbusinessflows: WebMappingCUDA<ppp_travellerbusinessflow_Create,ppp_travellerbusinessflow_Update,ppp_travellerbusinessflow_Select>;
}
