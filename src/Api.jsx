import React, { useEffect, useReducer } from "react";
import stateReducer, {stateContext} from "./stateReducer";
import CategorySelection from './CategorySelection'
import ProductSelection from "./ProductSelection";


export default function Api() {
    const [store, dispatch] = useReducer(stateReducer, {
        categories: [],
        products: []
    })
    
    useEffect(async () => {
        const res = await fetch("http://localhost:4000/api/v1/categories")
        const data = await res.json()
        dispatch({
            type: "setCategories",
            categories: data
        })
    }, [])

    useEffect(async () => {
        const res = await fetch("http://localhost:4000/api/v1/products")
        const data = await res.json()
        dispatch({
            type: "setProducts",
            products: data
        })
    }, [])

    return (
        <stateContext.Provider value={{ ...store, dispatch }}>
            <CategorySelection />
            <ProductSelection />
        </stateContext.Provider>

    )

}

// export default class Api extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             error: null,
//             categories: [],
//             products: [],
//             cartItems: []
//         }
//     }

//     componentDidMount() {
//         fetch("http://localhost:4000/api/v1/categories")
//             .then(res => res.json())
//             .then(json => {
//                     this.setState({
//                         categories: json 
//                     })
//                 },
//                 (error) => {
//                     this.setState({
//                         error
//                     })
//                 }
//             )
//     }

    // getTotal() {
    //     const total = Object.keys(this.state.cartItems).reduce((previous, key) => {
    //         return previous + this.state.cartItems[key].price * this.state.cartItems[key].quantity;
    //     }, 0);
    //     return `$${total.toFixed(2)}`;
    // }



    

//     addToCart = product => {
//         const alreadyInCart = this.state.cartItems.findIndex(
//             item => item.id === product.id
//         )
//         console.log(alreadyInCart)

//         if (alreadyInCart === -1) {
//             const updatedItems = this.state.cartItems.concat({
//                 ...product,
//                 quantity: 1
//             })
//             this.setState({ cartItems: updatedItems })
//         } else {
//             const updatedItems = [...this.state.cartItems]
//             updatedItems[alreadyInCart].quantity += 1
//             this.setState({ cartItems: updatedItems })
//         }
//     }
    
//     reduceCart(item) {
//         if (item.quantity === 1) return;
//         var items = this.state.cartItems;
//         for (var i = 0; i < items.length; i++) {
//             if (items[i].id === item.id) {
//                 items[i].quantity--;
//                 this.setState({cartItems: items});
//                 localStorage.setItem('shopping-cart', JSON.stringify(this.state.cartItems));
//                 return false;
//             }
//         }
//     }

//     incrementCart(item) {
//         var items = this.state.cartItems;
//         for (let i = 0; i < items.length; i++) {
//             if (items[i].id === item.id) {
//                 items[i].quantity++;
//                 this.setState({cartItems: items});
//                 localStorage.setItem('shopping-cart', JSON.stringify(this.state.cartItems));
//                 return false;
//             }
//         }
//     }

//     removeFromCart(item) {
//         const items = this.state.cartItems;
//         for (let i = 0; i < items.length; i++) {
//             if (items[i].id === item.id) {
//                 items.splice(i, 1);
//                 this.setState({cartItems: items});
//                 localStorage.setItem('shopping-cart', JSON.stringify(this.state.cartItems));
//                 return false;
//             }
//         }
//     }

 

//     render () {
//         const { error, categories, products, cartItems } = this.state
//         if (error) {
//             return <div>Error: {error.message}</div>
//         } else {
//         return (
//             <>
//                 <div className="m-3 d-flex justify-content-center">
//                     {this.state.categories.prototype.map(category => (
//                         <button className="btn btn-primary btn-sm rounded-pill m-3" onClick={() => this.getProducts(category)}>{category}</button>
//                     ))}
//                 </div>
//                 <div className="d-flex justify-content-center align flex-wrap">
//                     {this.state.products.map(product => (
//                     <div key={product.id} className="card d-flex flex-column align-content-center" style={{width: "18rem"}}>
//                         <img src={product.image} className="card-img-top" alt="..."/>
//                         <div className="card-body">
//                             <h5 className="card-title">{product.title}</h5>
//                             <p className="card-text">{product.description}</p>
//                             <p className="card-price">${product.price}</p>
//                             <button href="#" className="btn btn-primary addToCart" onClick={() => this.addToCart(product)}>Add to the cart</button>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//                 <div>
//                     <section className="container m-5">
//                         <h2 className="section-header">CART</h2>
//                         {console.log(cartItems)}
//                         {cartItems.map(item => (
//                             <div className="m-4" key={item.id}>
//                                 <div>
//                                     <img src={item.image} width="100" height="100"/>
//                                     <span>{item.title}</span>
//                                 </div>
//                                 <span>${item.price.toFixed(2)}</span>
//                                 <div>
//                                     <button className="btn btn-light" type="button" onClick={() => this.reduceCart(item)}>-</button>
//                                     <span>{item.quantity}</span>
//                                     <button className="btn btn-light" type="button" onClick={() => this.incrementCart(item)}>+</button>
//                                     <button className="btn btn-danger" type="button" onClick={() => this.removeFromCart(item)}>REMOVE</button>
//                                 </div>
//                             </div>
//                         ))}
//                         <p>TOTAL: {this.getTotal()}</p>
//                         <button className="btn btn-primary buttonPurchase" type="button">PURCHASE</button>
//                     </section>
//                 </div>
//             </>
//         )
//         }
//     }
// }

