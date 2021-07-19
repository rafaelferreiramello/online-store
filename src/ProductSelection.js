import React, {useContext, useState, useEffect} from "react";
import {stateContext} from "./stateReducer";


const ProductSelection = () => {
    const { products } = useContext(stateContext)

    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log(product)
    };
    
    useEffect(() => {
        total();
    }, [cart]);
    
    const [cartTotal, setCartTotal] = useState(0)

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
          totalVal += parseFloat(cart[i].price);
        }
        setCartTotal(totalVal);
    };

    const removeFromCart = (product) => {
        let updatedCart = [...cart];
        updatedCart = updatedCart.filter((cartItem) => cartItem.id !== product.id);
        setCart(updatedCart);
    };

    const listItems = products.map((product) => (
        <div key={product.id} className="card d-flex flex-column align-content-center" style={{width: "18rem"}}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-price">${parseFloat(product.price)}</p>
                <button href="#" className="btn btn-primary addToCart" onClick={() => addToCart(product)}>Add to the cart</button>
            </div>
        </div>
      ));

    const cartItems = cart.map((item) => (
        <div className="m-4" key={item.id}>
            <div>
                <img src={item.image} width="100" height="100"/>
            </div>
            <div>
                <span>{item.title}</span>
            </div>
                <span>${parseFloat(item.price)}</span>
            <div>
                <button className="btn btn-danger" type="button" onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        </div>
    ));
    
    return (
        <div>
            <div className="d-flex justify-content-center align flex-wrap">{listItems}</div>
            <section className="container m-5">
                <h2 className="section-header">CART</h2>
                <div>{cartItems}</div>
                <h5 className="section-header">Total: ${cartTotal}</h5>
            </section>
        </div>
    );

{/* <div className="m-4" key={item.id}>
    <div>
        <img src={item.image} width="100" height="100"/>
        <span>{item.title}</span>
    </div>
    <span>${item.price.toFixed(2)}</span>
    <div>
        <button className="btn btn-light" type="button" onClick={() => this.reduceCart(item)}>-</button>
        <span>{item.quantity}</span>
        <button className="btn btn-light" type="button" onClick={() => this.incrementCart(item)}>+</button>
        <button className="btn btn-danger" type="button" onClick={() => this.removeFromCart(item)}>REMOVE</button>
    </div>
</div> */}




// {cartTotal}


    // const addToCart = (product) => {
    //     const alreadyInCart = cartItems.findIndex(
    //         item => item.id === product.id
    //     )
    //     console.log(alreadyInCart)

    //     if (alreadyInCart === -1) {
    //         const updatedItems = cartItems.concat({
    //             ...product,
    //             quantity: 1
    //         })
    //         setCartItems({ cartItems: updatedItems })
    //     } else {
    //         const updatedItems = [...this.state.cartItems]
    //         updatedItems[alreadyInCart].quantity += 1
    //         setCartItems({ cartItems: updatedItems })
    //     }
    // }


    // return (
    //     <>
    //         <div className="d-flex justify-content-center align flex-wrap">
    //             {products.map((product => (
    //             <div key={product.id} className="card d-flex flex-column align-content-center" style={{width: "18rem"}}>
    //                 <img src={product.image} className="card-img-top" alt="..."/>
    //                 <div className="card-body">
    //                     <h5 className="card-title">{product.title}</h5>
    //                     <p className="card-text">{product.description}</p>
    //                     <p className="card-price">${product.price}</p>
    //                     <button href="#" className="btn btn-primary addToCart" onClick={() => addToCart(el)}>Add to the cart</button>
    //                 </div>
    //             </div>
    //             )))}                   
    //         </div>
    //     </>
    // )

}
export default ProductSelection