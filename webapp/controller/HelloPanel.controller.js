sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("BookManagement.controller.HelloPanel", {
		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg, {
				duration : 3000,
				at : "CenterCenter",
				autoClose : true
			});
		},
        _getDialog : function () {
            // create dialog lazily
            if (!this._oDialog) {
                // create dialog via fragment factory
                this._oDialog = sap.ui.xmlfragment("BookManagement.view.HelloDialog", this);
                // connect dialog to view (models, lifecycle)
                this.getView().addDependent(this._oDialog);
            }
            return this._oDialog;
        },
        onOpenDialog : function () {
        	this.getOwnerComponent().openHelloDialog();
        },
        onCloseDialog : function () {
            this.getView().byId("helloDialog").close();
        }
	});
});