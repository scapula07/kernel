import React ,{useState,useEffect} from 'react'
import Layout from '../../layout'
import { BiLogoVisa } from "react-icons/bi";
import pay1 from "../../assets/pay1.png"
import pay2 from "../../assets/pay2.png"
import pay3 from "../../assets/pay3.png"
import pay4 from "../../assets/k-wallet.png"
import pay5 from "../../assets/cash.png"
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Modal from '../../components/modal';
import { IoMdClose } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";
import { useRecoilValue } from 'recoil';
import { accountTypeState } from '../recoil/state';
import { IoWalletOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { BiSolidCreditCard } from "react-icons/bi";
import { paymentApi } from '../api/payment';
import { BeatLoader } from 'react-spinners';
export default function Payment() {
       const [trigger,setTrigger]=useState(false)
       const currentUser=useRecoilValue(accountTypeState)
       const [payments,setPayment]=useState([])
       const [isLoading,setLoader]=useState(false)
      //  useEffect(()=>{
      //    setPayment(currentUser?.payments)
      //  },[])

       const addCard=async()=>{
        setLoader(true)
          try{
            const res=await paymentApi.addPayment(currentUser,payments)
            setLoader(false)
          }catch(e){
            console.log(e)
            setLoader(false)
          }
       }
  return (
    <Layout>
                
             <div className='w-full h-full flex justify-center py-10'>
                   <div className='flex flex-col w-3/4 space-y-10'> 
                            <div className='flex w-full justify-between '>
                                <h5 className='text-4xl font-semibold '>Payment methods</h5>

                               {isLoading?
                                <BeatLoader
                                  size={"8"}
                                   />
                                :

                               <button className='text-blue-600 py-1.5 text-sm px-4 rounded-lg border border-blue-600' onClick={addCard}>Save changes</button>

                               }
                             

                            </div>


                            <div className='flex flex-col space-y-4 w-full'>
                                 <div className='py-4 '>
                                    {/* <h5 className='text-xl fonnt-semibold text-slate-600'>Credit cards</h5> */}

                                 </div>
                          {currentUser?.payments?.length !=undefined&&[...payments,...currentUser?.payments]?.map((item)=>{
                              return(
                                  <div className='flex w-3/5 bg-white rounded-lg px-4 space-x-6 h-28 py-4'>
                                    {item==="Kennel wallet"&&<IoWalletOutline 
                                         className='text-3xl  rounded-lg text-center '
                                    />}
                                    {item==="Cash"&&<BsCash 
                                       className='text-3xl  rounded-lg text-center '
                                    />}
                                    {item==="Cashless Transfer"&&<BiTransfer 
                                       className='text-3xl  rounded-lg text-center '
                                    />}
                                    {item==="Credit card"&&<FaCreditCard 
                                       className='text-3xl  rounded-lg text-center '
                                     />}

                                      <div className='flex w-full justify-between'>
                                          <div className='flex flex-col'>
                                                <div className='flex flex-col'>
                                                     <h5 className='text-lg text-slate-700 font-light'>{item}</h5>
                                                     {/* <h5 className='text-sm text-slate-500 '>Expiry 06/2024</h5> */}
                                                </div>

                                                <div className='flex items-center'>
                                                </div>
                                          </div>

                                          <MdOutlineDeleteOutline 
                                              className='text-slate-500 text-2xl'
                                          />

                                      </div>
                                     
                                   
                                  </div>
                              )
                           })

                          }

                     
 
                     </div>

                     <div className='flex flex-col space-y-4 w-full'>
                                 <div className='py-4 flex items-center space-x-4'>
                                    <IoMdAdd 
                                      className='text-3xl text-slate-500'
                                      onClick={()=>setTrigger(true)}
                                    />
                                    <h5 className='text-lg font-light text-slate-600'>Add new payment method</h5>

                                 </div>
                    </div>

  

                </div>

              
        </div>


        <Modal trigger={trigger}  cname="w-1/3 py-2 h-96  px-4 rounded-lg  ">
                   <div className='w-full justify-end flex '>
                     <h5 className='bg-white rounded-full p-1'>
                        <IoMdClose
                              className='text-2xl font-light'
                              onClick={()=>setTrigger(false)}
                          />

                     </h5>
                   
                     </div>
               <div className='flex flex-col w-11/12 rounded-lg py-4 px-4 bg-white h-full overflow-y-scroll space-y-4'>
                    <h5 className='text-lg text-slate-600 font-semibold'>Select:</h5>
                

                      <div className='flex flex-col bg-white w-full h-full space-y-2'>

                              {[
                                 {
                                  icon:<IoWalletOutline />,
                                  text:"Kennel wallet"
  
                              },
                              {
                                  icon:<BsCash />,
                                  text:"Cash"
  
                              },
                              {
                                  icon:<FaCreditCard />,
                                  text:"Credit card"
  
                              },

                              {
                                  icon:<BiTransfer />,
                                  text:"Cashless Transfer"

                              },


                              ].map((item)=>{
                                return(
                                    <div className='flex w-full justify-between bg-white rounded-lg px-4 space-x-6 hover:bg-slate-100 py-4'
                                      onClick={()=>setPayment((prev)=>[...prev,item?.text]) || setTrigger(false)}
                                    >
                                        <h5 className='text-3xl  rounded-lg text-center '>{item?.icon}</h5>

                                        <div className='flex w-4/5 justify-between'>
                                            <div className='flex flex-col'>
                                                  <div className='flex flex-col'>
                                                      <h5 className='text- text-slate-700 font-light'>{item?.text}</h5>
                                                    
                                                  </div>

                                                  <div className='flex items-center'>
                                                  </div>
                                            </div>

                                      

                                        </div>
                                      
                                    
                                    </div>
                                )
                              })

                              }
                        
                      </div>

                     
               </div>

        </Modal>


    </Layout>

  )
}
