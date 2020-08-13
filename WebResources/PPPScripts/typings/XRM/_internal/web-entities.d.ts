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
interface ovs_AirCarrier_Base extends WebEntity {
}
interface ovs_AirCarrier_Fixed extends WebEntity_Fixed {
  ovs_aircarrierid: string;
}
interface ovs_AirCarrier extends ovs_AirCarrier_Base, ovs_AirCarrier_Relationships {
}
interface ovs_AirCarrier_Relationships {
}
interface ovs_AirCarrier_Result extends ovs_AirCarrier_Base, ovs_AirCarrier_Relationships {
}
interface ovs_AirCarrier_FormattedResult {
}
interface ovs_AirCarrier_Select {
}
interface ovs_AirCarrier_Expand {
}
interface ovs_AirCarrier_Filter {
}
interface ovs_AirCarrier_Create extends ovs_AirCarrier {
}
interface ovs_AirCarrier_Update extends ovs_AirCarrier {
}
interface ovs_Facility_Base extends WebEntity {
}
interface ovs_Facility_Fixed extends WebEntity_Fixed {
  ovs_facilityid: string;
}
interface ovs_Facility extends ovs_Facility_Base, ovs_Facility_Relationships {
}
interface ovs_Facility_Relationships {
}
interface ovs_Facility_Result extends ovs_Facility_Base, ovs_Facility_Relationships {
}
interface ovs_Facility_FormattedResult {
}
interface ovs_Facility_Select {
}
interface ovs_Facility_Expand {
}
interface ovs_Facility_Filter {
}
interface ovs_Facility_Create extends ovs_Facility {
}
interface ovs_Facility_Update extends ovs_Facility {
}
interface ovs_ppp_Traveller_ovs_Facility_Base extends WebEntity {
}
interface ovs_ppp_Traveller_ovs_Facility_Fixed extends WebEntity_Fixed {
  ovs_ppp_traveller_ovs_facilityid: string;
}
interface ovs_ppp_Traveller_ovs_Facility extends ovs_ppp_Traveller_ovs_Facility_Base, ovs_ppp_Traveller_ovs_Facility_Relationships {
}
interface ovs_ppp_Traveller_ovs_Facility_Relationships {
}
interface ovs_ppp_Traveller_ovs_Facility_Result extends ovs_ppp_Traveller_ovs_Facility_Base, ovs_ppp_Traveller_ovs_Facility_Relationships {
}
interface ovs_ppp_Traveller_ovs_Facility_FormattedResult {
}
interface ovs_ppp_Traveller_ovs_Facility_Select {
}
interface ovs_ppp_Traveller_ovs_Facility_Expand {
}
interface ovs_ppp_Traveller_ovs_Facility_Filter {
}
interface ovs_ppp_Traveller_ovs_Facility_Create extends ovs_ppp_Traveller_ovs_Facility {
}
interface ovs_ppp_Traveller_ovs_Facility_Update extends ovs_ppp_Traveller_ovs_Facility {
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
interface ppp_travellerbusinessflow_Base extends WebEntity {
}
interface ppp_travellerbusinessflow_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface ppp_travellerbusinessflow extends ppp_travellerbusinessflow_Base, ppp_travellerbusinessflow_Relationships {
}
interface ppp_travellerbusinessflow_Relationships {
}
interface ppp_travellerbusinessflow_Result extends ppp_travellerbusinessflow_Base, ppp_travellerbusinessflow_Relationships {
}
interface ppp_travellerbusinessflow_FormattedResult {
}
interface ppp_travellerbusinessflow_Select {
}
interface ppp_travellerbusinessflow_Expand {
}
interface ppp_travellerbusinessflow_Filter {
}
interface ppp_travellerbusinessflow_Create extends ppp_travellerbusinessflow {
}
interface ppp_travellerbusinessflow_Update extends ppp_travellerbusinessflow {
}
interface tc_Country_Base extends WebEntity {
}
interface tc_Country_Fixed extends WebEntity_Fixed {
  tc_countryid: string;
}
interface tc_Country extends tc_Country_Base, tc_Country_Relationships {
}
interface tc_Country_Relationships {
}
interface tc_Country_Result extends tc_Country_Base, tc_Country_Relationships {
}
interface tc_Country_FormattedResult {
}
interface tc_Country_Select {
}
interface tc_Country_Expand {
}
interface tc_Country_Filter {
}
interface tc_Country_Create extends tc_Country {
}
interface tc_Country_Update extends tc_Country {
}
