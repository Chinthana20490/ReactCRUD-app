import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from 'axios'
import Users from '../Users/Users'

//url of GET method in postman 
const URL = "http://localhost:5000/users";

//take user details from the database and assign it to variable
const fectchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Userdetails() {

  const [users, setUsers] = useState();

  useEffect(() => {
    fectchHandler().then((data) => setUsers(data.users))
  },[])

  return (
    <div>
       <Navbar/>
      <h1><b>User details page..</b></h1>
      <div>
        {users && users.map((user, i) => (
          <div key={i}>
            <Users user={user}/>
            
          </div>          
        ))}
        
      </div>
      
    </div>
  )
}

export default Userdetails
