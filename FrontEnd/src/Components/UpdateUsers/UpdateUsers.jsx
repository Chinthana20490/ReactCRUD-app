import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUsers() {

    const [input, setinput] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:5000/users/${id}`)   
            .then((res) => res.data) 
            .then((data) => setinput(data.user))
        };
        fetchHandler();
    },[id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/users/${id}`,{
            name: String (input.name),
            gmail: String (input.gmail),
            age: Number (input.age),
            address: String (input.address)
        }) 
        .then((res) => res.data)
    };

    const handleChange = (e) => {
        setinput((prevState) => ({
          ...prevState, 
          [e.target.name] : e.target.value,
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        sendRequest().then(()=> history('/userdetails'));
      };
        

  return (
    <div>
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

export default UpdateUsers


