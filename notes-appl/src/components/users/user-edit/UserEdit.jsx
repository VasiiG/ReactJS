// import React, { useState } from 'react';
// //import { getUserById }  from '../../core/api/users.api';


// export function UserEdit(props) {
// console.log(props);

// //const [EditedUser, setEditedUser] = useState({});

// // useEffect(() => {
// //     getUserById(p.computedMatch.params.id).then(currentUser) -> {
// //         console.log(currentUser);
// //         setEditedUser(currentUser.data);
// //     });
// // }//,{});



// const onInputChange = (event) => {
//     event.persist();
//     dispatch(editUser({ [event.target.name]: event.target.value }));

//     if (error) {
//         setError('');
//     }
// }

//     return (
//         <>
//         <div className="user-edit-wrapper">            
//             <form className="user-edit-form" onSubmit={onFormSubmit}>
//             { error && <span className="text-danger">{error}</span> }
//                 <div className="form-group">
//                     <label labelfor="name">Name: </label>
//                     <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} />
//                 </div>
//                 <div className="form-group">
//                     <label labelfor="age">Age: </label>
//                     <input type="number" name="age" id="age" min="0" max="100" className="form-control" onChange={onInputChange} />
//                 </div>
//                 <div className="form-group">
//                     <label labelfor="email">Email: </label>
//                     <input type="email" name="email" id="email" className="form-control" onChange={onInputChange}/>
//                 </div>
//                 <div className="form-group">
//                     <label labelfor="password">Password: </label>
//                     <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} />
//                 </div>
//                 <div className="form-group">
//                     <label labelfor="isActive">Is Active: </label>
//                     <input type="checkbox" name="isActive" id="isActive" className="form-control" onChange={onCheckBoxChange} />
//                 </div>
//                 <div className="form-group">
//                     <label labelfor="isAdmin">Is Admin: </label>
//                     <input type="checkbox" name="isAdmin" id="isAdmin" className="form-control" onChange={onCheckBoxChange}  />
//                 </div>
//                 <button className="btn btn-success">Save user</button>
//             </form>
//         </div>
//         </>
//     )
// }

