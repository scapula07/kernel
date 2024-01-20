import React from 'react'
import prod from "../../assets/prod.png"
import Delivery from './delivery'

export default function Order() {
  return (
    <div className='w-full flex flex-col rounded-lg py-6 px-6 space-y-3'
        style={{background: "#F3F3F3"}}
        >
            <div>
                <h5 className='text-2xl font-semibold'>Order  #1</h5>
            </div>
            <div className='flex flex-col space-y-4'>
                   <h5 className='text-lg font-semibold'>1. Contact information</h5>
                   <div className='flex flex-col'>
                       <h5 className='text-sm font-light'>Carter Curtis</h5>
                       <h5 className='text-sm font-light'>+4(123) 232 34 34</h5>
                       <h5 className='text-sm font-light'>frankie201970@gmail.com</h5>

                   </div>

              </div>



              <div className='flex flex-col space-y-4'>
                   <h5 className='text-lg font-semibold'>2. Order information</h5>
                   <Product />
                 

              </div>


              <div className='flex flex-col space-y-4 w-full'>
                   <h5 className='text-lg font-semibold'>3. Delivery</h5>
                   <Delivery />
                 

              </div>

              <div className='flex flex-col space-y-4 w-full'>
                   <h5 className='text-lg font-semibold'>4. Payment</h5>
                   <div className='flex flex-col space-y-2.5 py-5 bg-white rounded-lg px-4'>
                   <h5 className='text-slate-600'>Choose option</h5>
                     {["Kennel Breeders wallet","Cashless transfer","Cash"].map((text)=>{
                          return(
                            <div className='rounded-full border w-1/2 px-4 py-1 flex items-center space-x-3'> 
                            <input 
                                type={"radio"}
                            />

                            <h5 className='font-light text-slate-700 '>{text}</h5>
                         </div>
                          )
                     })

                     }
                
                </div>

                <div className='flex flex-col space-y-4 w-full'>
                   <h5 className='text-lg font-semibold'>5. Opder recipient contact information </h5>
                  
                 

              </div>
                 

              </div>



    </div>
  )
}




const Product=()=>{
      return(
    <div className='flex w-full bg-white rounded-lg px-4 space-x-6 h-28 py-4'>
        <img 
          src={prod}
          className="w-20 h-20"
        />

        <div className='flex w-full justify-between'>
            <div className='flex flex-col'>
                  <div className='flex flex-col space-y-3'>
                       <h5 className='text-lg text-slate-700 font-light'>“My dog” kit</h5>
                       <h5 className='text-sm text-slate-500 '>Starter kit to buy when there is new dog friend in your family</h5>
                  </div>

                  <div className='flex items-center'>
                  </div>
            </div>
          

          <div>
          </div>


        </div>
        </div>
      )
}