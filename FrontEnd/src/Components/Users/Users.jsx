import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Users(props) {

    if (!props.user) {
        return <div>No user details available</div>;
    } 

    const {_id, name, gmail, age, address} = props.user;

    //delete users part
    const history = useNavigate();
    const deletehandler = async () => {
      await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(res => res.data)
      .then(() => history('/'))
      .then(() => history('/userdetails')) //after user deleted, page should navigate to userdelatils page
    };


  return (
    <div>
      <h1>User details..</h1>
       <h2>Id:{_id}</h2>
       <h2>Name:{name}</h2>
       <h2>Gmail:{gmail}</h2>
       <h2>Age:{age}</h2>
       <h2>Address:{address}</h2>
       <button type="button"><Link to = {`/userdetails/${_id}`}>Update</Link></button>
       <button onClick={deletehandler}>Delete</button>
       <br /><br />
    </div>
  )
}

export default Users
