declare namespace Form.ppp_caller.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ppp_calldate"): Xrm.DateAttribute;
      get(name: "ppp_calldatetime"): Xrm.DateAttribute;
      get(name: "ppp_callername"): Xrm.Attribute<string>;
      get(name: "ppp_calltimehour"): Xrm.Attribute<any>;
      get(name: "ppp_calltimeminute"): Xrm.NumberAttribute;
      get(name: "ppp_name"): Xrm.Attribute<string>;
      get(name: "ppp_traveller"): Xrm.LookupAttribute<"ppp_traveller">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ppp_calldate"): Xrm.DateControl;
      get(name: "ppp_calldatetime"): Xrm.DateControl;
      get(name: "ppp_callername"): Xrm.StringControl;
      get(name: "ppp_calltimehour"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ppp_calltimeminute"): Xrm.NumberControl;
      get(name: "ppp_name"): Xrm.StringControl;
      get(name: "ppp_traveller"): Xrm.LookupControl<"ppp_traveller">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ppp_calldate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_calldatetime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ppp_callername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_calltimehour"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ppp_calltimeminute"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ppp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_traveller"): Xrm.LookupAttribute<"ppp_traveller">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ppp_calldate"): Xrm.DateControl;
    getControl(controlName: "ppp_calldatetime"): Xrm.DateControl;
    getControl(controlName: "ppp_callername"): Xrm.StringControl;
    getControl(controlName: "ppp_calltimehour"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ppp_calltimeminute"): Xrm.NumberControl;
    getControl(controlName: "ppp_name"): Xrm.StringControl;
    getControl(controlName: "ppp_traveller"): Xrm.LookupControl<"ppp_traveller">;
    getControl(controlName: string): undefined;
  }
}
