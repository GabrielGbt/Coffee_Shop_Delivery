import { createContext, useState, ReactNode, useEffect } from "react";
import { meusCoffees } from "./myJson";






export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    //for cart   
    quantity: number;
}

interface appState {
    products: Product[];
    cartParam: Product[];
    setProducts: (value: Product) => void;
    setCartQuantity: (value: Product) => void;
}

export const DataStateContext = createContext({} as appState);

interface ChildrenContext {
    children: ReactNode;
}

export function DataStateContextProvider({children}: ChildrenContext) {
    const [products,  setProduct] = useState<Product[]>([]);
    const [cartParam, setCartProps] = useState<Product[]>([]);


    function setProducts(value: Product) {
        setProduct([...products, value])
    }
    
    function setCartQuantity(value: Product) {
    
        const index: number = cartParam.findIndex((e) => e.id == value.id);
        
        if (cartParam.length > 0 && index > -1) {
            const listOfNotEquals: Product[] = cartParam.filter((e) => e.id != value.id)
            const quantityExists: number = cartParam[index].quantity;
            const quantOfValue = value.quantity;
            value.quantity = quantOfValue + quantityExists;
            console.log(value);
            setCartProps([...listOfNotEquals, value]);
        } else {
            setCartProps([...cartParam, value]);
        }
    }
    
    useEffect(() => {
        setProduct(meusCoffees);
    }, [])

    return (
        <DataStateContext.Provider 
            value={{ 
                products, 
                setProducts, 
                cartParam, 
                setCartQuantity,
                }}>
                    {children} 
        </DataStateContext.Provider>
    )
}
