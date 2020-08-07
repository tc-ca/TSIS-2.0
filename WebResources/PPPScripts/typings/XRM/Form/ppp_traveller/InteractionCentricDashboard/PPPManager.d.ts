declare namespace Form.ppp_traveller.InteractionCentricDashboard {
  namespace PPPManager {
    namespace Tabs {
      interface StreamsContainer extends Xrm.SectionCollectionBase {
        get(name: "Streams"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ppp_ispresent"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "ppp_matchfound"): Xrm.OptionSetAttribute<ppp_matchfound> | null;
      get(name: "ppp_recordstatus"): Xrm.OptionSetAttribute<ppp_recordstatus> | null;
      get(name: "ppp_recourseletterreceived"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Component7d1a736"): Xrm.SubGridControl<"ppp_traveller">;
      get(name: "Componenta10e9e8"): Xrm.SubGridControl<"ppp_traveller">;
      get(name: "Componentcf50b97"): Xrm.SubGridControl<"ppp_traveller">;
      get(name: "Component{eb456758-5c07-e399-a474-8e0dba52bb6e}"): Xrm.BaseControl;
      get(name: "header_process_ppp_ispresent"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_ppp_matchfound"): Xrm.OptionSetControl<ppp_matchfound> | null;
      get(name: "header_process_ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus> | null;
      get(name: "header_process_ppp_recordstatus_1"): Xrm.OptionSetControl<ppp_recordstatus> | null;
      get(name: "header_process_ppp_recordstatus_2"): Xrm.OptionSetControl<ppp_recordstatus> | null;
      get(name: "header_process_ppp_recourseletterreceived"): Xrm.OptionSetControl<boolean> | null;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StreamsContainer"): Xrm.PageTab<Tabs.StreamsContainer>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PPPManager extends Xrm.PageBase<PPPManager.Attributes,PPPManager.Tabs,PPPManager.Controls> {
    getAttribute(attributeName: "ppp_ispresent"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "ppp_matchfound"): Xrm.OptionSetAttribute<ppp_matchfound> | null;
    getAttribute(attributeName: "ppp_recordstatus"): Xrm.OptionSetAttribute<ppp_recordstatus> | null;
    getAttribute(attributeName: "ppp_recourseletterreceived"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Component7d1a736"): Xrm.SubGridControl<"ppp_traveller">;
    getControl(controlName: "Componenta10e9e8"): Xrm.SubGridControl<"ppp_traveller">;
    getControl(controlName: "Componentcf50b97"): Xrm.SubGridControl<"ppp_traveller">;
    getControl(controlName: "Component{eb456758-5c07-e399-a474-8e0dba52bb6e}"): Xrm.BaseControl;
    getControl(controlName: "header_process_ppp_ispresent"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_ppp_matchfound"): Xrm.OptionSetControl<ppp_matchfound> | null;
    getControl(controlName: "header_process_ppp_recordstatus"): Xrm.OptionSetControl<ppp_recordstatus> | null;
    getControl(controlName: "header_process_ppp_recordstatus_1"): Xrm.OptionSetControl<ppp_recordstatus> | null;
    getControl(controlName: "header_process_ppp_recordstatus_2"): Xrm.OptionSetControl<ppp_recordstatus> | null;
    getControl(controlName: "header_process_ppp_recourseletterreceived"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: string): undefined;
  }
}
