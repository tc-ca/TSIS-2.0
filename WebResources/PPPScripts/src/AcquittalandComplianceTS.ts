namespace TSIS.PPP {
    var Form: Form.ppp_acquittalandcompliance.Main.Information;

    export function SaveOnLoadAC(eContext: Xrm.ExecutionContext<any, any>) {
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
        if (Form.ui.getFormType() === 1 && Form.getAttribute('ppp_name').getValue() == null) {
            Form.data.save();
        }
    }

    export function setDateTimeAC(
        eContext: Xrm.ExecutionContext<any, any>,
        dateFieldName: string,
        hourFieldName: string,
        minuteFieldName: string,
        dateTimeField: string
    ) {
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
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

    export function showHideFlightConnectionsAC(
        eContext: Xrm.ExecutionContext<any, any>,
        maxConnections: number
    ) {
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
        var connectionCount = Form.getAttribute('ppp_numberofflightconnection').getValue();

        if (connectionCount == null) connectionCount = 0;

        for (var i = 1; i <= maxConnections; i++) {
            var connectionControl = Form.getControl('ppp_flightconnection' + i);
            if (connectionControl == undefined) continue;

            var connectionAttr = Form.getAttribute('ppp_flightconnection' + i);
            if (connectionAttr == undefined) continue;

            if (connectionCount >= i) {
                (<Xrm.LookupControl<'ovs_facility'>>connectionControl).setVisible(true);
                (<Xrm.LookupAttribute<'ovs_facility'>>connectionAttr).setRequiredLevel('required');
            } else {
                (<Xrm.LookupControl<'ovs_facility'>>connectionControl).setVisible(false);
                (<Xrm.LookupAttribute<'ovs_facility'>>connectionAttr).setRequiredLevel('none');
                (<Xrm.LookupAttribute<'ovs_facility'>>connectionAttr).setValue(null);
            }
        }
    }

    export function flightValidationAC(
        eContext: Xrm.ExecutionContext<any, any>,
        flightNameArray: string[]
    ) {
        var globalContext = Xrm.Utility.getGlobalContext();
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
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

    export function showHideFlightComplianceAssesment(
        eContext: Xrm.ExecutionContext<any, any>,
        maxConnections: number
    ) {
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
        var connectionCount = Form.getAttribute('ppp_numberofnoncompliance').getValue();

        if (connectionCount == null) connectionCount = 1;

        for (var i = 1; i <= maxConnections; i++) {
            var connectionControl = Form.getControl('ppp_tsisnumber' + i);
            var connectionControl2 = Form.getControl('ppp_noncompliancedescription' + i);
            if (connectionControl == undefined || connectionControl2 == undefined) continue;

            var connectionAttr = Form.getAttribute('ppp_tsisnumber' + i);
            var connectionAttr2 = Form.getAttribute('ppp_noncompliancedescription' + i);
            if (connectionAttr == undefined || connectionAttr2 == undefined) continue;

            if (connectionCount >= i) {
                (connectionControl as any).setVisible(true);
                (connectionControl2 as any).setVisible(true);
                (connectionAttr as any).setRequiredLevel('required');
            } else {
                (connectionControl as any).setVisible(false);
                (connectionControl2 as any).setVisible(false);
                (connectionAttr as any).setValue(null);
                (connectionAttr2 as any).setValue(null);
                (connectionAttr as any).setRequiredLevel('none');
            }
        }
    }

    export function showHidePassengerComplianceAssesment(
        eContext: Xrm.ExecutionContext<any, any>,
        maxConnections: number
    ) {
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
        var connectionCount = Form.getAttribute('ppp_passengernumberofnoncompliance').getValue();

        if (connectionCount == null) connectionCount = 1;

        for (var i = 1; i <= maxConnections; i++) {
            var connectionControl = Form.getControl('ppp_typeofnoncompliance' + i);
            var connectionControl2 = Form.getControl('ppp_ruleid' + i);
            var connectionControl3 = Form.getControl('ppp_numberofpaxaffected' + i);
            var connectionControl4 = Form.getControl('ppp_passengernoncompliancedescription' + i);
            if (connectionControl == undefined || connectionControl2 == undefined || connectionControl3 == undefined || connectionControl4 == undefined) continue;

            var connectionAttr = Form.getAttribute('ppp_typeofnoncompliance' + i);
            var connectionAttr2 = Form.getAttribute('ppp_ruleid' + i);
            var connectionAttr3 = Form.getAttribute('ppp_numberofpaxaffected' + i);
            var connectionAttr4 = Form.getAttribute('ppp_passengernoncompliancedescription' + i);
            if (connectionAttr == undefined || connectionAttr2 == undefined || connectionAttr3 == undefined || connectionAttr4 == undefined) continue;

            if (connectionCount >= i) {
                (connectionControl as any).setVisible(true);
                (connectionControl2 as any).setVisible(true);
                (connectionControl3 as any).setVisible(true);
                (connectionControl4 as any).setVisible(true);
                (connectionAttr as any).setRequiredLevel('required');
            } else {
                (connectionControl as any).setVisible(false);
                (connectionControl2 as any).setVisible(false);
                (connectionControl3 as any).setVisible(false);
                (connectionControl4 as any).setVisible(false);
                (connectionAttr as any).setValue(null);
                (connectionAttr2 as any).setValue(null);
                (connectionAttr3 as any).setValue(null);
                (connectionAttr4 as any).setValue(null);
                (connectionAttr as any).setRequiredLevel('none');
            }
        }
    }

    export function showHideFlightOrPassengerComplianceReviewTab(
        eContext: Xrm.ExecutionContext<any, any>,
    ) {
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
        var recordType = Form.getAttribute('ppp_recordtype').getValue();

        // Define field lists
        const passengerFields = ["ppp_passengernumberofnoncompliance", "ppp_typeofnoncompliance1", "ppp_ruleid1", "ppp_numberofpaxaffected1", "ppp_passengernoncompliancedescription1", "ppp_typeofnoncompliance2", "ppp_ruleid2", "ppp_numberofpaxaffected2", "ppp_passengernoncompliancedescription2", "ppp_typeofnoncompliance3", "ppp_ruleid3", "ppp_numberofpaxaffected3", "ppp_passengernoncompliancedescription3", "ppp_typeofnoncompliance4", "ppp_ruleid4", "ppp_numberofpaxaffected4", "ppp_passengernoncompliancedescription4", "ppp_typeofnoncompliance5", "ppp_ruleid5", "ppp_numberofpaxaffected5", "ppp_passengernoncompliancedescription5", "ppp_typeofnoncompliance6", "ppp_ruleid6", "ppp_numberofpaxaffected6", "ppp_passengernoncompliancedescription6", "ppp_typeofnoncompliance7", "ppp_ruleid7", "ppp_numberofpaxaffected7", "ppp_passengernoncompliancedescription7", "ppp_typeofnoncompliance8", "ppp_ruleid8", "ppp_numberofpaxaffected8", "ppp_passengernoncompliancedescription8", "ppp_typeofnoncompliance9", "ppp_ruleid9", "ppp_numberofpaxaffected9", "ppp_passengernoncompliancedescription9", "ppp_typeofnoncompliance10", "ppp_ruleid10", "ppp_numberofpaxaffected10", "ppp_passengernoncompliancedescription10"];
        const flightFields = ["ppp_numberofnoncompliance", "ppp_tsisnumber1", "ppp_noncompliancedescription1", "ppp_tsisnumber2", "ppp_noncompliancedescription2", "ppp_tsisnumber3", "ppp_noncompliancedescription3", "ppp_tsisnumber4", "ppp_noncompliancedescription4", "ppp_tsisnumber5", "ppp_noncompliancedescription5", "ppp_tsisnumber6", "ppp_noncompliancedescription6", "ppp_tsisnumber7", "ppp_noncompliancedescription7", "ppp_tsisnumber8", "ppp_noncompliancedescription8", "ppp_tsisnumber9", "ppp_noncompliancedescription9", "ppp_tsisnumber10", "ppp_noncompliancedescription10"];
        const typeOfNonCompliance = Form.getAttribute('ppp_typeofnoncompliance1');

        if (recordType === 927820000) {
            // recordType is Flight
            Form.ui.tabs.get("Compliance_Review_Flight")?.setVisible(true);
            Form.ui.tabs.get("Compliance_Review_Passenger")?.setVisible(false);
            clearAndMakeFieldsOptional(Form, passengerFields);

            // Re-evaluate visibility of passenger fields
            showHideFlightComplianceAssesment(eContext, 10);
        }
        else if (recordType === 927820001) {
            // recordType is Passenger
            Form.ui.tabs.get("Compliance_Review_Flight")?.setVisible(false);
            Form.ui.tabs.get("Compliance_Review_Passenger")?.setVisible(true);
            typeOfNonCompliance.setRequiredLevel('required');
            clearAndMakeFieldsOptional(Form, flightFields);

            // Re-evaluate visibility of passenger fields
            showHidePassengerComplianceAssesment(eContext, 10);
        }
        else {
            // Hide both if the recordType is neither Flight nor Passenger
            Form.ui.tabs.get("Compliance_Review_Flight")?.setVisible(false);
            Form.ui.tabs.get("Compliance_Review_Passenger")?.setVisible(false);
            clearAndMakeFieldsOptional(Form, flightFields);
            clearAndMakeFieldsOptional(Form, passengerFields);
        }   
        
    }

    function clearAndMakeFieldsOptional(eContext: any, fieldsNames: string[]) {
        fieldsNames.forEach(field => {
            var attribute = eContext.getAttribute(field);
            if (attribute) {
                attribute.setValue(null);
                attribute.setRequiredLevel("none");
            }
        });
    }

    export function setRequiredFlightFieldsAC(eContext: Xrm.ExecutionContext<any, any>) {
        Form = <Form.ppp_acquittalandcompliance.Main.Information>eContext.getFormContext();
        const fieldsToRequire = ["ppp_recordtype", "ppp_aircarrier", "ppp_flightorigindate", "ppp_flightorigin", "ppp_flightdestination"];
        const refNumber = Form.getAttribute("ppp_name").getValue();
        const requirementLevel = refNumber ? "required" : "none";

        fieldsToRequire.forEach(fieldName => {
            const attribute = Form.getAttribute(fieldName);
            if (attribute) {
                (attribute as any).setRequiredLevel(requirementLevel);
            }
        });
    }
}
