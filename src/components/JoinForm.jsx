// import React, { useState } from 'react';
// import { useChat } from '../context/ChatContext';

// const JoinForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { handleUserInfo } = useChat(); // Get function from context

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && email && password) {
//       handleUserInfo(username, email, password); // Call context function
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="join-form">
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//         required
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Join</button>
//     </form>
//   );
// };

// export default JoinForm;
