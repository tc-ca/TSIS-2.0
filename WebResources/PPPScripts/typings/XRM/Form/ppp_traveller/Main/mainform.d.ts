declare namespace Form.ppp_traveller.Main {
  namespace mainform {
    namespace Tabs {
      interface tab_Decision extends Xrm.SectionCollectionBase {
        get(name: "tab_12_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_DetailedTravellerInformation extends Xrm.SectionCollectionBase {
        get(name: "tab_7_section_1"): Xrm.PageSection;
        get(name: "tab_DetailedTravellerInformation_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_General extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_General_section_1"): Xrm.PageSection;
        get(name: "tab_General_section_3"): Xrm.PageSection;
        get(name: "tab_General_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_Interactions extends Xrm.SectionCollectionBase {
        get(name: "tab_5_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_RecommendedAction extends Xrm.SectionCollectionBase {
        get(name: "tab_9_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_TravelDetails extends Xrm.SectionCollectionBase {
        get(name: "tab_8_section_1"): Xrm.PageSection;
        get(name: "tab_TravelDetails_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_TravellerInformation extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_TravellerInformation_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_dev extends Xrm.SectionCollectionBase {
        get(name: "tab_12_section_2"): Xrm.PageSection;
        get(name: "tab_dev_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ppp_aircarrier"): Xrm.LookupAttribute<"ovs_aircarrier">;
      get(name: "ppp_baggagecarryon"): Xrm.Attribute<any>;
      get(name: "ppp_baggagechecked"): Xrm.Attribute<any>;
      get(name: "ppp_calltype"): Xrm.OptionSetAttribute<ppp_calltype>;
      get(name: "ppp_casebriefoptionother"): Xrm.Attribute<string>;
      get(name: "ppp_casebriefoptions"): Xrm.OptionSetAttribute<ppp_casebriefoptions>;
      get(name: "ppp_checkedbaggagetagnumber"): Xrm.Attribute<string>;
      get(name: "ppp_citizenship"): Xrm.LookupAttribute<"tc_country">;
      get(name: "ppp_dateofbirth"): Xrm.DateAttribute;
      get(name: "ppp_directionoptionother"): Xrm.Attribute<string>;
      get(name: "ppp_directionoptions"): Xrm.MultiSelectOptionSetAttribute<ppp_directionoptions>;
      get(name: "ppp_directiontime"): Xrm.DateAttribute;
      get(name: "ppp_finalstatustime"): Xrm.DateAttribute;
      get(name: "ppp_firstname"): Xrm.Attribute<string>;
      get(name: "ppp_flightconnection1"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection10"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection2"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection3"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection4"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection5"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection6"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection7"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection8"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnection9"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightconnectioncount"): Xrm.Attribute<any>;
      get(name: "ppp_flightdestination"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightnumber"): Xrm.Attribute<string>;
      get(name: "ppp_flightorigin"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightorigindate"): Xrm.DateAttribute;
      get(name: "ppp_flightoriginhour"): Xrm.Attribute<any>;
      get(name: "ppp_flightoriginminute"): Xrm.NumberAttribute;
      get(name: "ppp_flightorigintime"): Xrm.DateAttribute;
      get(name: "ppp_gender"): Xrm.OptionSetAttribute<ppp_gender>;
      get(name: "ppp_idcountry"): Xrm.LookupAttribute<"tc_country">;
      get(name: "ppp_iddetails"): Xrm.Attribute<string>;
      get(name: "ppp_idsused"): Xrm.MultiSelectOptionSetAttribute<ppp_idsused>;
      get(name: "ppp_ispresent"): Xrm.Attribute<any>;
      get(name: "ppp_ispresenttime"): Xrm.DateAttribute;
      get(name: "ppp_lastknownaddress"): Xrm.Attribute<string>;
      get(name: "ppp_lastname"): Xrm.Attribute<string>;
      get(name: "ppp_lawenforcementagency"): Xrm.OptionSetAttribute<ppp_nominatingagencyadditional>;
      get(name: "ppp_lawenforcementnotifieddetails"): Xrm.Attribute<string>;
      get(name: "ppp_matchfound"): Xrm.OptionSetAttribute<ppp_matchfound>;
      get(name: "ppp_matchfoundtime"): Xrm.DateAttribute;
      get(name: "ppp_middlename"): Xrm.Attribute<string>;
      get(name: "ppp_minuteswaiting"): Xrm.Attribute<any>;
      get(name: "ppp_name"): Xrm.Attribute<string>;
      get(name: "ppp_nameprovidedoptions"): Xrm.OptionSetAttribute<ppp_nameprovidedoptions>;
      get(name: "ppp_newrecordtime"): Xrm.DateAttribute;
      get(name: "ppp_nominatingagencyadditional"): Xrm.OptionSetAttribute<ppp_nominatingagencyadditional>;
      get(name: "ppp_nominatingagencynotes"): Xrm.Attribute<string>;
      get(name: "ppp_nominatingagencyoptionother"): Xrm.Attribute<string>;
      get(name: "ppp_nominatingagencyoptions"): Xrm.OptionSetAttribute<ppp_nominatingagencyoptions>;
      get(name: "ppp_opensourceadditional"): Xrm.OptionSetAttribute<ppp_opensourceadditional>;
      get(name: "ppp_opensourcenotes"): Xrm.Attribute<string>;
      get(name: "ppp_otherconsiderations"): Xrm.Attribute<string>;
      get(name: "ppp_otherconsiderationsdropdown"): Xrm.OptionSetAttribute<ppp_otherconsiderationsdropdown>;
      get(name: "ppp_paymentmethod"): Xrm.OptionSetAttribute<ppp_paymentmethod>;
      get(name: "ppp_questionsfortc"): Xrm.Attribute<string>;
      get(name: "ppp_recordstatus"): Xrm.OptionSetAttribute<ppp_recordstatus>;
      get(name: "ppp_recourseletterprovided"): Xrm.OptionSetAttribute<ppp_nominatingagencyadditional>;
      get(name: "ppp_returnflightinfo"): Xrm.Attribute<string>;
      get(name: "ppp_returnticketdate"): Xrm.DateAttribute;
      get(name: "ppp_sataid"): Xrm.Attribute<string>;
      get(name: "ppp_seatrequestdetails"): Xrm.Attribute<string>;
      get(name: "ppp_seatrequestmade"): Xrm.OptionSetAttribute<ppp_seatrequestmade>;
      get(name: "ppp_ticketpurchasedate"): Xrm.DateAttribute;
      get(name: "ppp_ticketpurchasemethod"): Xrm.OptionSetAttribute<ppp_ticketpurchasemethod>;
      get(name: "ppp_tickettype"): Xrm.OptionSetAttribute<ppp_tickettype>;
      get(name: "ppp_travelagencyaddress"): Xrm.Attribute<string>;
      get(name: "ppp_travelagencycontactname"): Xrm.Attribute<string>;
      get(name: "ppp_travelagencycontactphonenumber"): Xrm.Attribute<string>;
      get(name: "ppp_travelagencyname"): Xrm.Attribute<string>;
      get(name: "ppp_travelcompanionsdetails"): Xrm.Attribute<string>;
      get(name: "ppp_travelcompanionsnumber"): Xrm.Attribute<any>;
      get(name: "ppp_travelpurpose"): Xrm.OptionSetAttribute<ppp_travelpurpose>;
      get(name: "ppp_travelpurposeother"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Callers"): Xrm.SubGridControl<"ppp_caller">;
      get(name: "WebResource_Feedback"): Xrm.WebResourceControl;
      get(name: "WebResource_traveller"): Xrm.WebResourceControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ppp_aircarrier"): Xrm.LookupControl<"ovs_aircarrier">;
      get(name: "ppp_aircarrier1"): Xrm.LookupControl<"ovs_aircarrier">;
      get(name: "ppp_baggagecarryon"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_baggagechecked"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_calltype"): Xrm.OptionSetControl<ppp_calltype>;
      get(name: "ppp_casebriefoptionother"): Xrm.StringControl;
      get(name: "ppp_casebriefoptions"): Xrm.OptionSetControl<ppp_casebriefoptions>;
      get(name: "ppp_checkedbaggagetagnumber"): Xrm.StringControl;
      get(name: "ppp_citizenship"): Xrm.LookupControl<"tc_country">;
      get(name: "ppp_citizenship1"): Xrm.LookupControl<"tc_country">;
      get(name: "ppp_dateofbirth"): Xrm.DateControl;
      get(name: "ppp_dateofbirth1"): Xrm.DateControl;
      get(name: "ppp_directionoptionother"): Xrm.StringControl;
      get(name: "ppp_directionoptions"): Xrm.MultiSelectOptionSetControl<ppp_directionoptions>;
      get(name: "ppp_directiontime"): Xrm.DateControl;
      get(name: "ppp_directiontime1"): Xrm.DateControl;
      get(name: "ppp_finalstatustime"): Xrm.DateControl;
      get(name: "ppp_firstname"): Xrm.StringControl;
      get(name: "ppp_firstname1"): Xrm.StringControl;
      get(name: "ppp_flightconnection1"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection10"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection101"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection11"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection2"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection21"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection3"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection31"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection4"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection41"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection5"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection51"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection6"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection61"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection7"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection71"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection8"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection81"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection9"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection91"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnectioncount"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_flightdestination"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightdestination1"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightnumber"): Xrm.StringControl;
      get(name: "ppp_flightnumber1"): Xrm.StringControl;
      get(name: "ppp_flightorigin"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightorigin1"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightorigindate"): Xrm.DateControl;
      get(name: "ppp_flightorigindate1"): Xrm.DateControl;
      get(name: "ppp_flightoriginhour"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_flightoriginhour1"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_flightoriginminute"): Xrm.NumberControl;
      get(name: "ppp_flightorigintime"): Xrm.DateControl;
      get(name: "ppp_gender"): Xrm.OptionSetControl<ppp_gender>;
      get(name: "ppp_gender1"): Xrm.OptionSetControl<ppp_gender>;
      get(name: "ppp_idcountry"): Xrm.LookupControl<"tc_country">;
      get(name: "ppp_idcountry1"): Xrm.LookupControl<"tc_country">;
      get(name: "ppp_iddetails"): Xrm.StringControl;
      get(name: "ppp_iddetails1"): Xrm.StringControl;
      get(name: "ppp_idsused"): Xrm.MultiSelectOptionSetControl<ppp_idsused>;
      get(name: "ppp_idsused1"): Xrm.MultiSelectOptionSetControl<ppp_idsused>;
      get(name: "ppp_ispresent"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_ispresent1"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_ispresenttime"): Xrm.DateControl;
      get(name: "ppp_lastknownaddress"): Xrm.StringControl;
      get(name: "ppp_lastknownaddress1"): Xrm.StringControl;
      get(name: "ppp_lastname"): Xrm.StringControl;
      get(name: "ppp_lastname1"): Xrm.StringControl;
      get(name: "ppp_lawenforcementagency"): Xrm.OptionSetControl<ppp_nominatingagencyadditional>;
      get(name: "ppp_lawenforcementnotifieddetails"): Xrm.StringControl;
      get(name: "ppp_matchfound"): Xrm.OptionSetControl<ppp_matchfound>;
      get(name: "ppp_matchfoundtime"): Xrm.DateControl;
      get(name: "ppp_middlename"): Xrm.StringControl;
      get(name: "ppp_middlename1"): Xrm.StringControl;
      get(name: "ppp_minuteswaiting"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_minuteswaiting1"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_name"): Xrm.StringControl;
      get(name: "ppp_nameprovidedoptions"): Xrm.OptionSetControl<ppp_nameprovidedoptions>;
      get(name: "ppp_newrecordtime"): Xrm.DateControl;
      get(name: "ppp_nominatingagencyadditional"): Xrm.OptionSetControl<ppp_nominatingagencyadditional>;
      get(name: "ppp_nominatingagencynotes"): Xrm.StringControl;
      get(name: "ppp_nominatingagencyoptionother"): Xrm.StringControl;
      get(name: "ppp_nominatingagencyoptions"): Xrm.OptionSetControl<ppp_nominatingagencyoptions>;
      get(name: "ppp_opensourceadditional"): Xrm.OptionSetControl<ppp_opensourceadditional>;
      get(name: "ppp_opensourcenotes"): Xrm.StringControl;
      get(name: "ppp_otherconsiderations"): Xrm.StringControl;
      get(name: "ppp_otherconsiderationsdropdown"): Xrm.OptionSetControl<ppp_otherconsiderationsdropdown>;
      get(name: "ppp_paymentmethod"): Xrm.OptionSetControl<ppp_paymentmethod>;
      get(name: "ppp_questionsfortc"): Xrm.StringControl;
      get(name: "ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus>;
      get(name: "ppp_recourseletterprovided"): Xrm.OptionSetControl<ppp_nominatingagencyadditional>;
      get(name: "ppp_returnflightinfo"): Xrm.StringControl;
      get(name: "ppp_returnticketdate"): Xrm.DateControl;
      get(name: "ppp_sataid"): Xrm.StringControl;
      get(name: "ppp_seatrequestdetails"): Xrm.StringControl;
      get(name: "ppp_seatrequestmade"): Xrm.OptionSetControl<ppp_seatrequestmade>;
      get(name: "ppp_ticketpurchasedate"): Xrm.DateControl;
      get(name: "ppp_ticketpurchasemethod"): Xrm.OptionSetControl<ppp_ticketpurchasemethod>;
      get(name: "ppp_tickettype"): Xrm.OptionSetControl<ppp_tickettype>;
      get(name: "ppp_travelagencyaddress"): Xrm.StringControl;
      get(name: "ppp_travelagencycontactname"): Xrm.StringControl;
      get(name: "ppp_travelagencycontactphonenumber"): Xrm.StringControl;
      get(name: "ppp_travelagencyname"): Xrm.StringControl;
      get(name: "ppp_travelcompanionsdetails"): Xrm.StringControl;
      get(name: "ppp_travelcompanionsnumber"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_travelpurpose"): Xrm.OptionSetControl<ppp_travelpurpose>;
      get(name: "ppp_travelpurposeother"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_Decision"): Xrm.PageTab<Tabs.tab_Decision>;
      get(name: "tab_DetailedTravellerInformation"): Xrm.PageTab<Tabs.tab_DetailedTravellerInformation>;
      get(name: "tab_General"): Xrm.PageTab<Tabs.tab_General>;
      get(name: "tab_Interactions"): Xrm.PageTab<Tabs.tab_Interactions>;
      get(name: "tab_RecommendedAction"): Xrm.PageTab<Tabs.tab_RecommendedAction>;
      get(name: "tab_TravelDetails"): Xrm.PageTab<Tabs.tab_TravelDetails>;
      get(name: "tab_TravellerInformation"): Xrm.PageTab<Tabs.tab_TravellerInformation>;
      get(name: "tab_dev"): Xrm.PageTab<Tabs.tab_dev>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface mainform extends Xrm.PageBase<mainform.Attributes,mainform.Tabs,mainform.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ppp_aircarrier"): Xrm.LookupAttribute<"ovs_aircarrier">;
    getAttribute(attributeName: "ppp_baggagecarryon"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_baggagechecked"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_calltype"): Xrm.OptionSetAttribute<ppp_calltype>;
    getAttribute(attributeName: "ppp_casebriefoptionother"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_casebriefoptions"): Xrm.OptionSetAttribute<ppp_casebriefoptions>;
    getAttribute(attributeName: "ppp_checkedbaggagetagnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_citizenship"): Xrm.LookupAttribute<"tc_country">;
    getAttribute(attributeName: "ppp_dateofbirth"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_directionoptionother"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_directionoptions"): Xrm.MultiSelectOptionSetAttribute<ppp_directionoptions>;
    getAttribute(attributeName: "ppp_directiontime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_finalstatustime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_flightconnection1"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection10"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection2"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection3"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection4"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection5"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection6"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection7"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection8"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnection9"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightconnectioncount"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_flightdestination"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_flightorigin"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightorigindate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_flightoriginhour"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_flightoriginminute"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ppp_flightorigintime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_gender"): Xrm.OptionSetAttribute<ppp_gender>;
    getAttribute(attributeName: "ppp_idcountry"): Xrm.LookupAttribute<"tc_country">;
    getAttribute(attributeName: "ppp_iddetails"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_idsused"): Xrm.MultiSelectOptionSetAttribute<ppp_idsused>;
    getAttribute(attributeName: "ppp_ispresent"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_ispresenttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_lastknownaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_lawenforcementagency"): Xrm.OptionSetAttribute<ppp_nominatingagencyadditional>;
    getAttribute(attributeName: "ppp_lawenforcementnotifieddetails"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_matchfound"): Xrm.OptionSetAttribute<ppp_matchfound>;
    getAttribute(attributeName: "ppp_matchfoundtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_middlename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_minuteswaiting"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_nameprovidedoptions"): Xrm.OptionSetAttribute<ppp_nameprovidedoptions>;
    getAttribute(attributeName: "ppp_newrecordtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_nominatingagencyadditional"): Xrm.OptionSetAttribute<ppp_nominatingagencyadditional>;
    getAttribute(attributeName: "ppp_nominatingagencynotes"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_nominatingagencyoptionother"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_nominatingagencyoptions"): Xrm.OptionSetAttribute<ppp_nominatingagencyoptions>;
    getAttribute(attributeName: "ppp_opensourceadditional"): Xrm.OptionSetAttribute<ppp_opensourceadditional>;
    getAttribute(attributeName: "ppp_opensourcenotes"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_otherconsiderations"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_otherconsiderationsdropdown"): Xrm.OptionSetAttribute<ppp_otherconsiderationsdropdown>;
    getAttribute(attributeName: "ppp_paymentmethod"): Xrm.OptionSetAttribute<ppp_paymentmethod>;
    getAttribute(attributeName: "ppp_questionsfortc"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_recordstatus"): Xrm.OptionSetAttribute<ppp_recordstatus>;
    getAttribute(attributeName: "ppp_recourseletterprovided"): Xrm.OptionSetAttribute<ppp_nominatingagencyadditional>;
    getAttribute(attributeName: "ppp_returnflightinfo"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_returnticketdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_sataid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_seatrequestdetails"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_seatrequestmade"): Xrm.OptionSetAttribute<ppp_seatrequestmade>;
    getAttribute(attributeName: "ppp_ticketpurchasedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_ticketpurchasemethod"): Xrm.OptionSetAttribute<ppp_ticketpurchasemethod>;
    getAttribute(attributeName: "ppp_tickettype"): Xrm.OptionSetAttribute<ppp_tickettype>;
    getAttribute(attributeName: "ppp_travelagencyaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_travelagencycontactname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_travelagencycontactphonenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_travelagencyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_travelcompanionsdetails"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_travelcompanionsnumber"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_travelpurpose"): Xrm.OptionSetAttribute<ppp_travelpurpose>;
    getAttribute(attributeName: "ppp_travelpurposeother"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Callers"): Xrm.SubGridControl<"ppp_caller">;
    getControl(controlName: "WebResource_Feedback"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_traveller"): Xrm.WebResourceControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ppp_aircarrier"): Xrm.LookupControl<"ovs_aircarrier">;
    getControl(controlName: "ppp_aircarrier1"): Xrm.LookupControl<"ovs_aircarrier">;
    getControl(controlName: "ppp_baggagecarryon"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_baggagechecked"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_calltype"): Xrm.OptionSetControl<ppp_calltype>;
    getControl(controlName: "ppp_casebriefoptionother"): Xrm.StringControl;
    getControl(controlName: "ppp_casebriefoptions"): Xrm.OptionSetControl<ppp_casebriefoptions>;
    getControl(controlName: "ppp_checkedbaggagetagnumber"): Xrm.StringControl;
    getControl(controlName: "ppp_citizenship"): Xrm.LookupControl<"tc_country">;
    getControl(controlName: "ppp_citizenship1"): Xrm.LookupControl<"tc_country">;
    getControl(controlName: "ppp_dateofbirth"): Xrm.DateControl;
    getControl(controlName: "ppp_dateofbirth1"): Xrm.DateControl;
    getControl(controlName: "ppp_directionoptionother"): Xrm.StringControl;
    getControl(controlName: "ppp_directionoptions"): Xrm.MultiSelectOptionSetControl<ppp_directionoptions>;
    getControl(controlName: "ppp_directiontime"): Xrm.DateControl;
    getControl(controlName: "ppp_directiontime1"): Xrm.DateControl;
    getControl(controlName: "ppp_finalstatustime"): Xrm.DateControl;
    getControl(controlName: "ppp_firstname"): Xrm.StringControl;
    getControl(controlName: "ppp_firstname1"): Xrm.StringControl;
    getControl(controlName: "ppp_flightconnection1"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection10"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection101"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection11"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection2"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection21"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection3"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection31"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection4"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection41"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection5"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection51"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection6"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection61"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection7"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection71"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection8"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection81"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection9"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection91"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnectioncount"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_flightdestination"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightdestination1"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightnumber"): Xrm.StringControl;
    getControl(controlName: "ppp_flightnumber1"): Xrm.StringControl;
    getControl(controlName: "ppp_flightorigin"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightorigin1"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightorigindate"): Xrm.DateControl;
    getControl(controlName: "ppp_flightorigindate1"): Xrm.DateControl;
    getControl(controlName: "ppp_flightoriginhour"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_flightoriginhour1"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_flightoriginminute"): Xrm.NumberControl;
    getControl(controlName: "ppp_flightorigintime"): Xrm.DateControl;
    getControl(controlName: "ppp_gender"): Xrm.OptionSetControl<ppp_gender>;
    getControl(controlName: "ppp_gender1"): Xrm.OptionSetControl<ppp_gender>;
    getControl(controlName: "ppp_idcountry"): Xrm.LookupControl<"tc_country">;
    getControl(controlName: "ppp_idcountry1"): Xrm.LookupControl<"tc_country">;
    getControl(controlName: "ppp_iddetails"): Xrm.StringControl;
    getControl(controlName: "ppp_iddetails1"): Xrm.StringControl;
    getControl(controlName: "ppp_idsused"): Xrm.MultiSelectOptionSetControl<ppp_idsused>;
    getControl(controlName: "ppp_idsused1"): Xrm.MultiSelectOptionSetControl<ppp_idsused>;
    getControl(controlName: "ppp_ispresent"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_ispresent1"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_ispresenttime"): Xrm.DateControl;
    getControl(controlName: "ppp_lastknownaddress"): Xrm.StringControl;
    getControl(controlName: "ppp_lastknownaddress1"): Xrm.StringControl;
    getControl(controlName: "ppp_lastname"): Xrm.StringControl;
    getControl(controlName: "ppp_lastname1"): Xrm.StringControl;
    getControl(controlName: "ppp_lawenforcementagency"): Xrm.OptionSetControl<ppp_nominatingagencyadditional>;
    getControl(controlName: "ppp_lawenforcementnotifieddetails"): Xrm.StringControl;
    getControl(controlName: "ppp_matchfound"): Xrm.OptionSetControl<ppp_matchfound>;
    getControl(controlName: "ppp_matchfoundtime"): Xrm.DateControl;
    getControl(controlName: "ppp_middlename"): Xrm.StringControl;
    getControl(controlName: "ppp_middlename1"): Xrm.StringControl;
    getControl(controlName: "ppp_minuteswaiting"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_minuteswaiting1"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_name"): Xrm.StringControl;
    getControl(controlName: "ppp_nameprovidedoptions"): Xrm.OptionSetControl<ppp_nameprovidedoptions>;
    getControl(controlName: "ppp_newrecordtime"): Xrm.DateControl;
    getControl(controlName: "ppp_nominatingagencyadditional"): Xrm.OptionSetControl<ppp_nominatingagencyadditional>;
    getControl(controlName: "ppp_nominatingagencynotes"): Xrm.StringControl;
    getControl(controlName: "ppp_nominatingagencyoptionother"): Xrm.StringControl;
    getControl(controlName: "ppp_nominatingagencyoptions"): Xrm.OptionSetControl<ppp_nominatingagencyoptions>;
    getControl(controlName: "ppp_opensourceadditional"): Xrm.OptionSetControl<ppp_opensourceadditional>;
    getControl(controlName: "ppp_opensourcenotes"): Xrm.StringControl;
    getControl(controlName: "ppp_otherconsiderations"): Xrm.StringControl;
    getControl(controlName: "ppp_otherconsiderationsdropdown"): Xrm.OptionSetControl<ppp_otherconsiderationsdropdown>;
    getControl(controlName: "ppp_paymentmethod"): Xrm.OptionSetControl<ppp_paymentmethod>;
    getControl(controlName: "ppp_questionsfortc"): Xrm.StringControl;
    getControl(controlName: "ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus>;
    getControl(controlName: "ppp_recourseletterprovided"): Xrm.OptionSetControl<ppp_nominatingagencyadditional>;
    getControl(controlName: "ppp_returnflightinfo"): Xrm.StringControl;
    getControl(controlName: "ppp_returnticketdate"): Xrm.DateControl;
    getControl(controlName: "ppp_sataid"): Xrm.StringControl;
    getControl(controlName: "ppp_seatrequestdetails"): Xrm.StringControl;
    getControl(controlName: "ppp_seatrequestmade"): Xrm.OptionSetControl<ppp_seatrequestmade>;
    getControl(controlName: "ppp_ticketpurchasedate"): Xrm.DateControl;
    getControl(controlName: "ppp_ticketpurchasemethod"): Xrm.OptionSetControl<ppp_ticketpurchasemethod>;
    getControl(controlName: "ppp_tickettype"): Xrm.OptionSetControl<ppp_tickettype>;
    getControl(controlName: "ppp_travelagencyaddress"): Xrm.StringControl;
    getControl(controlName: "ppp_travelagencycontactname"): Xrm.StringControl;
    getControl(controlName: "ppp_travelagencycontactphonenumber"): Xrm.StringControl;
    getControl(controlName: "ppp_travelagencyname"): Xrm.StringControl;
    getControl(controlName: "ppp_travelcompanionsdetails"): Xrm.StringControl;
    getControl(controlName: "ppp_travelcompanionsnumber"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_travelpurpose"): Xrm.OptionSetControl<ppp_travelpurpose>;
    getControl(controlName: "ppp_travelpurposeother"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
