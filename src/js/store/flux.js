/* eslint-disable */
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			title: "La quincalla de Jose.",
			products: [],
			carrito: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadProducts: async () => {
				// const auxStore = getStore();

				// Services
				try {
					let resp = await fetch("https://fakestoreapi.com/products");
					let data = await resp.json();
					setStore({ products: data });
				} catch (err) {
					console.log(err);
				}
			},
			addToCart: nuevoProducto => {
				//console.log("Add to cart", producto);

				const auxStore = getStore();

				//sincronizar con la API // CRUD // fetch() POST
				if (!auxStore.carrito.find(producto => producto.id == nuevoProducto.id)) {
					setStore({ carrito: [nuevoProducto, ...auxStore.carrito] });
				}
			},
			updateProduct: () => {
				//cambia el precio de un producto
			},
			removeProductFromCart: targetProduct => {
				//cambia el precio de un producto
				const store = getStore();
				// console.log(targetProduct);
				setStore({ carrito: store.carrito.filter(products => products.id != targetProduct.id) });
			},
			newProduct: newItem => {
				const auxStore = getStore();
				// console.log("new item on action!", newItem);
				setStore({ products: [newItem, ...auxStore.products] });
				alert("New Product added successfully!");
			}
		}
	};
};

export default getState;
