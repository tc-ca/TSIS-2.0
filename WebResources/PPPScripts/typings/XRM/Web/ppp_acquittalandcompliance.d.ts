interface ppp_AcquittalandCompliance_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  ppp_acquittalandcomplianceid?: string | null;
  ppp_flightorigindate?: Date | null;
  ppp_flightoriginhour?: number | null;
  ppp_flightoriginminute?: number | null;
  ppp_flightorigintime?: Date | null;
  ppp_name?: string | null;
  ppp_numberofflightconnection?: number | null;
  ppp_recordtype?: ppp_recordtype | null;
  statecode?: ppp_acquittalandcompliance_statecode | null;
  statuscode?: ppp_acquittalandcompliance_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ppp_AcquittalandCompliance_Relationships {
}
interface ppp_AcquittalandCompliance extends ppp_AcquittalandCompliance_Base, ppp_AcquittalandCompliance_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  ppp_AirCarrier_bind$ovs_aircarriers?: string | null;
  ppp_FlightConnection10_bind$ovs_facilities?: string | null;
  ppp_FlightConnection1_bind$ovs_facilities?: string | null;
  ppp_FlightConnection2_bind$ovs_facilities?: string | null;
  ppp_FlightConnection3_bind$ovs_facilities?: string | null;
  ppp_FlightConnection4_bind$ovs_facilities?: string | null;
  ppp_FlightConnection5_bind$ovs_facilities?: string | null;
  ppp_FlightConnection6_bind$ovs_facilities?: string | null;
  ppp_FlightConnection7_bind$ovs_facilities?: string | null;
  ppp_FlightConnection8_bind$ovs_facilities?: string | null;
  ppp_FlightConnection9_bind$ovs_facilities?: string | null;
  ppp_FlightDestination_bind$ovs_facilities?: string | null;
  ppp_FlightOrigin_bind$ovs_facilities?: string | null;
}
interface ppp_AcquittalandCompliance_Create extends ppp_AcquittalandCompliance {
}
interface ppp_AcquittalandCompliance_Update extends ppp_AcquittalandCompliance {
}
interface ppp_AcquittalandCompliance_Select {
  createdby_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ppp_AcquittalandCompliance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ppp_AcquittalandCompliance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ppp_AcquittalandCompliance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ppp_AcquittalandCompliance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  ppp_acquittalandcomplianceid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_acquittalandcomplianceid: string | null }, {  }>;
  ppp_aircarrier_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_aircarrier_guid: string | null }, { ppp_aircarrier_formatted?: string }>;
  ppp_flightconnection10_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection10_guid: string | null }, { ppp_flightconnection10_formatted?: string }>;
  ppp_flightconnection1_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection1_guid: string | null }, { ppp_flightconnection1_formatted?: string }>;
  ppp_flightconnection2_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection2_guid: string | null }, { ppp_flightconnection2_formatted?: string }>;
  ppp_flightconnection3_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection3_guid: string | null }, { ppp_flightconnection3_formatted?: string }>;
  ppp_flightconnection4_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection4_guid: string | null }, { ppp_flightconnection4_formatted?: string }>;
  ppp_flightconnection5_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection5_guid: string | null }, { ppp_flightconnection5_formatted?: string }>;
  ppp_flightconnection6_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection6_guid: string | null }, { ppp_flightconnection6_formatted?: string }>;
  ppp_flightconnection7_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection7_guid: string | null }, { ppp_flightconnection7_formatted?: string }>;
  ppp_flightconnection8_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection8_guid: string | null }, { ppp_flightconnection8_formatted?: string }>;
  ppp_flightconnection9_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightconnection9_guid: string | null }, { ppp_flightconnection9_formatted?: string }>;
  ppp_flightdestination_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightdestination_guid: string | null }, { ppp_flightdestination_formatted?: string }>;
  ppp_flightorigin_guid: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightorigin_guid: string | null }, { ppp_flightorigin_formatted?: string }>;
  ppp_flightorigindate: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightorigindate: Date | null }, { ppp_flightorigindate_formatted?: string }>;
  ppp_flightoriginhour: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightoriginhour: number | null }, {  }>;
  ppp_flightoriginminute: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightoriginminute: number | null }, {  }>;
  ppp_flightorigintime: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_flightorigintime: Date | null }, { ppp_flightorigintime_formatted?: string }>;
  ppp_name: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_name: string | null }, {  }>;
  ppp_numberofflightconnection: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_numberofflightconnection: number | null }, {  }>;
  ppp_recordtype: WebAttribute<ppp_AcquittalandCompliance_Select, { ppp_recordtype: ppp_recordtype | null }, { ppp_recordtype_formatted?: string }>;
  statecode: WebAttribute<ppp_AcquittalandCompliance_Select, { statecode: ppp_acquittalandcompliance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ppp_AcquittalandCompliance_Select, { statuscode: ppp_acquittalandcompliance_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ppp_AcquittalandCompliance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ppp_AcquittalandCompliance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ppp_AcquittalandCompliance_Select, { versionnumber: number | null }, {  }>;
}
interface ppp_AcquittalandCompliance_Filter {
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
  ppp_acquittalandcomplianceid: XQW.Guid;
  ppp_aircarrier_guid: XQW.Guid;
  ppp_flightconnection10_guid: XQW.Guid;
  ppp_flightconnection1_guid: XQW.Guid;
  ppp_flightconnection2_guid: XQW.Guid;
  ppp_flightconnection3_guid: XQW.Guid;
  ppp_flightconnection4_guid: XQW.Guid;
  ppp_flightconnection5_guid: XQW.Guid;
  ppp_flightconnection6_guid: XQW.Guid;
  ppp_flightconnection7_guid: XQW.Guid;
  ppp_flightconnection8_guid: XQW.Guid;
  ppp_flightconnection9_guid: XQW.Guid;
  ppp_flightdestination_guid: XQW.Guid;
  ppp_flightorigin_guid: XQW.Guid;
  ppp_flightorigindate: Date;
  ppp_flightoriginhour: number;
  ppp_flightoriginminute: number;
  ppp_flightorigintime: Date;
  ppp_name: string;
  ppp_numberofflightconnection: number;
  ppp_recordtype: ppp_recordtype;
  statecode: ppp_acquittalandcompliance_statecode;
  statuscode: ppp_acquittalandcompliance_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ppp_AcquittalandCompliance_Expand {
}
interface ppp_AcquittalandCompliance_FormattedResult {
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
  ppp_aircarrier_formatted?: string;
  ppp_flightconnection10_formatted?: string;
  ppp_flightconnection1_formatted?: string;
  ppp_flightconnection2_formatted?: string;
  ppp_flightconnection3_formatted?: string;
  ppp_flightconnection4_formatted?: string;
  ppp_flightconnection5_formatted?: string;
  ppp_flightconnection6_formatted?: string;
  ppp_flightconnection7_formatted?: string;
  ppp_flightconnection8_formatted?: string;
  ppp_flightconnection9_formatted?: string;
  ppp_flightdestination_formatted?: string;
  ppp_flightorigin_formatted?: string;
  ppp_flightorigindate_formatted?: string;
  ppp_flightorigintime_formatted?: string;
  ppp_recordtype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ppp_AcquittalandCompliance_Result extends ppp_AcquittalandCompliance_Base, ppp_AcquittalandCompliance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ppp_aircarrier_guid: string | null;
  ppp_flightconnection10_guid: string | null;
  ppp_flightconnection1_guid: string | null;
  ppp_flightconnection2_guid: string | null;
  ppp_flightconnection3_guid: string | null;
  ppp_flightconnection4_guid: string | null;
  ppp_flightconnection5_guid: string | null;
  ppp_flightconnection6_guid: string | null;
  ppp_flightconnection7_guid: string | null;
  ppp_flightconnection8_guid: string | null;
  ppp_flightconnection9_guid: string | null;
  ppp_flightdestination_guid: string | null;
  ppp_flightorigin_guid: string | null;
}
interface ppp_AcquittalandCompliance_RelatedOne {
}
interface ppp_AcquittalandCompliance_RelatedMany {
}
interface WebEntitiesRetrieve {
  ppp_acquittalandcompliances: WebMappingRetrieve<ppp_AcquittalandCompliance_Select,ppp_AcquittalandCompliance_Expand,ppp_AcquittalandCompliance_Filter,ppp_AcquittalandCompliance_Fixed,ppp_AcquittalandCompliance_Result,ppp_AcquittalandCompliance_FormattedResult>;
}
interface WebEntitiesRelated {
  ppp_acquittalandcompliances: WebMappingRelated<ppp_AcquittalandCompliance_RelatedOne,ppp_AcquittalandCompliance_RelatedMany>;
}
interface WebEntitiesCUDA {
  ppp_acquittalandcompliances: WebMappingCUDA<ppp_AcquittalandCompliance_Create,ppp_AcquittalandCompliance_Update,ppp_AcquittalandCompliance_Select>;
}
