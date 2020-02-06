// import React, { useState } from "react";

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, max: 25, min: 3})} />
      <input type="text" placeholder="Password" name="Password" ref={register({required: true, max: 25, min: 8})} />

      <input type="submit" />
    </form>
  );
}


// const Login = props => {

//     const [inputValue, setInput] = useState({username:"", password: ""});

//     const changeHandler = event => {
//         setInput({...inputValue, [event.target.name]: event.target.value});
//     };

//     return(
//         <div className="login">
            
//             <form>
//                 <label for="username">
//                 Username
//                 </label>
//                 <input 
//                     type="text"
//                     name="username"
//                     value={inputValue.username}
//                     onChange={changeHandler} 
//                 />
//             </form>
//             <form>
//                 <label for="password">
//                 Password
//                 </label>
//                 <input 
//                     type="text"
//                     name="password"
//                     value={inputValue.password}
//                     onChange={changeHandler} 
//                 />
//             </form>
//             <div>
//                 <button className="register">
//                     Register
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default Login;