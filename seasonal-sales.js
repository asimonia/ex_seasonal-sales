var SeasonalSales = (function() {
	var _products = [];
	var _categories = [];

	return {
		loadProducts: function(callbackFunction) {
			// create XHR to load Products
			var loader = new XMLHttpRequest();

			loader.open("GET", "products.json");
			loader.send();

			// Listen for when the laod event is broadcast
			// add execute an anonymous callback
			loader.addEventListener("load", function() {
				// Set the value of the private array
				_products = JSON.parse(this.responseText).products;
				console.log("Private products", _products);

				callbackFunction(_products);
			});
		},
		loadCategories: function(callbackFunction) {
			// create XHR to load Categories
			var loader = new XMLHttpRequest();

			loader.open("GET", "categories.json");
			loader.send();

			loader.addEventListener("load", function() {
				_categories = JSON.parse(this.responseText).categories;
				console.log("Private categories", _categories);

				callbackFunction(_categories);
			});
		}
	}
})();