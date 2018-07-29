sap.ui.define([
		"com/xact/apps/controller/BaseController"
	], function (Controller) {
		"use strict";

		return Controller.extend("com.xact.apps.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);