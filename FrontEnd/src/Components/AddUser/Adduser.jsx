import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adduser(props) { 

  const history = useNavigate();

  const [input, setInput] = useState({
      id:"",
      name:"",
      gmail:"",
      age:"",
      address:""
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState, 
      [e.target.name] : e.target.value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(()=> history('/userdetails'))
  }

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      name: String (input.name),
      gmail: String (input.gmail),
      age: Number (input.age),
      address: String (input.address)
      
    }).then (res => res.data);
  }
  
  return (
    <div> 
      <Navbar/>
     <form onSubmit={handleSubmit}>
      <label>Name </label><br />
      <input type="text" name='name' value={input.name} onChange={handleChange} required/><br /><br />

      <label>Gmail</label><br />
      <input type="text" name='gmail' value={input.gmail} onChange={handleChange} required/><br /><br />
     
      <label>Age</label><br />
      <input type="text" name='age' value={input.age} onChange={handleChange} required/><br /><br />

      <label>Address</label><br />
      <input type="text" name='address' value={input.address} onChange={handleChange} required/><br /><br />

      <button>submit</button>
     </form>

    </div>
  )
}
export default Adduser;