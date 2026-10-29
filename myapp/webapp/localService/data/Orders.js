module.exports = {
	getInitialDataSet() {
		const data = [];
		for (let i = 0; i < 50; i++) {
			data.push({
				OrderID: i,
				CustomerID: "CustomerID",
				EmployeeID: 0,
				OrderDate: "2026-01-20T12:03:05.211Z",
				RequiredDate: "2026-01-20T12:03:05.211Z",
				ShippedDate: "2026-01-20T12:03:05.211Z",
				ShipVia: 0,
				Freight: 0,
				ShipName: "ShipName",
				ShipAddress: "ShipAddress",
				ShipCity: "ShipCity",
				ShipRegion: "ShipRegion",
				ShipPostalCode: "ShipPostalCode",
				ShipCountry: "ShipCountry",
				Customer: {
					CustomerID: "CustomerID_0",
					CompanyName: "CompanyName",
					ContactName: "ContactName",
					ContactTitle: "ContactTitle",
					Address: "Address",
					City: "City",
					Region: "Region",
					PostalCode: "PostalCode",
					Country: "Country",
					Phone: "Phone",
					Fax: "Fax",
				},
			});
		}
		return data;
	},
	executeAction: function (actionDefinition, actionData, keys) {
		console.log("Updating the data for " + JSON.stringify(keys));
		if (keys.OrderID === "1") {
			this.throwError("Testing Error", 400, {
				error: { message: "Not Allowed on this object", code: "123" },
			});
		} else {
			this.base.updateEntry(keys, { description: "My Custom Description" });
		}
	},
};
