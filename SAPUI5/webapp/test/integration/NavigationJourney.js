// @ts-nocheck
/* eslint-disable no-undef */
sap.ui.define([
    "logaligroup/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
	"./pages/HelloPanel"
], 
/**
 * 
 * @param {typeof sap.ui.test.opaQunit} opaQunit 
 */
function (mockserver, opaQunit) {

	QUnit.module("Navigation");

	opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

        //initialize the mock server
        mockserver.init();

		//Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "logaligroup.SAPUI5"
			}
		});

		//actions
		When.onTheAppPage.iSayHelloDialogButton();

		//assertions
		Then.onTheAppPage.iSeeTheHelloDialog();

		//cleanup
		Then.iTeardownMyApp();

	});

});