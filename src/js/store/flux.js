/* eslint-disable */
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			title: "La quincalla de Jose.",
			products: [],
			carrito: [
				{
					id: 17,
					title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
					price: 39.99,
					description:
						"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
					category: "women's clothing",
					image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
					rating: {
						rate: 3.8,
						count: 679
					}
				},
				{
					id: 16,
					title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
					price: 29.95,
					description:
						"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
					category: "women's clothing",
					image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
					rating: {
						rate: 2.9,
						count: 340
					}
				},
				{
					id: 3,
					title: "Mens Cotton Jacket",
					price: 55.99,
					description:
						"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
					category: "men's clothing",
					image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
					rating: {
						rate: 4.7,
						count: 500
					}
				}
			]
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
