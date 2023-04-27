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

				setStore({ carrito: [nuevoProducto, ...auxStore.carrito] });
			},
			updateProduct: () => {
				//cambia el precio de un producto
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
