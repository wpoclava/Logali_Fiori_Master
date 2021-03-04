// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof logaligroup.SAPUI5.model.Models} Models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel, HelloDialog) {

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

                //Se crea una instancia pasandole el controlador que a su vez tiene la vista
                this._helloDialog = new HelloDialog(this.getRootControl());

            },

            //cuando se sale del componente se destruye la instancia this._HelloDialog
            exit: function () {

                this._helloDialog.destroy();
                delete this._HelloDialog;

            },

            /*llamar a la funcionalidad del objeto gestionado, es decir llamar al open
            desde cualquier punto de la aplicación*/
            openHelloDialog: function () {

                this._helloDialog.open();

            }

        });

    }

);