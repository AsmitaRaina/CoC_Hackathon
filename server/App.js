// import React, { Fragment, useState, useEffect } from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect
// } from "react-router-dom";


// //components

// import Login from "./Login";
// import Register from "./Register";
// import Dashboard from "./Dashboard";

// function App() {
//   const checkAuthenticated = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/auth/is-verify", {
//         method: "GET",
//         headers: { jwt_token: localStorage.token }
//       });
//       console.log(res);
//       const parseRes = await res.json();

//       parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     checkAuthenticated();
//   }, []);

//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const setAuth = status => {
//     setIsAuthenticated(status);
//   };

//   return (
//     <Fragment>
//       <Router>
//         <div className="container">
//           <Switch>
//             <Route
//               exact
//               path="/login"
//               render={props =>
//                 !isAuthenticated ? (
//                   <Login {...props} setAuth={setAuth} />
//                 ) : (
//                   <Redirect to="/dashboard" />
//                 )
//               }
//             />
//             <Route
//               exact
//               path="/register"
//               render={props =>
//                 !isAuthenticated ? (
//                   <Register {...props} setAuth={setAuth} />
//                 ) : (
//                   <Redirect to="/dashboard" />
//                 )
//               }
//             />
//             <Route
//               exact
//               path="/dashboard"
//               render={props =>
//                 isAuthenticated ? (
//                   <Dashboard {...props} setAuth={setAuth} />
//                 ) : (
//                   <Redirect to="/login" />
//                 )
//               }
//             />
//           </Switch>
//         </div>
//       </Router>
//     </Fragment>
//   );
// }

// export default App;