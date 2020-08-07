declare namespace Form.ppp_travellerbusinessflow.Main {
  namespace Information {
    namespace Tabs {
      interface StageStep11 extends Xrm.SectionCollectionBase {
        get(name: "StageStep11_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep17 extends Xrm.SectionCollectionBase {
        get(name: "StageStep17_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep21 extends Xrm.SectionCollectionBase {
        get(name: "StageStep21_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep25 extends Xrm.SectionCollectionBase {
        get(name: "StageStep25_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep29 extends Xrm.SectionCollectionBase {
        get(name: "StageStep29_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep3 extends Xrm.SectionCollectionBase {
        get(name: "StageStep3_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ppp_ispresent"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ppp_matchfound"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ppp_matchfoundconfirmation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ppp_recordstatus"): Xrm.OptionSetAttribute<number>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_ispresent"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_matchfound"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_matchfoundconfirmation"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_recordstatus"): Xrm.OptionSetControl<number>;
      get(name: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_recordstatus1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_recordstatus2"): Xrm.OptionSetControl<number>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StageStep11"): Xrm.PageTab<Tabs.StageStep11>;
      get(name: "StageStep17"): Xrm.PageTab<Tabs.StageStep17>;
      get(name: "StageStep21"): Xrm.PageTab<Tabs.StageStep21>;
      get(name: "StageStep25"): Xrm.PageTab<Tabs.StageStep25>;
      get(name: "StageStep29"): Xrm.PageTab<Tabs.StageStep29>;
      get(name: "StageStep3"): Xrm.PageTab<Tabs.StageStep3>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ppp_ispresent"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ppp_matchfound"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ppp_matchfoundconfirmation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ppp_recordstatus"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_ispresent"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_matchfound"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_matchfoundconfirmation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_recordstatus"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_recordstatus1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_ppp_traveller_ppp_travellerbusinessflow:ppp_recordstatus2"): Xrm.OptionSetControl<number>;
    getControl(controlName: string): undefined;
  }
}
