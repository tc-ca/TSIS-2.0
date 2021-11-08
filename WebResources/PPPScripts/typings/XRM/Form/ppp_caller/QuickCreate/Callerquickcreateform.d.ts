declare namespace Form.ppp_caller.QuickCreate {
  namespace Callerquickcreateform {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ppp_callername"): Xrm.Attribute<string>;
      get(name: "ppp_calltime"): Xrm.DateAttribute;
      get(name: "ppp_name"): Xrm.Attribute<string>;
      get(name: "ppp_traveller"): Xrm.LookupAttribute<"ppp_traveller">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ppp_callername"): Xrm.StringControl;
      get(name: "ppp_calltime"): Xrm.DateControl;
      get(name: "ppp_name"): Xrm.StringControl;
      get(name: "ppp_traveller"): Xrm.LookupControl<"ppp_traveller">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Callerquickcreateform extends Xrm.PageBase<Callerquickcreateform.Attributes,Callerquickcreateform.Tabs,Callerquickcreateform.Controls> {
    getAttribute(attributeName: "ppp_callername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_calltime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_traveller"): Xrm.LookupAttribute<"ppp_traveller">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ppp_callername"): Xrm.StringControl;
    getControl(controlName: "ppp_calltime"): Xrm.DateControl;
    getControl(controlName: "ppp_name"): Xrm.StringControl;
    getControl(controlName: "ppp_traveller"): Xrm.LookupControl<"ppp_traveller">;
    getControl(controlName: string): undefined;
  }
}
