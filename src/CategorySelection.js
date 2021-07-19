import { useContext, useCallback } from "react"
import { stateContext } from "./stateReducer";


const CategorySelection = (props) => {
    const { categories } = useContext(stateContext)
    // const [products, setProducts] = useState([])
    
    // const fetchRequest = useCallback(async () => { 
    //     const res = await fetch("https://fakestoreapi.com/products")
    //     const data = await res.json()
    // })
    
    // const fetchProducts = async(category) => {
    //     let res = await fetch(`http://localhost:4000/api/v1/products`)
    //     let data = setProducts(res.json())
    //     console.log(data)
    // }

    // function getProducts = async(products) => {
    //     let res = await fetch(`http://localhost:4000/api/v1/products`)
    //     let data = await res.json()
    //     console.log(data)
    
    // }

    // const getProducts = async(category) => {
    //     console.log(category)
    //     let res = await fetch(`http://localhost:4000/api/v1/products`)
    //     let data = await res.json()
    //     console.log(data)
    //     return data
    // }

    return (
        <>
        <div className="m-3 d-flex justify-content-center">
            {categories.map((category => 
                <button className="btn btn-primary btn-sm rounded-pill m-3" 
                    onClick={"Hello"}>
                    {category.name.toUpperCase()}
                </button>
            ))}
        </div>
        </>
    )
}

export default CategorySelection