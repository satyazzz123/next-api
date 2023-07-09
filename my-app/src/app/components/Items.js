'use client';
import React, { useEffect } from 'react'
import axios from 'axios';
export default function Items() {

    useEffect(()=>{
        const fectdata=async()=>{
            const res=await axios.get("https://fakestoreapi.com/products")
            console.log(res.data);
        }
        fectdata()
    })
  return (
    <div>
      
    </div>
  )
}
