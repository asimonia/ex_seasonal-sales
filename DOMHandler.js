function showCategories(category) {

}

function showProducts(products) {
	var list = document.getElementById("products");
	var outputString = "";

	for (var i = 0; i < products.length; i++) {
		var currentProduct = products[i];
		var discountedPercent = (1 - SeasonalSales.getDiscount(currentProduct.category_id));
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
SeasonalSales.loadProducts(showProducts);
SeasonalSales.loadCategories(showCategories);

