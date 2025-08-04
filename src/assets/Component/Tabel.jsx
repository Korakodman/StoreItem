import React, { useEffect } from 'react'
import itemStore from "/Microsoft VS Code/Work/StoreItem/Product/ItemStore.json"
import { useState } from 'react';
export default function Tabel() {
  const [Product, setProduct] = useState([])
  const [loading,setloading] = useState()
 
  useEffect(()=>{
    try {
       fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProduct(data));
    } catch (error) {
      console.error(error)
    }
  },[])
console.log(Product)
  

  return (
  <div>
         <table className="md:min-w-full  bg-gray-800 text-white border border-gray-600 w-full">
        <thead>
          <tr className="border-b border-gray-600 md:text-lg  text-[12px]">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className='p-2'>จำนวน</th>
            <th className='p2'>ตัวเลือก</th>

          </tr>
        </thead>
        <tbody >
         {Product.map((item,index)=>{
          return <tr key={index} className='border-b border-gray-600'>
          <td >{item.id}</td>
          <td>{item.title}</td>
          <td>{item.total}</td>
         <td> <button type='button' className=' bg-gray-200  text-black mt-2 mb-2 px-2 rounded-sm text-sm'>รายละเอียด</button></td>
         </tr>
         })}
         
        </tbody>
      </table>
      </div>
  )
}
