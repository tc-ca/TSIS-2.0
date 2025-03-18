declare namespace Form.ppp_acquittalandcompliance.Main {
  namespace Information {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_4 extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ppp_aircarrier"): Xrm.LookupAttribute<"ovs_aircarrier">;
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
      get(name: "ppp_flightdestination"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightorigin"): Xrm.LookupAttribute<"ovs_facility">;
      get(name: "ppp_flightorigindate"): Xrm.DateAttribute;
      get(name: "ppp_flightoriginhour"): Xrm.Attribute<any>;
      get(name: "ppp_name"): Xrm.Attribute<string>;
      get(name: "ppp_numberofflightconnection"): Xrm.Attribute<any>;
      get(name: "ppp_recordtype"): Xrm.Attribute<any>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ppp_aircarrier"): Xrm.LookupControl<"ovs_aircarrier">;
      get(name: "ppp_flightconnection1"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection10"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection2"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection3"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection4"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection5"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection6"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection7"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection8"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightconnection9"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightdestination"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightorigin"): Xrm.LookupControl<"ovs_facility">;
      get(name: "ppp_flightorigindate"): Xrm.DateControl;
      get(name: "ppp_flightoriginhour"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_name"): Xrm.StringControl;
      get(name: "ppp_numberofflightconnection"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_recordtype"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: "tab_4"): Xrm.PageTab<Tabs.tab_4>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ppp_aircarrier"): Xrm.LookupAttribute<"ovs_aircarrier">;
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
    getAttribute(attributeName: "ppp_flightdestination"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightorigin"): Xrm.LookupAttribute<"ovs_facility">;
    getAttribute(attributeName: "ppp_flightorigindate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_flightoriginhour"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_numberofflightconnection"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_recordtype"): Xrm.Attribute<any>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ppp_aircarrier"): Xrm.LookupControl<"ovs_aircarrier">;
    getControl(controlName: "ppp_flightconnection1"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection10"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection2"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection3"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection4"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection5"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection6"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection7"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection8"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightconnection9"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightdestination"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightorigin"): Xrm.LookupControl<"ovs_facility">;
    getControl(controlName: "ppp_flightorigindate"): Xrm.DateControl;
    getControl(controlName: "ppp_flightoriginhour"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_name"): Xrm.StringControl;
    getControl(controlName: "ppp_numberofflightconnection"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_recordtype"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: string): undefined;
  }
}
