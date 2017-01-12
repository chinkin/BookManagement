sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("BookManagement.controller.Landing", {
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});