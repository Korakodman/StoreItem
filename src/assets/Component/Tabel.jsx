import React, { useEffect,useRef } from 'react'
import itemStore from "/Product/ItemStore.json"
import { useState } from 'react';
export default function Tabel() {
  const [Product, setProduct] = useState([])
  const [loading,setloading] = useState()
  const [update,setupdate] = useState("")
   const [id,setid] = useState("")
   const [itemlist,setitemlist] = useState([])
   
 

 
  let updateitem = itemStore.filter((item)=>
  item.Name.toLowerCase().includes(update.toLowerCase())
)
     
if(id){
  updateitem = itemStore.filter((item)=>
  item.id.toLowerCase().includes(id.toLowerCase())
 )}
 const DialogRef = useRef() 
 const OpenDialog = (item) =>{
  DialogRef.current.showModal()
  setProduct(item)
 }
 const CloseDialog = () =>{
  DialogRef.current.close()
 }
  return (
  <div>
     <div className=' bg-gray-400 py-2 w-full top-0 sticky'>
        <div>
           <input value={id} onChange={(e)=>setid(e.target.value )} className='bg-gray-200 p-2 rounded-xl 
         mb-2' placeholder='ID' type='text'></input>
        <input value={update} onChange={(e)=>setupdate(e.target.value)} className='bg-gray-200 p-2 rounded-xl' placeholder='ค้นหา' type='text'></input>
        </div>
      </div>
         <table className="md:min-w-full  bg-gray-800 text-white border border-gray-600 w-full">
        <thead>
          <tr className="border-b border-gray-600 md:text-lg  text-[12px]">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            
            <th className='p2'>ตัวเลือก</th>

          </tr>
        </thead>
        <tbody>
        {updateitem.map((item,index)=>{
          return <tr key={index} className='border-b border-gray-600'>
          <td >{item.id}</td>
          <td>{item.Name}</td>
          
         <td> <button type='button' className=' bg-gray-200  text-black mt-2 mb-2 px-2 rounded-sm text-sm'
         onClick={()=>OpenDialog(item)}
         >รายละเอียด</button></td>
         </tr>
         })}
         
        </tbody>
      </table>
      <dialog ref={DialogRef} className=' fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[400px] p-4 bg-white rounded-md shadow-lg border-4 border-blue-300'>
        <div className=''>
        <div >
          <h1>รหัส: {Product.id}</h1>
        <h1>ชื่อสินค้า: {Product.Name}</h1>
        <h1>จำนวน: {Product.total}</h1></div>
        <div><button className='bg-gray-400 px-2 rounded-md mt-5 hover:bg-gray-500' onClick={CloseDialog}>ปิด</button></div>
        </div>
      </dialog>
      </div>
  )
}
