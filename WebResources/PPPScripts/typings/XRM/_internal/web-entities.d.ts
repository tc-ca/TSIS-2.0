interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface ppp_AcquittalandCompliance_Base extends WebEntity {
}
interface ppp_AcquittalandCompliance_Fixed extends WebEntity_Fixed {
  ppp_acquittalandcomplianceid: string;
}
interface ppp_AcquittalandCompliance extends ppp_AcquittalandCompliance_Base, ppp_AcquittalandCompliance_Relationships {
}
interface ppp_AcquittalandCompliance_Relationships {
}
interface ppp_AcquittalandCompliance_Result extends ppp_AcquittalandCompliance_Base, ppp_AcquittalandCompliance_Relationships {
}
interface ppp_AcquittalandCompliance_FormattedResult {
}
interface ppp_AcquittalandCompliance_Select {
}
interface ppp_AcquittalandCompliance_Expand {
}
interface ppp_AcquittalandCompliance_Filter {
}
interface ppp_AcquittalandCompliance_Create extends ppp_AcquittalandCompliance {
}
interface ppp_AcquittalandCompliance_Update extends ppp_AcquittalandCompliance {
}
interface ppp_Caller_Base extends WebEntity {
}
interface ppp_Caller_Fixed extends WebEntity_Fixed {
  ppp_callerid: string;
}
interface ppp_Caller extends ppp_Caller_Base, ppp_Caller_Relationships {
}
interface ppp_Caller_Relationships {
}
interface ppp_Caller_Result extends ppp_Caller_Base, ppp_Caller_Relationships {
}
interface ppp_Caller_FormattedResult {
}
interface ppp_Caller_Select {
}
interface ppp_Caller_Expand {
}
interface ppp_Caller_Filter {
}
interface ppp_Caller_Create extends ppp_Caller {
}
interface ppp_Caller_Update extends ppp_Caller {
}
interface ppp_Traveller_Base extends WebEntity {
}
interface ppp_Traveller_Fixed extends WebEntity_Fixed {
  ppp_travellerid: string;
}
interface ppp_Traveller extends ppp_Traveller_Base, ppp_Traveller_Relationships {
}
interface ppp_Traveller_Relationships {
}
interface ppp_Traveller_Result extends ppp_Traveller_Base, ppp_Traveller_Relationships {
}
interface ppp_Traveller_FormattedResult {
}
interface ppp_Traveller_Select {
}
interface ppp_Traveller_Expand {
}
interface ppp_Traveller_Filter {
}
interface ppp_Traveller_Create extends ppp_Traveller {
}
interface ppp_Traveller_Update extends ppp_Traveller {
}
