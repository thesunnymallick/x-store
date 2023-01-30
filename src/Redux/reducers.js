

 import {createReducer} from "@reduxjs/toolkit"
 
 export const cartReducer=createReducer(
    {
       cartItems: [],
       subTotal:0,
       shiping:0,
       tax:0,
       total:0,
 
    },
    {
        ADD_TO_CART:(state, action)=>{

            const products=action.payload;
            const isItemExist=state.cartItems.find((i)=>i.data.id===products.data.id)

              if(isItemExist)
              {
                  state.cartItems.forEach(i=>{
                    if(i.data.id===products.data.id){
                     i.quantity+=1;
                    }
                  })
              }
              else{
                state.cartItems.push(products);
              }
          
            

        },

        DECREMNET: (state, action)=>{
          const items=state.cartItems.find((i)=>i.data.id===action.payload)

          if(items.quantity>1)
          {
            state.cartItems.forEach(i=>{
              if(i.data.id===action.payload){
               i.quantity-=1;
              }
            })
          }
        },

        REMOVE_TO_CART: (state, action)=>{

          state.cartItems=state.cartItems.filter((i)=>i.data.id!==action.payload)
        },

        CALCULATE_PRICE:(state)=>{
          let sum=0;
          state.cartItems.forEach((i)=>sum+=i.data.price*i.quantity)
          state.subTotal=sum;
          state.shiping=  state.subTotal>1000 ? 200 : 0
          state.tax= +(state.subTotal*0.18).toFixed();
          state.total= (state.subTotal+state.tax+state.shiping).toFixed(2);

        }
    }
    )