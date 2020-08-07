declare namespace Form.ppp_traveller.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ppp_ispresent"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "ppp_matchfound"): Xrm.OptionSetAttribute<ppp_matchfound> | null;
      get(name: "ppp_name"): Xrm.Attribute<string>;
      get(name: "ppp_recordstatus"): Xrm.OptionSetAttribute<ppp_recordstatus> | null;
      get(name: "ppp_recourseletterreceived"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_ppp_ispresent"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_ppp_matchfound"): Xrm.OptionSetControl<ppp_matchfound> | null;
      get(name: "header_process_ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus> | null;
      get(name: "header_process_ppp_recordstatus_1"): Xrm.OptionSetControl<ppp_recordstatus> | null;
      get(name: "header_process_ppp_recordstatus_2"): Xrm.OptionSetControl<ppp_recordstatus> | null;
      get(name: "header_process_ppp_recourseletterreceived"): Xrm.OptionSetControl<boolean> | null;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ppp_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "ppp_ispresent"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "ppp_matchfound"): Xrm.OptionSetAttribute<ppp_matchfound> | null;
    getAttribute(attributeName: "ppp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ppp_recordstatus"): Xrm.OptionSetAttribute<ppp_recordstatus> | null;
    getAttribute(attributeName: "ppp_recourseletterreceived"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_process_ppp_ispresent"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_ppp_matchfound"): Xrm.OptionSetControl<ppp_matchfound> | null;
    getControl(controlName: "header_process_ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus> | null;
    getControl(controlName: "header_process_ppp_recordstatus_1"): Xrm.OptionSetControl<ppp_recordstatus> | null;
    getControl(controlName: "header_process_ppp_recordstatus_2"): Xrm.OptionSetControl<ppp_recordstatus> | null;
    getControl(controlName: "header_process_ppp_recourseletterreceived"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ppp_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
