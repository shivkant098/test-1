import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from "../reducer/productReducer";
// import { Reducer } from "react";
const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
};
const AppContext = createContext();
const API="https://api.pujakaitem.com/api/products";
const AppProvider = ({ children }) => {

    const [state,dispatch]=useReducer(reducer,initialState);
    const getProducts = async (url) => {
        dispatch ({type:'loading'});

        try {
          const res = await axios.get(url);
        //   console.log("file", res);
        const products=await res.data;
        dispatch({type:'set_api_data',payload:products});
        } catch (error) {
            dispatch ({type:'api_error'});
          console.error("Error fetching products:", error);
          // Handle the error, e.g., set an error state
        }
      };
      // my second api call for single products
      const getSingleProduct=async(url)=>{
        dispatch ({type:'set_single_loading'});

        try{
          const res = await axios.get(url);
        //   console.log("file", res);
        const singleProduct=await res.data;
        dispatch({type:'set_single_product',payload:singleProduct});

        }catch(error){
          dispatch ({type:'single_error'});

        }
      }
    useEffect(()=>{
getProducts(API);
    },
    
   [] );
  return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>;
};

// custom hooks

const useProductContext=()=>{
      //  remove [const {name}=]useContext(AppContext);

    return useContext(AppContext);
}
export { AppProvider, AppContext,useProductContext };
