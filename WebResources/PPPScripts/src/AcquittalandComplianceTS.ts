namespace TSIS.PPP {
    var Form: Form.ppp_acquittalandcompliance.Main.Information;

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
}
