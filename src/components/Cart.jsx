import axios from 'axios';
import React,{useState, useEffect} from 'react'


function Cart() {

    const [arr, setArr] = useState([])

    // function Products() {
    //     axios.get("https://fakestoreapi.com/carts").then((res) => {
    //         setArr(res.data);
    //         console.log(res.data)

    //     }
    //     ).catch((err) => {
    //         console.log(err)
    //     })

    // }
    // useEffect(() => {
    //     Products()
    // }, [])



  return (

    <div>
        {/* <table>
<thead>
    <tr>
        <th>id</th>
        <th>user-id</th>
        <th>date</th>
        <th>
            <th>products-id</th>
            <th>products-quantity</th>
        </th>
    </tr>
</thead>

        {arr.map((pro)=>(

<tbody>
    <tr>
        <td>{pro.id}</td>
        <td>{pro.userId}</td>
        <td>{pro.date}</td>
        <td className='justify-center'>
                        <td>{pro.products[0].productId}</td>
                        <td>{pro.products[0].quantity}</td>
        </td>
        
    </tr>
</tbody> 


        )

    
    
    )}
          </table>*/}


          <h1  className='text-7xl  text-end mr-44'>Cart</h1>
    </div>
  )
}

export default Cart