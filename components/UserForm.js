// import React, {useState} from 'react';
// import MyInput from "./UI/input/MyInput";
// import MyButton from "./UI/button/MyButton";

// const UserForm = ({create}) => {

//   const [user, setUser] = useState({first_name: '', email: ''})

//   function addUser(event){
//     event.preventDefault();
//     const new_user ={
//       ...user,
//       id: Date.now()
//     }
//     create(new_user);
//     setPost({first_name: '', email: ''})
//   }

//   return (
//     <form  className={'posts-container'}>
//       <MyInput
//         type="text"
//         placeholder="first name"
//         value={user.first_name}
//         onChange={e=> setUser({...user, first_name: e.target.value})}
//       />
//       <MyInput
//         type="text"
//         placeholder="email"
//         value={user.email}
//         onChange={e=> setUser({...user, email: e.target.value})}
//       />
//       <MyButton onClick={addUser}>add</MyButton>
//     </form>
//   );
// };

// export default UserForm;
