var SeasonalSales = (function() {
	var _products = [];
	var _categories = [];

	return {
		loadProducts: function(callbackFunction) {
			var loader = new XMLHttpRequest();

			loader.open("GET", "products.json");
			loader.send();

			loader.addEventListener("load", function() {
				_products = JSON.parse(this.responseText).products;
				callbackFunction(_products);
			});
		},
		loadCategories: function(callbackFunction) {
			var loader = new XMLHttpRequest();

			loader.open("GET", "categories.json");
			loader.send();

			loader.addEventListener("load", function() {
				_categories = JSON.parse(this.responseText).categories;
				callbackFunction(_categories);
			});
		},
		getProducts: function() {
			return _products;
		},
		getCategories: function() {
			return _categories;
		},
		getDiscount: function(category) {
			return _categories[category - 1].discount;
		},
		getSeason: function(category) {
			return _categories[category - 1].season_discount;
		},
		getDepartment: function(category) {
			return _categories[category - 1].name;
		}
	};
})();