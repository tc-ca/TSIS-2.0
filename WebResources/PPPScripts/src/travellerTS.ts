namespace TSIS.PPP {
  var Form: Form.ppp_traveller.Main.mainform;
    var currentRecordStatus: number;
  export function SaveOnLoad(eContext: Xrm.ExecutionContext<any, any>) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    if (Form.getAttribute('ppp_name').getValue() == null) Form.data.save();
  }
  export function proceed(eContext: Xrm.ExecutionContext<any, any>) {
    //var eContext = window.parentExecutionContext;
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    Form.getAttribute('ppp_matchfoundtime').setValue(new Date());

    Form.data.save();
    Form.getControl('WebResource_traveller').setVisible(false);
    ToggleTabs(eContext);
    Form.ui.tabs.get('tab_DetailedTravellerInformation').setFocus();
  }

  export function ToggleTabs(eContext: Xrm.ExecutionContext<any, any>) {
    //var eContext = window.parentExecutionContext;
    //confirmation.setSubmitMode("Always");

    ShowHideTabs(eContext);
  }

  export function SetDirectionTime(eContext: Xrm.ExecutionContext<any, any>) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var directionOption = Form.getAttribute('ppp_directionoptions');
    var directionTime = Form.getAttribute('ppp_directiontime');
    if (directionOption.getValue() == null) {
      directionTime.setValue(null);
    } else {
      directionTime.setValue(new Date()); // Set the Date field to Today
    }
    directionTime.setSubmitMode('always'); // Save Disabled Fields
  }

  export function ShowMatchFoundConfirmation(
    eContext: Xrm.ExecutionContext<any, any>
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var field: Xrm.OptionSetAttribute<ppp_matchfound> = Form.getAttribute(
      'ppp_matchfound'
    );
    if (field == null) return;

    if (field.getValue() != ppp_matchfound.Yes) {
      return;
    }
    var globalContext = Xrm.Utility.getGlobalContext();
    var confirmStrings = {
      text:
        'By clicking the proceed button, you will be redirected to the next page and will NOT be able to modify the information on this page.',
      title: 'Confirmation Match Found',
    };
    if (globalContext.userSettings.languageId == 1036) {
      confirmStrings.text = 'En cliquant sur le bouton Continuer, vous serez redirigé vers la page suivante et ne pourrez PAS modifier les informations de cette page.';
      confirmStrings.title = 'Correspondance positive trouvée';
    }
    var confirmOptions = { height: 200, width: 450 };
    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
      function (success) {
        if (success.confirmed) {
          proceed(eContext);
        } else {
          //If user cancels, reset the value.
          field.setValue(null);
        }
      }
    );
  }

  export function ShowHideTabs(eContext: Xrm.ExecutionContext<any, any>) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();

    var field = Form.getAttribute('ppp_matchfound');
    var matchfound = false;
    if (field.getValue() == ppp_matchfound.Yes) {
      matchfound = true;
    }

    Form.ui.tabs.get('tab_TravellerInformation').setVisible(!matchfound);
    Form.ui.tabs.get('tab_DetailedTravellerInformation').setVisible(matchfound);
    Form.ui.tabs.get('tab_TravelDetails').setVisible(matchfound);
    Form.ui.tabs.get('tab_RecommendedAction').setVisible(matchfound);
    Form.ui.tabs.get('tab_Decision').setVisible(matchfound);
  }

  //Sets the record status to the given status value
  export function setRecordStatus(
    eContext: Xrm.ExecutionContext<any, any>,
    statusValue: ppp_recordstatus
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    Form.getAttribute('ppp_recordstatus').setValue(statusValue);
  }

  //Changes status to In-Progress only if passenger is present and current status is Draft
  export function statusChangeInProgress(
    eContext: Xrm.ExecutionContext<any, any>
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var isPresent = Form.getAttribute('ppp_ispresent').getValue();
    var recordStatus = Form.getAttribute('ppp_recordstatus').getValue();

    if (isPresent && recordStatus == 927820001) {
      setRecordStatus(eContext, 927820003);
      Form.getAttribute('ppp_ispresenttime').setValue(new Date());
    } else if (!isPresent && recordStatus == 927820003) {
      setRecordStatus(eContext, 927820001);
      Form.getAttribute('ppp_ispresenttime').setValue(null);
    }
  }

  //If the valueField matched the desiredValue, set the given timeField to Now
  export function setTimeFieldNow(
    eContext: Xrm.ExecutionContext<any, any>,
    valueFieldName: string,
    desiredValue: string,
    timeFieldName: string
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var field = Form.getAttribute(valueFieldName);
    if (field == undefined) return;
    var fieldValue = (<Xrm.Attribute<any>>field).getValue();
    if (fieldValue == desiredValue) {
      var timeField = Form.getAttribute(timeFieldName);
      if (timeField != undefined)
        (<Xrm.DateAttribute>timeField).setValue(new Date());
    }
  }

  export function setDateTime(
    eContext: Xrm.ExecutionContext<any, any>,
    dateFieldName: string,
    hourFieldName: string,
    minuteFieldName: string,
    dateTimeField: string
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var dateValue = null;
    var hour = null;
    var minute = null;

    var dateAttr = Form.getAttribute(dateFieldName);
    if (dateAttr == undefined) return;

    // if(date==null)return;

    var hourAttr = Form.getAttribute(hourFieldName);
    if (hourAttr == undefined) return;

    var minuteAttr = Form.getAttribute(minuteFieldName);
    if (minuteAttr == undefined) return;

    var dateTimeAttr = Form.getAttribute(dateTimeField);
    if (dateTimeAttr == undefined) return;

    dateValue = (<Xrm.DateAttribute>dateAttr).getValue();
    hour = (<Xrm.Attribute<any>>hourAttr).getValue();
    minute = (<Xrm.Attribute<any>>minuteAttr).getValue();

    if (dateValue !== null && hour !== null && minute !== null) {
      var dateTime = dateValue;
      dateTime.setHours(hour);
      dateTime.setMinutes(minute);
      (<Xrm.DateAttribute>dateTimeAttr).setValue(dateTime);
    }
  }

  export function showHideMatchConfirmed(
    eContext: Xrm.ExecutionContext<any, any>
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var firstName = Form.getAttribute('ppp_firstname').getValue();
    var lastName = Form.getAttribute('ppp_lastname').getValue();
    var gender = Form.getAttribute('ppp_gender').getValue();
    var dateOfBirth = Form.getAttribute('ppp_dateofbirth').getValue();
    var isPresent = Form.getAttribute('ppp_ispresent').getValue();
    var haveProceeded =
      Form.getAttribute('ppp_matchfound').getValue() == ppp_matchfound.Yes;

    if (
      firstName &&
      lastName &&
      gender &&
      dateOfBirth &&
      isPresent &&
      !haveProceeded
    ) {
      Form.getControl('ppp_matchfound').setDisabled(false);
      Form.getControl('WebResource_traveller').setVisible(false);
    } else {
      Form.getControl('ppp_matchfound').setDisabled(true);
      Form.getControl('WebResource_traveller').setVisible(true);
      if (!haveProceeded) {
        Form.getAttribute('ppp_matchfound').setValue(null);
      }
    }
    if (!recordIsNotClosed(eContext)) {
      Form.getControl('ppp_matchfound').setDisabled(true);
    }
    if (haveProceeded) {
      Form.getControl('ppp_matchfound').setDisabled(true);
      Form.getControl('WebResource_traveller').setVisible(false);
    }
  }

  export function ReadOnlyOnClosed(
    eContext: Xrm.ExecutionContext<any, any>,
    keepLockedList: string[],
    keepUnlockedList: string[]
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var recordStatus = Form.getAttribute('ppp_recordstatus').getValue();
    var recordClosed =
      recordStatus == ppp_recordstatus.Closed ||
      recordStatus == ppp_recordstatus.Unresolved;
    toggleDisabledAllControls(
      eContext,
      recordClosed,
      keepLockedList,
      keepUnlockedList
    );
  }

  export function statusOnChange(
    eContext: Xrm.ExecutionContext<any, any>,
    keepLockedList: string[],
    keepUnlockedList: string[]
  ) {
      Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
      let travellerId = Form.data.entity.getId();
      var recordStatus = Form.getAttribute('ppp_recordstatus').getValue();
      var recordClosed =
        recordStatus == ppp_recordstatus.Closed ||
        recordStatus == ppp_recordstatus.Unresolved;

      if (recordClosed) {

          var fetchXml = [
              "<fetch top='50'>",
              "  <entity name='annotation'>",
              "    <link-entity name='ppp_traveller' from='ppp_travellerid' to='objectid'>",
              "      <filter>",
              "        <condition attribute='ppp_travellerid' operator='eq' value='", travellerId, "'/>",
              "      </filter>",
              "    </link-entity>",
              "  </entity>",
              "</fetch>",
          ].join("");
          fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);

          // Retrieve associated notes
          Xrm.WebApi.retrieveMultipleRecords("annotation", fetchXml).then(function (result) {
              // If no notes found, show alert message reminding Analyst to add a note
              if (result.entities.length == 0) {
                  Form.getAttribute("ppp_recordstatus").setValue(currentRecordStatus);
                  let globalContext = Xrm.Utility.getGlobalContext();
                  let alertStrings = {
                      text:
                          'Please add a Note to the Record before setting the Record Status to Closed or Unresolved',
                      title: 'No Note Attached to Record',
                  };
                  if (globalContext.userSettings.languageId == 1036) {
                      alertStrings.text = '(FR) Please add a Note to the Record before setting the Record Status to Closed or Unresolved';
                      alertStrings.title = '(FR) No Note Attached to Record';
                  }
                  var alertOptions = { height: 200, width: 450 };
                  Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
               
              } else {
                  // Record has at least one note, so proceed with status change
                  updateCurrentRecordStatus(eContext);
                  Form.data.save();
                  if (Form.data.isValid()) {
                      toggleDisabledAllControls(
                          eContext,
                          recordClosed,
                          keepLockedList,
                          keepUnlockedList
                      );
                  }
              }
          })
        // Record status is not being set to Closed or Unresolved, proceed with status change
      } else {
          updateCurrentRecordStatus(eContext);
          if (Form.data.isValid()) {
              toggleDisabledAllControls(
                  eContext,
                  recordClosed,
                  keepLockedList,
                  keepUnlockedList
              );
          }
      }
    
    }

    export function updateCurrentRecordStatus(eContext: Xrm.ExecutionContext<any, any>) {
        let formContext = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
        let recordStatusValue = formContext.getAttribute("ppp_recordstatus").getValue();
        if (recordStatusValue != null) {
            currentRecordStatus = recordStatusValue;
        }
    }

  export function toggleDisabledAllControls(
    eContext: Xrm.ExecutionContext<any, any>,
    disable: boolean,
    keepLockedList: string[],
    keepUnlockedList: string[]
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();

    //Toggle everything to match record closed status
    Form.ui.controls.forEach(function (control) {
      if (control != undefined) {
        (<Xrm.Control<Xrm.Attribute<any>>>control).setDisabled(disable);
      }
    });
    //Lock everything in KeepLockedList
    if (keepLockedList) {
      keepLockedList.forEach(function (attributeName) {
        var control = Form.getControl(attributeName);
        if (control != undefined) {
          (<Xrm.Control<Xrm.Attribute<any>>>control).setDisabled(true);
        }
      });
    }

    //Unlock everything in KeepUnlockedList
    if (keepUnlockedList) {
      keepUnlockedList.forEach(function (attributeName) {
        var control = Form.getControl(attributeName);
        if (control) {
          (<Xrm.Control<Xrm.Attribute<any>>>control).setDisabled(false);
        }
      });
    }
  }

  export function recordIsNotClosed(eContext: Xrm.ExecutionContext<any, any>) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var recordStatus = Form.getAttribute('ppp_recordstatus').getValue();
    return !(
      recordStatus == ppp_recordstatus.Closed ||
      recordStatus == ppp_recordstatus.Unresolved
    );
  }

  // export function setAttributesRequirementLevel(
  //   eContext: Xrm.ExecutionContext<any, any>,
  //   attributes: string[],
  //   requirementLevel
  // ) {
  //   Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
  //   attributes.forEach((attributeName) => {
  //     var att = <Xrm.Attribute<T>>Form.getAttribute(attributeName);
  //     if (att != null) att.setRequiredLevel(requirementLevel);
  //   });
  // }

  export function showHideFlightConnections(
    eContext: Xrm.ExecutionContext<any, any>,
    maxConnections: number
  ) {
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var connectionCount = Form.getAttribute(
      'ppp_flightconnectioncount'
    ).getValue();

    if (connectionCount == null) connectionCount = 0;

    for (var i = 1; i <= maxConnections; i++) {
      var connectionControl = Form.getControl('ppp_flightconnection' + i);
      if (connectionControl == undefined) continue;

      var connectionControl2 = Form.getControl(
        'ppp_flightconnection' + i + '1'
      );
      if (connectionControl2 == undefined) continue;

      var connectionAttr = Form.getAttribute('ppp_flightconnection' + i);
      if (connectionAttr == undefined) continue;

      if (connectionCount >= i) {
        (<Xrm.LookupControl<'ovs_facility'>>connectionControl).setVisible(true);
        (<Xrm.LookupAttribute<'ovs_facility'>>connectionAttr).setRequiredLevel(
          'required'
        );
        (<Xrm.LookupControl<'ovs_facility'>>connectionControl2).setVisible(
          true
        );
      } else {
        (<Xrm.LookupControl<'ovs_facility'>>connectionControl).setVisible(
          false
        );
        (<Xrm.LookupControl<'ovs_facility'>>connectionControl2).setVisible(
          false
        );
        (<Xrm.LookupAttribute<'ovs_facility'>>connectionAttr).setRequiredLevel(
          'none'
        );
        (<Xrm.LookupAttribute<'ovs_facility'>>connectionAttr).setValue(null);
      }
    }
  }

  export function flightValidation(
    eContext: Xrm.ExecutionContext<any, any>,
    flightNameArray: string[]
  ) {
    var globalContext = Xrm.Utility.getGlobalContext();
    Form = <Form.ppp_traveller.Main.mainform>eContext.getFormContext();
    var errorMsg: string = 'Duplicate aerodromes not permitted.';
    if (globalContext.userSettings.languageId == 1036) {
      errorMsg = 'Duplicate aerodromes not permitted. (fr)';
    }

    for (var i = 0; i < flightNameArray.length; i++) {
      var connectionControl = Form.getControl(flightNameArray[i]);
      if (connectionControl == undefined) continue;

      (<Xrm.LookupControl<'ovs_facility'>>(
        connectionControl
      )).clearNotification();
    }
    for (var x = 0; x < flightNameArray.length; x++) {
      var flightX = Form.getAttribute(flightNameArray[x]);
      var flightXId: string;
      if (flightX == undefined) continue;
      var flightXFacility = (<Xrm.LookupAttribute<'ovs_facility'>>(
        flightX
      )).getValue();

      if (flightXFacility == null) continue;
      else {
        flightXId = flightXFacility[0].id;
      }

      for (var y = x + 1; y < flightNameArray.length; y++) {
        var flightY = Form.getAttribute(flightNameArray[y]);
        var flightYId: string;
        if (flightY == undefined) continue;
        var flightYFacility = (<Xrm.LookupAttribute<'ovs_facility'>>(
          flightY
        )).getValue();

        if (flightYFacility == null) continue;
        else {
          flightYId = flightYFacility[0].id;
        }
        if (flightXId == flightYId) {
          var connectionControlX = Form.getControl(flightNameArray[x]);
          if (connectionControlX == undefined) continue;
          var connectionControlY = Form.getControl(flightNameArray[y]);
          if (connectionControlY == undefined) continue;

          (<Xrm.LookupControl<'ovs_facility'>>(
            connectionControlX
          )).setNotification(errorMsg);
          (<Xrm.LookupControl<'ovs_facility'>>(
            connectionControlY
          )).setNotification(errorMsg);
        }
      }
    }
    }
}
