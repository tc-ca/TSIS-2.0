//window.parentExecutionContext = null;
//window.parentFormContext = null;

function InitializeButton(eContext) {
  // Assign executionContext and formContext to global variables within the web resource
  //window.parentExecutionContext = eContext;
  //window.parentFormContext = eContext.getFormContext();
}

function proceed(formContext) {
  //var eContext = window.parentExecutionContext;
  //var formContext = eContext.getFormContext();
  var confirmation = formContext.getAttribute('ppp_matchfoundconfirmation');
  confirmation.setValue(true);
  formContext.getAttribute('ppp_matchfoundtime').setValue(new Date());

  formContext.data.save();

  formContext.getControl('ppp_matchfound').setVisible(false);
  formContext.getControl('WebResource_traveller').setVisible(false);
  ToggleTabs();
  formContext.ui.tabs.get('tab_DetailedTravellerInformation').setFocus();
}

function ToggleTabs() {
  var eContext = window.parentExecutionContext;
  //confirmation.setSubmitMode("Always");

  ShowHideTabs(eContext, 'ppp_matchfound', 927820001, [
    'tab_TravelInformation',
    'tab_TravellerInformation',
  ]);
  ShowHideTabs(eContext, 'ppp_matchfound', 927820000, [
    'tab_DetailedTravellerInformation',
    'tab_TravelDetails',
    'tab_RecommendedAction',
    'tab_Decision',
  ]);
}

function OnLoad(eContext) {
  // Get formContext
  var formContext = eContext.getFormContext();

  // Get the web resource control on the form
  var wrCtrl = formContext.getControl('WebResource_traveller');
  // Get the web resource inner content window
  if (wrCtrl !== null && wrCtrl !== undefined) {
    wrCtrl.getContentWindow().then(function (win) {
      win.InitializeButton(eContext);
    });
  }
}

function populateCurrentUser(eContext, userFieldName) {
  var formContext = eContext.getFormContext();
  var globalContext = Xrm.Utility.getGlobalContext();
  var isCreateForm = formContext.ui.getFormType() == 1;
  if (!isCreateForm) return;
  var field = formContext.getAttribute(userFieldName);
  if (field == null || field == 'undefined') return;

  var currentUser = new Array();
  currentUser[0] = new Object();
  currentUser[0].id = globalContext.userSettings.userId;
  currentUser[0].entityType = 'systemuser';
  globalContext.userSettings.userName;

  var userField = formContext.getAttribute(userFieldName);
  userField.setValue(currentUser);
  userField.setSubmitMode('always');
}

//function populateContactInfo(eContext, repFieldName, phoneFieldName) {

//  var formContext = eContext.getFormContext();

//  var field = formContext.getAttribute(repFieldName);

//  if (field == null || field == 'undefined') return;
//  if (field.getValue() == null) return;

//  var phoneField = formContext.getAttribute(phoneFieldName);
//  if (phoneField == null || phoneField == 'undefined') return;

//  debugger;
//  console.log(field.getValue()[0].id);
//  var contactId = field.getValue()[0].id;
//  contactId = contactId.substring(1, contactId.length - 1);

//  Xrm.WebApi.retrieveRecord('contact', contactId).then(function success(result) {
//    console.log(result);
//    phoneField.setValue(result.telephone1);
//  }, function (error) { console.log(error.message); });

//};

// Prefill a Date Field with Todays Date
function SetCallTime(eContext, fieldName) {
  var formContext = eContext.getFormContext();
  var isCreateForm = formContext.ui.getFormType() == 1;
  if (!isCreateForm) return;
  SetNow(eContext, fieldName);
}

function SetNow(eContext, fieldName) {
  var formContext = eContext.getFormContext();
  var field = formContext.getAttribute(fieldName);
  if (field == null || field == 'undefined') return;
  field.setValue(new Date()); // Set the Date field to Today
  field.setSubmitMode('always'); // Save Disabled Fields
}

function ShowHideWebResource(eContext, fieldName, confirmationFieldName, value, webResource) {
  var formContext = eContext.getFormContext();
  debugger;
  var field = formContext.getAttribute(fieldName);
  var confirmationField = formContext.getAttribute(confirmationFieldName);
  if (field == null || field == 'undefined') return;
  if (confirmationField == null || confirmationField == 'undefined') return;

  if (field.getValue() != value) {
    return;
  }
  //Only show the confirmation when 'Match found' is 'Yes' and 'Match found confirmation' is 'No'
  if (!(field.getValue() == value && confirmationField.getValue() != value)) {
    return;
  }
    //var wrCtrl = formContext.getControl(webResource);
    //if (wrCtrl == null || wrCtrl == 'undefined') return;
    //wrCtrl.setVisible(isVisible);
    
    //formContext.ui.setFormNotification("By clicking the proceed button, you will be redirected to the next page and will NOT be able to modify the information on this page.", "WARNING", "AlertMatchFoundConfirmation");
    var confirmStrings = { text: "By clicking the proceed button, you will be redirected to the next page and will NOT be able to modify the information on this page.", title: "Confirmation Match Found" };
    var confirmOptions = { height: 200, width: 450 };
    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
      function (success) {
        if (success.confirmed) {
          console.log("Dialog closed using OK button.");
          proceed(formContext);
        }
        else {
          console.log("Dialog closed using Cancel button or X.");
          //If user cancels, reset the value.
          field.setValue(null);
        }
      });

    //if (isVisible) {
    //  console.log("set eContext");
    //  wrCtrl.getContentWindow().then(function (win) {
    //    win.InitializeButton(eContext);
    //  });
    //}
  
}

function ShowHideTabs(eContext, fieldName, value, tabs) {
  var formContext = eContext.getFormContext();

  var field = formContext.getAttribute(fieldName);
  if (field == null || field == 'undefined') return;

  var isVisible = false;

  if (field.getValue() == null) {
    isVisible = false;
  } else if (field.getValue() == value) {
    isVisible = true;
  }

  for (i = 0; i < tabs.length; i++) {
    var tab = formContext.ui.tabs.get(tabs[i]);
    if (tab == null || tab == 'undefined') return;
    tab.setVisible(isVisible);
  }
}
//'avs_name',
//  ['tab_FlightInformation', 'tab_PassengerInfo']

function ShowHideTextbox(eContext, optFieldName, value, txtFieldName) {
  var formContext = eContext.getFormContext();

  var optField = formContext.getAttribute(optFieldName);
  if (optField == null || optField == 'undefined') return;

  var targetField = formContext.getAttribute(txtFieldName);
  if (targetField == null || targetField == 'undefined') return;

  var txtField = formContext.getControl(txtFieldName);
  if (txtField == null || txtField == 'undefined') return;

  var isVisible = false;

  if (optField.getValue() == null) {
    isVisible = false;
  } else if (optField.getValue().includes(value)) {
    isVisible = true;
  }

  txtField.setVisible(isVisible);

  if (isVisible) {
    targetField.setRequiredLevel('required');
  } else {
    targetField.setRequiredLevel('none');
  }
}

function DisableSubgrid(eContext, gridName) {
  debugger;
  var formContext = eContext.getFormContext();
  var subGridCtrl = formContext.getControl(gridName);
  if (subGridCtrl == null) {
    return;
  }
  // Get the add button
  subGridCtrl.setDisabled(true);
}

function DisableGrid() {
  return false;
}

//Toggles display of the BPF. Takes the formcontext and the the name of the twoOption field that was changed as a string.
function showHideBusinessProcessFlow(eContext, twoOptionFieldName) {
  var formContext = eContext.getFormContext();
  var twoOptionFieldValue = formContext
    .getAttribute(twoOptionFieldName)
    .getValue();

  if (twoOptionFieldValue == null || twoOptionFieldValue == 'undefined') return;
  formContext.ui.process.setVisible(twoOptionFieldValue); //Shows BPF if twoOptionFieldValue is true, hides if false
}

//Sets the record status to the given status value
function setRecordStatus(eContext, statusValue) {
  var formContext = eContext.getFormContext();
  formContext.getAttribute('ppp_recordstatus').setValue(statusValue);
}

//Changes status to In-Progress only if passenger is present and current status is Draft
function statusChangeInProgress(eContext) {
  var formContext = eContext.getFormContext();
  var isPresent = formContext.getAttribute('ppp_ispresent').getValue();
  var isDraft =
    formContext.getAttribute('ppp_recordstatus').getValue() == 927820001;

  if (isPresent && isDraft) {
    setRecordStatus(eContext, 927820003);
  }
}

//Shows Passport Number if Passport was selected as an ID, hides if not
function showHidePassportNumber(eContext) {
  var formContext = eContext.getFormContext();
  var idUsedArray = formContext.getAttribute('ppp_idsused').getValue();
  var passportSelected = idUsedArray.includes(927820000);
  formContext.getControl('ppp_passportnumber').setVisible(passportSelected);
}

//If the valueField matched the desiredValue, set the given timeField to Now
function setTimeFieldNow(
  eContext,
  valueFieldName,
  desiredValue,
  timeFieldName
) {
  var formContext = eContext.getFormContext();
  var valueField = formContext.getAttribute(valueFieldName).getValue();
  if (valueField == desiredValue) {
    formContext.getAttribute(timeFieldName).setValue(new Date());
  }
}

function setDateTime(
  eContext,
  dateFieldName,
  hourFieldName,
  minuteFieldName,
  dateTimeField
) {
  var formContext = eContext.getFormContext();
  var date = formContext.getAttribute(dateFieldName).getValue();
  var hour = formContext.getAttribute(hourFieldName).getValue();
  var minute = formContext.getAttribute(minuteFieldName).getValue();
  if (date && hour && minute) {
    var dateTime = date;
    dateTime.setHours(hour);
    dateTime.setMinutes(minute);
    formContext.getAttribute(dateTimeField).setValue(dateTime);
  }
}

function showHideMatchConfirmed(eContext) {
  var formContext = eContext.getFormContext();
  var firstName = formContext.getAttribute("ppp_firstname").getValue();
  var lastName = formContext.getAttribute("ppp_lastname").getValue();
  var gender = formContext.getAttribute("ppp_gender").getValue();
  var dateOfBirth = formContext.getAttribute("ppp_dateofbirth").getValue();
  var isPresent = formContext.getAttribute("ppp_ispresent").getValue();
  var haveProceeded = formContext.getAttribute("ppp_matchfoundconfirmation").getValue();

  if (firstName && lastName && gender && dateOfBirth && isPresent && !haveProceeded) {
    formContext.getControl("ppp_matchfound").setVisible(true);
  } else {
    formContext.getControl("ppp_matchfound").setVisible(false);
    formContext.getControl("WebResource_traveller").setVisible(false);
    formContext.getAttribute("ppp_matchfound").setValue(null);
  }
}

function ReadOnlyOnClosed(eContext, keepLockedList, keepUnlockedList) {
  var formContext = eContext.getFormContext();
  var recordStatus = formContext.getAttribute('ppp_recordstatus').getValue();
  var recordClosed = recordStatus == 927820002 || recordStatus == 927820005;

  //Toggle everything to match record closed status
  formContext.ui.controls.forEach(function (attribute) {
    console.log(attribute.getName());
    var control = formContext.getControl(attribute.getName());
    if (control) {
      control.setDisabled(recordClosed);
    }
  });
  debugger;
  //Lock everything in KeepLockedList
  if (keepLockedList) {
    keepLockedList.forEach(function (attributeName) {
      var control = formContext.getControl(attributeName);
      if (control) {
        control.setDisabled(true);
      }
    });
  }

  //Unlock everything in KeepUnlockedList
  if (keepUnlockedList) {
    keepUnlockedList.forEach(function (attributeName) {
      var control = formContext.getControl(attributeName);
      if (control) {
        control.setDisabled(false);
      }
    });
  }

  //Disable the add existing buttons on all grids.
  RefreshGridRibbon(formContext, 'gridCallHistory');
  RefreshGridRibbon(formContext, 'gridFlightConnections');
  RefreshGridRibbon(formContext, 'gridFlightConnections2');
}

function RefreshGridRibbon(formContext, gridName) {
  var gridContext = formContext.getControl(gridName);
  if (gridContext == null || gridContext == 'undefined') return;
  gridContext.refreshRibbon();
}

function recordIsNotClosed(primaryControl) {
  var formContext = primaryControl;
  var recordStatus = formContext.getAttribute('ppp_recordstatus').getValue();

  return !(recordStatus == 927820002 || recordStatus == 927820005);
}

function refreshConnectionGrid() {
  //refreshRibbon();
  //formContext.ui.refreshRibbon();
}
