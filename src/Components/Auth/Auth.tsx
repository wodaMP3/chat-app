// import { RootState } from "@reduxjs/toolkit/query";
// import React, { useState } from "react";
// import { auth } from '../../firebase';
// import { useDispatch, useSelector } from "react-redux"
// import { loginFailure, loginStart, loginSuccess, logout } from "../store/authSlice";
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { FirebaseError } from "firebase/app";


// const Login: React.FC = () => {
//     const dispatch = useDispatch();
//     const { user, loading, error } = useSelector((state: RootState) => state.auth);  

//     const [email, setEmail] = useState('');
//     const [passwords, setPasswords] = useState('');

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();
//         dispatch(loginStart());

//     try {
//         const userCredit = await signInWithEmailAndPassword(auth, email, passwords);
//         dispatch(loginSuccess(userCredit.user));
        
//     } catch (error) {
//         const firebaseError = error as FirebaseError;
//         dispatch(loginFailure(firebaseError.message))
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     dispatch(logout());
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome, {user.email}</h1>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <form onSubmit={handleLogin}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               value={passwords}
//               onChange={(e) => setPasswords(e.target.value)}
//             />
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//           {error && <p className="bg-blue-500">{error}</p>}
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;


