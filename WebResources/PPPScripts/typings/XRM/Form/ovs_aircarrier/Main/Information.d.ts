declare namespace Form.ovs_aircarrier.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ovs_aircarriername"): Xrm.Attribute<string>;
      get(name: "ovs_country"): Xrm.LookupAttribute<"tc_country">;
      get(name: "ovs_icaocode"): Xrm.Attribute<string>;
      get(name: "ovs_organization"): Xrm.LookupAttribute<"account">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ovs_aircarriername"): Xrm.StringControl;
      get(name: "ovs_country"): Xrm.LookupControl<"tc_country">;
      get(name: "ovs_icaocode"): Xrm.StringControl;
      get(name: "ovs_organization"): Xrm.LookupControl<"account">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
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
    getAttribute(attributeName: "ovs_aircarriername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_country"): Xrm.LookupAttribute<"tc_country">;
    getAttribute(attributeName: "ovs_icaocode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_organization"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ovs_aircarriername"): Xrm.StringControl;
    getControl(controlName: "ovs_country"): Xrm.LookupControl<"tc_country">;
    getControl(controlName: "ovs_icaocode"): Xrm.StringControl;
    getControl(controlName: "ovs_organization"): Xrm.LookupControl<"account">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
