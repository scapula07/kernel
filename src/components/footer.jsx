import React from 'react'
import logo from "../assets/logo white.png"
export default function Footer() {
  return (
    <div className='w-full flex  px-20 py-8' style={{background: "#282828"}}>
          <div className='w-1/2 flex flex-col space-y-10'>
               <div className='flex '>
                    <img
                      src={logo} 
                      className=""
                   />
                   {/* <div className='flex flex-col'>
                      <h5 className='text-white font-light text-2xl'>Kennel</h5>
                      <h5 className='text-white font-semibold text-2xl'>Breeders</h5>

                   </div> */}

               </div>

               <div className='w-full'>
                   <h5 className='text-white font-semibold w-1/2 text-xl'>Join our newsletter to stay up to date on features and releases</h5>

               </div>

               <div className='flex flex-col space-y-4'>
                     <div className='flex  space-x-3'>
                          <input
                              className='py-2 rounded-lg w-1/3 px-2'
                              placeholder='yourmail@info.com'
                           />
                            <button className='text-white py-2 text-sm px-4 rounded-lg ' style={{background:"#C74A1F"}}>Subscribe</button>

                     </div>

                     <h5 className='text-xs text-slate-400 w-3/5'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</h5>

               </div>

               <div>
                  <h5 className='text-white font-light'>2024. Kennel Breeders. All rights reserved</h5>
               </div>


          </div>
          <div className='w-1/2 text-white'>
               <div className='w-full flex justify-between'>
                   <div className='flex flex-col space-y-4'>
                        <h5 className='font-semibold text-lg'>Main menu</h5>
                        <h5 className='font-light'>Home</h5>
                        <h5 className='font-light'>Marketplace</h5>
                        <h5 className='font-light'>Sellers</h5>

                   </div>

                   <div className='flex flex-col space-y-4'>
                        <h5 className='font-semibold text-lg'>Personal</h5>
                        <h5 className='font-light'>My profile</h5>
                        <h5 className='font-light'>Cart</h5>
                        <h5 className='font-light'>Settings</h5>

                   </div>

                   <div className='flex flex-col space-y-4'>
                        <h5 className='font-semibold text-lg'>Socials</h5>
                        <h5 className='font-light'>Facebook</h5>
                        <h5 className='font-light'>Instagram</h5>
                        <h5 className='font-light'>Twitter</h5>
                        <h5 className='font-light'>Linked in</h5>

                   </div>

               </div>

          </div>

    </div>
  )
}
