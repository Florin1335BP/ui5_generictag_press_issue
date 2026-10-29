sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("myapp.controller.MainView", {
      onColumnListItemPress() {
        MessageToast.show("Column list item pressed.");
      },
    });
  },
);
