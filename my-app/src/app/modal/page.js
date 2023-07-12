'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import ReactStars from 'react-stars'
import Link from 'next/link';

export default function Modals() {
    const[modal_data,setmodel]=useState([])
    const[read,setread]=useState(200);
    const[vanish,setvanish]=useState("block")
    useEffect(()=>{
        const fetchmodal=async()=>{
          try {
            const a=window.localStorage.getItem("item_id")
            const res=await axios.get(`https://fakestoreapi.com/products/${a}`)
            console.log(res.data);
            setmodel(res.data)

          } catch (error) {
            
          }
        }
        fetchmodal()
    },[])
    const readmore=(event)=>{

      setread(modal_data.description.length)
   
      event.preventDefault();

      setvanish("none")
    }
 
  return (
    <div className='block lg:flex h-[90vh]'>
          
         
        <div  className='  lg:w-1/2 my-5 flex justify-center '>
        <Image alt='images' height={400} width={400} src={modal_data?.image}/>
        </div>

         <div className='lg:w-1/2 my-5'>
         <div className='text-4xl font-bold my-5'> 
          {modal_data?.title}
          </div>
          <div  className='text-3xl font-bold my-5'>
            ${modal_data?.price}
            </div>
          <div className='text-2xl font-semibold my-5'>
            <div className='text-3xl font-semibold my-5' >About our Product</div>
        <div className='text-xl  my-5'>
        {modal_data.description?.slice(0,read)}
         { modal_data.description?.length>200 ? <button href="" style={{display:`${vanish}`}} onClick={readmore} className='text-cyan-900'>read more</button>:<span></span>}
        </div>
            
            </div>
          <div className='text-2xl font-semibold my-5'> 
           <div className='text-2xl font-semibold my-5'>
            <ReactStars
         count={5}
        edit={false}
          size={24}
        value={modal_data.rating?.rate}
        color2={'#ffd700'} />
           </div>
            <div className='text-2xl font-semibold my-5'>
              {modal_data.rating?.count} verified reviews
            </div>
          </div>
         </div>
        
    </div>
  )
}
// {
//   "id": 3,
//   "title": "Mens Cotton Jacket",
//   "price": 55.99,
//   "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//   "rating": {
//       "rate": 4.7,
//       "count": 500
//   }
// }