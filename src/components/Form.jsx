import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";




const LoginForm = () => {
    

    const [data, setdata] = useState([]);
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Gen, setGen] = useState("male");
    const [id, setid] = useState(null);




    const getdata = () => {
        axios.get("http://localhost:3000/data").then((res) => {
            console.log(res.data)
            setdata(res.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {

        getdata();
    }, []);

    function submit() {
        let obj = {
            name: Name,
            age: Age,
            gender: Gen
        }

        axios.post("http://localhost:3000/data", obj).then((res) => {
            console.log(res);
            getdata()
        }
        ).catch((err) => {
            console.log(err)
        })
    }
    function dlt(id) {
        console.log(id)
        axios.delete(`http://localhost:3000/data/${id}`).then((res) => {
            console.log(res);
            getdata()
        }).catch((err) => {
            console.log(err)
        })

    }
    function edit(ele) {
        console.log(ele);
        setName(ele.name);
        setAge(ele.age);
        setGen(ele.gender);
        setid(ele.id)
    }

    function Update() {
        let obj = {
            name: Name,
            age: Age,
            gender: Gen
        }


        axios.put("http://localhost:3000/data/" + id, obj).then((res) => {
            console.log(res);
            setid(null);
            setName("");
            setAge("");
            setGen("male");
            getdata();
        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div  >
                
            {/* <h4>{Numb}</h4> */}
            <table >
                <thead className="border-2">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele, idx) => (
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.gender}</td>
                            <td><button onClick={() => dlt(ele.id)}>Delete</button>
                                <button onClick={() => edit(ele)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

                    <div className="mt-4" >

            <form >
                <input value={Name}   className= "" type="text" placeholder="Name" onInput={(e) => setName(e.target.value)} className="border-black border-2 "/><br />
                        <input value={Age} type="number" placeholder="Age" onInput={(e) => setAge(e.target.value)} className="border-black border-2 my-2" /><br />
                        <select value={Gen} onChange={(e) => setGen(e.target.value)} className="border-black border-2 ">
                    <option value="male" > Male</option>
                    <option value="female">Female</option>
                </select>

            </form>

                        {id === null ? <button className="border-black border-2 mt-2" onClick={submit}>Submit</button> : <button onClick={Update} className="border-black border-2 mt-2">update</button>}
                        </div>
                    
        </div>
            </div>
        </>
    )

}

export default LoginForm