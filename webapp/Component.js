sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
	"BookManagement/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("BookManagement.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

            // set data model
            var oData = {
                recipient : {
                   name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            // set dialog
			this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});