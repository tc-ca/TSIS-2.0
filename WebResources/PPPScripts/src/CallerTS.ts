namespace TSIS.PPP {

    // The Quick Create Form should not be able to be opened when the parent traveller form has a status of closed or unresolved
    export function closeFormWhenParentTravellerStatusIsClosed(eContext: Xrm.ExecutionContext<any, any>) {
        let formContext = <Form.ppp_caller.QuickCreate.Callerquickcreateform>eContext.getFormContext();
        const travellerValue = formContext.getAttribute("ppp_traveller").getValue();
        const travellerId = travellerValue ? travellerValue[0].id : "";
        //Retrieve parent traveller record's record status
        Xrm.WebApi.retrieveRecord("ppp_traveller", travellerId, "?$select=ppp_recordstatus").then(function (result) {
            let parentTravellerIsClosed = (result.ppp_recordstatus == 927820002 || result.ppp_recordstatus == 927820005);
            if (parentTravellerIsClosed) {
                formContext.ui.close();
                return;
            }
        })
    }

    //Populates the name field for a new Caller record
    export function buildNameText(eContext: Xrm.ExecutionContext<any, any>) {
        let formContext = <Form.ppp_caller.QuickCreate.Callerquickcreateform>eContext.getFormContext();

        //If the name has already been made, return
        if (formContext.getAttribute("ppp_name").getValue() != null) {
            return;
        }

        const travellerValue = formContext.getAttribute("ppp_traveller").getValue();
        const travellerName = travellerValue ? travellerValue[0].name : "";
        const travellerId = travellerValue ? travellerValue[0].id : "";
        Xrm.WebApi.retrieveMultipleRecords("ppp_caller", `?$select=ppp_name&$filter=_ppp_traveller_value eq ${travellerId}`).then(
            function success(result) {
                const currentCallerNumber = result.entities.length + 1;
                formContext.getAttribute("ppp_name").setValue(travellerName + "-" + currentCallerNumber);
            },
            function (error) {
                var alertStrings = { text: error.message };
                var alertOptions = { height: 120, width: 260 };
                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(function () { });
            }
        );
    }

    export function setDateTimeFieldsToNow(eContext: Xrm.ExecutionContext<any, any>) {
        let formContext = <Form.ppp_caller.QuickCreate.Callerquickcreateform>eContext.getFormContext();

        let name = formContext.getAttribute("ppp_name");
        //If a name has already been set, the caller record is not new, so the time fields should not be set.
        if (name.getValue() != null) {
            return
        }

        let callDateTime = formContext.getAttribute("ppp_calldatetime");
        let callDate = formContext.getAttribute("ppp_calldate");
        let callTimeHour = formContext.getAttribute("ppp_calltimehour");
        let callTimeMinute = formContext.getAttribute("ppp_calltimeminute");

        let today = new Date();
        callDateTime.setValue(today);
        callDate.setValue(today)
        callTimeHour.setValue(today.getHours())
        callTimeMinute.setValue(today.getMinutes())

        /* Leaving this here if they want to swap to UTC converstions.
         * 
        callDateTime.setValue(new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes()));
        callDate.setValue(new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
        callTimeHour.setValue(today.getUTCHours())
        callTimeMinute.setValue(today.getUTCMinutes())
        */
    }
}