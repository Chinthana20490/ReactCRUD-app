import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Users from "../Users/Users";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/users";

// Fetch data from the API
const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { users: [] }; // Return empty users on error
  }
};

function Userdetails() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => {
      setAllUsers(data.users || []); // Save all users
      setUsers(data.users || []); // Initially show all users
    });
  }, []);

  // Search functionality
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setUsers(allUsers); // Reset to all users if search query is empty
      setNoResults(false);
      return;
    }

    const filteredUsers = allUsers.filter((user) =>
      Object.values(user).some((field) =>
        field?.toString().toLowerCase().includes(query)
      )
    );

    setUsers(filteredUsers);
    setNoResults(filteredUsers.length === 0);
  };

  // PDF Download
  const ComponentsRef = useRef();
  const handlerPrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "User Details Report",
    onAfterPrint: () => alert("User Report Successfully Downloaded!"),
  });

  // send whatsapp message 
  const handleSendReport = () => {
    const phoneNumber = "+94712396871"; // Replace with the recipient's phone number
    const message = "selected user details with report"; // Replace with your message
    const encodedMessage = encodeURIComponent(message); // Ensure the message is URL-safe
    
    const WhatsAppUrl = `https://wa.me/${phoneNumber}? text=${encodedMessage}`;
    window.open(WhatsAppUrl, "_blank");
  }


  return (
    <div>
      <Navbar />
      <h1><b>User Details Page</b></h1>

      {/* Search Input */}
      <div>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search here..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Download Button */}
      <button onClick={handlerPrint}>Download User Details</button><br /><br />

      {/* message send Button */}
      <button onClick={handleSendReport}>Send Whatsapp Message</button><br />


      {/* Search Results */}
      {noResults ? (
        <div>
          <h2>No results found.</h2>
        </div>
      ) : (
        <div ref={ComponentsRef}>
          {users.map((user, i) => (
            <div key={i}>
              <Users user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Userdetails;









// import React, { useEffect, useRef, useState } from 'react'
// import Navbar from '../Navbar/Navbar';
// import axios from 'axios'
// import Users from '../Users/Users'
// import {useReactToPrint} from 'react-to-print'


// //url of GET method in postman 
// const URL = "http://localhost:5000/users";

// //take user details from the database and assign it to variable
// const fectchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// }

// function Userdetails() {

//   const [users, setUsers] = useState();
//   useEffect(() => {
//     fectchHandler().then((data) => setUsers(data.users))
//   },[])


//   //user details download as a pdf file part
//   const ComponentsRef = useRef();
//   const handlerPrint = useReactToPrint({
//     content: () => ComponentsRef.current,
//     DocumentTitle: "User Details Report",
//     onAfterPrint: () => alert("User Report Successfully Downloaded !!"),
//   });

//   //search function part
//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);

//   // const handleSearch = () => {
//   //   fetchHandler().then((data) => {
//   //     const filteredUsers = data.users.filter((user) => 
//   //     Object.values(user).some((field) =>
//   //     field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//   //   ))
//   //   setUsers(filteredUsers);
//   //   setNoResults(filteredUsers.length === 0);
//   //   })    
//   // }
//   const handleSearch = () => {
//     fetchHandler()
//       .then((data) => {
//         const filteredUsers = data.users.filter((user) =>
//           Object.values(user).some((field) =>
//             field?.toString().toLowerCase().includes(searchQuery.toLowerCase())
//           )
//         );
//         setUsers(filteredUsers);
//         setNoResults(filteredUsers.length === 0);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   };
  

//   return (
//     <div>
//        <Navbar/>
//       <h1><b>User details page..</b></h1>
//       <input onChange={(e) => setSearchQuery(e.target.value)} type="text" name='search' placeholder='search here..' />
//       <button onClick={handleSearch}>Search</button>

//       <button onClick={handlerPrint}>Download User Details</button>

//       {noResults? (
//         <div>
//           <h1>no result found..</h1>
//         </div>
//       ) : (

//       <div ref={ComponentsRef}> 
//         {users && users.map((user, i) => (
//           <div key={i}>
//             <Users user={user}/>
            
//           </div>          
//         ))}        
//       </div>
//       )}
      
//     </div>
//   )
// }

// export default Userdetails

