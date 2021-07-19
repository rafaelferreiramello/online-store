import { createContext } from 'react'

export default function stateReducer(currentState, action) {
    switch (action.type) {
        case "setCategories": {
            return {
                ...currentState,
                categories: action.categories 
            }
        }
        case "setProducts": {
            return {
                ...currentState,
                products: action.products
            }
        }
        case "setProductsCategories": {
            return {
                ...currentState,
                productsCategories: action.productsCategories
            }
        }
        default:
            return currentState
        
    }
}

export const stateContext = createContext()
