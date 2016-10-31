function showCategories(categories) {

}

function showProducts(products) {
	var list = document.getElementById("products");
	var outputString = "";

	for (var i = 0; i < products.length; i++) {
		var currentProduct = products[i];
		outputString += `<tr>
		<td>${currentProduct.name}</td>
		<td>${currentProduct.category_id}</td>
		<td>${currentProduct.price}</td>
    </tr>`
      	console.log(outputString);
	}

	list.innerHTML = outputString;
}

SeasonalSales.loadCategories(showCategories);
SeasonalSales.loadProducts(showProducts);

