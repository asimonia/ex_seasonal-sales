/* DOM ELEMENTS */
var seasonal = document.getElementById("seasonal-discount");

seasonal.addEventListener("change", function(e) {
	switch(e.target.value) {
		case "Winter":
			showProducts(SeasonalSales.getProducts(), 1);
			break;
		case "Autumn":
			showProducts(SeasonalSales.getProducts(), 2);
			break;
		case "Spring":
			showProducts(SeasonalSales.getProducts(), 3);
			break;
	}
});


function showProducts(products, season) {
	var list = document.getElementById("products");
	var outputString = "";

	for (var i = 0; i < products.length; i++) {
		var currentProduct = products[i];
		var discountedPercent = (1 - SeasonalSales.getDiscount(season));
		var discountedPrice = currentProduct.price * discountedPercent;
		discountedPrice = discountedPrice.toFixed(2);

		var currentDepartment = SeasonalSales.getDepartment(currentProduct.category_id);

		outputString += `<tr>
		<td>${currentProduct.name}</td>
		<td>${currentDepartment}</td>
		<td>$${discountedPrice}</td>
    </tr>`;
      	console.log(outputString);
	}

	list.innerHTML = outputString;
}


/* CALL IIFEs  */
SeasonalSales.loadCategories();
SeasonalSales.loadProducts(showProducts);


