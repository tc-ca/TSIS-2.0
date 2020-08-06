"use strict";
var TSIS;
(function (TSIS) {
    var ppp;
    (function (ppp) {
        var Form;
        function onLoad(executionContext) {
            Form = executionContext.getFormContext();
            // Code here..
            var tvNumber = Form.getAttribute('ppp_name').getValue();
            Form.getControl('ppp_name');
            Form.ui.tabs.get('tab_Decision');
            Form.getUrl();
            // var globalContent: context;
            // globalContent = Xrm.Utility.getGlobalContext();
            // var matchfoundwarning: string;
            // matchfoundwarning = Xrm.Utility.getResourceString(
            //   'ppp_traveller',
            //   'matchfoundwarning'
            // );
            console.log('Hello World');
            console.log(tvNumber);
        }
        ppp.onLoad = onLoad;
        function onLoad1(executionContext) {
            Form = executionContext.getFormContext();
            // Code here..
            var tvNumber = Form.getAttribute('ppp_name').getValue();
            Form.getControl('ppp_name');
            Form.ui.tabs.get('tab_Decision');
            var url = Form.getUrl();
            // var globalContent: context;
            // globalContent = Xrm.Utility.getGlobalContext();
            // var matchfoundwarning: string;
            // matchfoundwarning = Xrm.Utility.getResourceString(
            //   'ppp_traveller',
            //   'matchfoundwarning'
            // );
            console.log(url);
        }
        ppp.onLoad1 = onLoad1;
    })(ppp = TSIS.ppp || (TSIS.ppp = {}));
})(TSIS || (TSIS = {}));
