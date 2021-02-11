// @ts-nocheck
sap.ui.define([
		"sap/ui/core/UIComponent",
		"logaligroup/SAPUI5/model/Models",
		"sap/ui/model/resource/ResourceModel"
    ], 
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof logaligroup.SAPUI5.model.Models} Models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */    
        function (UIComponent, Models, ResourceModel) {

		return UIComponent.extend("logaligroup.SAPUI5.Component", {

			metadata: {
                manifest: "json"
            },
                        
			init: function () {

				//call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				// set model on component
				this.setModel(Models.createRecipient());

				// set i18n model on component
				var i18nModel = new ResourceModel({
					bundleName: "logaligroup.SAPUI5.i18n.i18n"
				});

				this.setModel(i18nModel, "i18n");

			}

		});

	}

);