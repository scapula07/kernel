import React from 'react'
import logo from "../../../assets/logo-b.png"
import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { useState } from 'react';
import { MdKeyboardArrowDown ,MdKeyboardArrowUp} from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { Link } from 'react-router-dom';


export default function SidePanel() {

  const [active,setActive]=useState("")

  console.log(active,"acc")
  return (
    <div className='w-full bg-white h-full rounded-xl py-6 px-4 overflow-y-scroll'>
          <div className='flex flex-col space-y-16'>
                <div className='w-full space-y-3 px-4'>
                     <img 
                        src={logo}
                        className="w-26 h-8"
                     />
                    <h5 className='h-1 w-full border-b border-slate-500'></h5>

                </div>


                   <div className='flex flex-col px-4 space-y-6'>
                        {[
                            {
                                title:"Overview",
                                icon:<IoGrid/>,
                                link:""

                            },
                            {
                                title:"Users",
                                icon:<ImUsers />,
                                items:[
                                   {
                                    name:"Customers",
                                    link:"customers"

   
                                   },
                                   {
                                    name:"Sellers",
                                    link:"sellers"
                                    
   
                                   },
                                  ]
   
   
                                 },
                            {
                             title:"Products",
                             icon:<IoBagHandleSharp />,
                             items:[
                                // {
                                //  name:"New product",
                                //  link:"new-product"

                                //  },
                                {
                                    name:"Products",
                                    link:"products"
   
                                }
                               ]


                              },
                              {
                                title:"Orders",
                                icon:<IoCart />,
                                items:[
                                   {
                                    name:"Manage Orders",
                                    link:"orders"
   
                                   }
                                  ]
   
   
                                 },
                            {
                                title:"Messages",
                                icon:<BiSolidMessageSquareDots />,
                                link:"/messages"
                            },

                           ].map((item,index)=>{
                              return(
                                <Card 
                                   item={item}
                                   index={index}
                                   active={active}
                                   setActive={setActive}
                                />
                              )
                          })

                        }
                        

                   </div>

          </div>

    </div>
  )
}



const Card=({item,index,active,setActive})=>{
       const [drop,setDrop]=useState(true)
       const colors=["text-blue-300","text-slate-300","text-orange-300","text-green-300 ","text-red-300"]


      return(
        <div className='flex flex-col w-full'>
               <div className='flex items-center w-full justify-between'>
               <Link
                  to={item?.link} 
                  className={
                        `${active ==item?.link&&item?.link !=undefined ?"w-full px-4 bg-orange-400 rounded-sm shadow":
                           "w-full px-4 hover:bg-orange-400 rounded-sm hover:shadow"}`
                          }
                 onClick={()=>setActive(item?.link)}
               >
                     <div className='flex items-center space-x-3  py-2 w-full'>
                          <h5 className={` text-lg ${colors[index]}`}>{item?.icon}</h5>
                          <h5 className='text-slate-800 text-sm font-light'>{item?.title}</h5>

                      </div>
                  </Link>
                      {["Products","Orders","Users"]?.includes(item?.title)&&
                              <>
                              {drop?
                                  <MdKeyboardArrowUp
                                  className='text-2xl text-slate-700 '
                                  onClick={()=>setDrop(false)}
                                  />
                                      :
                                  <MdKeyboardArrowDown 
                                      className='text-2xl text-slate-700 '
                                      onClick={()=>setDrop(true)}
                                  />
                                  
                                  
  
                              }
                        </>

                      }
                 
                    
                     

               </div>
               {["Products","Orders","Users"]?.includes(item?.title)&&
                              <>
                 {drop&&
                    <div className='flex-col flex px-8 space-y-2 py-4'>
                         {item?.items?.map((tag)=>{
                              return(
                                <Link to={tag?.link} 
                                className={
                                  `${active ==tag?.link ?"w-full px-4 bg-orange-400 rounded-sm shadow py-2":
                                     "w-full px-4 hover:bg-orange-400 rounded-sm hover:shadow hover:py-2"}`
                                    }
                                   onClick={()=>setActive(tag?.link)}
                                >
                                     <h5 className='text-xs text-slate-700 font-light'>{tag?.name}</h5>
                                </Link>

                              )
                         })

                         }


                    </div>
                }
                </>
                } 
        </div>

      )
}