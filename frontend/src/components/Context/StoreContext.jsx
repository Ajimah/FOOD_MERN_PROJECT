import { createContext , useState, useEffect} from "react";
import axios from "axios";

export const  StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const [cartItems, setCartItem] = useState ({});
    
    
    const url = "http://localhost:4000"
    
    const [token, setToken] = useState("");
    const [food_list , setFoodList] = useState([]);
    

        // adding items to cart

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) { 
            setCartItem((prev) => ({...prev, [itemId]:1}))
    }
    else{
        setCartItem((prev) => ({...prev, [itemId] : prev[itemId]+1}))
    }
            //adding the cart token from backend
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    
    }
        // removing item from cart
    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]-1}))

        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }



    // getting total amount from cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){

            if(cartItems[item] > 0 ) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
        return totalAmount

    }

            // fetching food list from database
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

     const loadCartData = async (token) => {
             const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
             setCartItem(response.data.cartData);
     }

        //set to prevent page reloading
    useEffect (() =>{
            async function loadData(){
                await fetchFoodList();
                
                if(localStorage.getItem("token")){
                    setToken(localStorage.getItem("token"));
                    await loadCartData(localStorage.getItem("token"));
                }
    
            }
            loadData();
    },[])
   

    const contextValue = {
            food_list,
            cartItems,
            setCartItem,
            addToCart,
            removeFromCart,
            getTotalCartAmount,
            url,
            token,
            setToken,

    }

    return(
        <StoreContext.Provider value ={contextValue} >
            {props.children}
            </StoreContext.Provider>
    )

}
export default StoreContextProvider