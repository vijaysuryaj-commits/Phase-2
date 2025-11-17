// import { useEffect } from "react"
// import { connect } from "react-redux"
// import { fetchUsers } from "../redux"


// function UserContainer({ userData, fetchUsers }) {
//     useEffect(() => {
//         fetchUsers()
//     }, [])

//     return userData.loading ? (
//         <div>
//             <h2> Loading</h2>
//         </div>
//     ) : userData.error ? (
//         <h2>Error while fetching the data: {userData.error}</h2>
//     ) : (
//         <div>
//             <h2>User list</h2>
//             <div>
//                 {
//                     userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
//                 }
//             </div>
//         </div>
//     )
// }

// const mapStateToProps = ((state) => {
//     return {
//         userData: state
//     }
// })

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

// src/UserContainer.tsx

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux-toolkit/userSlice";

const UserContainer = () => {
  const dispatch = useDispatch();

  const { loading, users, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.length > 0 &&
        users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default UserContainer;
