const PRODUCTS = [
	{
		id: self.crypto.randomUUID(),
		name: 'aplus automation',
		image: 'aplusautomation.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 12,
		canBuy: true
	},
	{
		id: self.crypto.randomUUID(),
		name: 'aplus media',
		image: 'aplus-media.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 22,
		canBuy: true
	},
	{
		id: self.crypto.randomUUID(),
		name: 'robo fig combo',
		image: 'robo_fig_combo.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 5,
		canBuy: true
	},
	{
		id: self.crypto.randomUUID(),
		name: 'target leap frog',
		image: 'target-leap-frog.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 8,
		canBuy: false
	}
];

const elListProduct = document.getElementById('list-product');
const elMyCartBody = document.getElementById('my-cart-body')
let CART = [];

renderListProduct(PRODUCTS);


elListProduct.addEventListener('click', function (e) {
	const el = e.target;
	// const valueQuancity = document.getElementById('quancityOrder').value;
	if (el.classList.contains('btn-price')) {
		const productID = el.id;
		let quantityInput = el.previousElementSibling;
		console.log(quantityInput);
		let quantity = parseInt(quantityInput.value);
		console.log(quantity);
		// console.log(quantity);
		let idx = CART.findIndex(item => item.product_Id === productID)
		if (idx === -1) {
			let cartItem = {
				id: self.crypto.randomUUID(),
				product_Id: productID,
				quancity: quantity
			}
			CART.push(cartItem);
			renderCart(CART);
		} else {
			let hadCartItem = CART[idx];
			let hadQuancity = parseInt(hadCartItem.quancity);
			hadCartItem.quancity = hadQuancity + quantity;
			renderCart(CART);
		}
	}
});


elMyCartBody.addEventListener('click', function (e) {
	const el = e.target;
	if (el.classList.contains('btn-delete')) {
		const idBtnDelete = el.id;
		CART = CART.filter(item => item.id !== idBtnDelete);
		renderCart(CART);
	}
})
function renderListProduct(list) {
	let html = "";
	list.forEach((item) => {
		let htmlPrice = `<span class="price">${item.price} USD</span>`
		if (item.canBuy) {
			htmlPrice = /* htnml */`
			<input name="quantity-product-1[]" type="number" value="1" min="1" id="quancityOrder ${item.id}" class="quancityOrder"/>
			<a data-product="1" href="#" class="price btn-price" id='${item.id}'> ${item.price} USD</a>`
		}
		html += /* html */`
		<div class="media product">
			<div class="media-left">
				<a href="#">
				<img class="media-object" src="images/${item.image}" alt="charmander" /></a>
			</div>
			<div class="media-body">
		  		<h4 class="media-heading">${item.name}</h4>
		 		<p>${item.summary}</p>
		  		${htmlPrice}
			</div>	
		</div>`
	})
	elListProduct.innerHTML = html;
}


function renderCart(listCart,) {
	let html = "";
	listCart.forEach((item, index) => {
		const itemCount = index + 1;
		const productID = item.product_Id;
		const productitem = PRODUCTS.find(el => el.id === productID)
		const priceProduct = parseInt(productitem.price);
		const quancityProcduct = (item.quancity);
		const subtotal = priceProduct * quancityProcduct;
		html += /* html */`
		<tr>
			<th scope="row">${itemCount}</th>
			<td>${productitem.name}</td>
			<td>${productitem.price}</td>
			<td><input name="cart-item-quantity-1" type="number" value="${item.quancity}" min="1" id="${item.id}"/></td>
			<td><strong>${subtotal} USD</strong></td>
			<td>
		  		<a class="label label-info update-cart-item" href="#" data-product="">Update</a>
		  		<a class="label label-danger delete-cart-item btn-delete" href="#" data-product="" id="${item.id}">Delete</a>
			</td>
	  </tr>`
	})
	elMyCartBody.innerHTML = html;
}






