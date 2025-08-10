import React from 'react'

export default function ItemName({updateitem}) {
    return(
        <div>
               {updateitem.map((item,index)=>{
          return <tr key={index} className='border-b border-gray-600'>
          <td >{item.id}</td>
          <td>{item.Name}</td>
          <td>{item.total}</td>
         <td> <button type='button' className=' bg-gray-200  text-black mt-2 mb-2 px-2 rounded-sm text-sm'
         onClick={()=>OpenDialog(item)}
         >รายละเอียด</button></td>
         </tr>
         })}
        </div>
    )
}
