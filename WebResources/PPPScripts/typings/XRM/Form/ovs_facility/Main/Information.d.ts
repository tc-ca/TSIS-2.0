declare namespace Form.ovs_facility.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ovs_address1city"): Xrm.Attribute<string>;
      get(name: "ovs_address1latitude"): Xrm.NumberAttribute;
      get(name: "ovs_address1longitude"): Xrm.NumberAttribute;
      get(name: "ovs_address1stateprovince"): Xrm.Attribute<string>;
      get(name: "ovs_class"): Xrm.NumberAttribute;
      get(name: "ovs_countryid"): Xrm.LookupAttribute<"tc_country">;
      get(name: "ovs_elevation"): Xrm.NumberAttribute;
      get(name: "ovs_facilitynameenglish"): Xrm.Attribute<string>;
      get(name: "ovs_facilitynamefrench"): Xrm.Attribute<string>;
      get(name: "ovs_icaocode"): Xrm.Attribute<string>;
      get(name: "ovs_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ovs_address1city"): Xrm.StringControl;
      get(name: "ovs_address1latitude"): Xrm.NumberControl;
      get(name: "ovs_address1longitude"): Xrm.NumberControl;
      get(name: "ovs_address1stateprovince"): Xrm.StringControl;
      get(name: "ovs_class"): Xrm.NumberControl;
      get(name: "ovs_countryid"): Xrm.LookupControl<"tc_country">;
      get(name: "ovs_elevation"): Xrm.NumberControl;
      get(name: "ovs_facilitynameenglish"): Xrm.StringControl;
      get(name: "ovs_facilitynamefrench"): Xrm.StringControl;
      get(name: "ovs_icaocode"): Xrm.StringControl;
      get(name: "ovs_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "ovs_address1city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_address1latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ovs_address1longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ovs_address1stateprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_class"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ovs_countryid"): Xrm.LookupAttribute<"tc_country">;
    getAttribute(attributeName: "ovs_elevation"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ovs_facilitynameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_facilitynamefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_icaocode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ovs_address1city"): Xrm.StringControl;
    getControl(controlName: "ovs_address1latitude"): Xrm.NumberControl;
    getControl(controlName: "ovs_address1longitude"): Xrm.NumberControl;
    getControl(controlName: "ovs_address1stateprovince"): Xrm.StringControl;
    getControl(controlName: "ovs_class"): Xrm.NumberControl;
    getControl(controlName: "ovs_countryid"): Xrm.LookupControl<"tc_country">;
    getControl(controlName: "ovs_elevation"): Xrm.NumberControl;
    getControl(controlName: "ovs_facilitynameenglish"): Xrm.StringControl;
    getControl(controlName: "ovs_facilitynamefrench"): Xrm.StringControl;
    getControl(controlName: "ovs_icaocode"): Xrm.StringControl;
    getControl(controlName: "ovs_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
