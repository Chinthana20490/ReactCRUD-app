import React from 'react'

function Users(props) {

    if (!props.user) {
        return <div>No user details available</div>;
    } 

    const {_id, name, gmail, age, address} = props.user;

  return (
    <div>
      <h1>User details..</h1>
       <h2>Id:{_id}</h2>
       <h2>Name:{name}</h2>
       <h2>Gmail:{gmail}</h2>
       <h2>Age:{age}</h2>
       <h2>Address:{address}</h2><br /><br />
    </div>
  )
}

export default Users
