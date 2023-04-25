/* eslint-disable */
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			title: "La quincalla de Jose.",
			products: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadProducts: async () => {
				// const auxStore = getStore();
				try {
					let resp = await fetch("https://fakestoreapi.com/products");
					let data = await resp.json();
					setStore({ products: data });
				} catch (err) {
					console.log(err);
				}
			}
		}
	};
};

export default getState;
