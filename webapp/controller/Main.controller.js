sap.ui.define([
	"com/xact/apps/controller/BaseController",
    "sap/m/MessageToast"
 //   "com/xact/apps/localService/dafna"
    
], function(Controller,MessageToast,dafna) {
	"use strict";
    
	return Controller.extend("com.xact.apps.controller.Main", {
		buttonPress:function(evt){
 
    	var text = this.getModel("dafna").getProperty("/target/name");
       	MessageToast.show(text);
   
    	}
	});
});