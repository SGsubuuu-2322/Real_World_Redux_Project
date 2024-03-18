// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "../Store/reducers/UserReducer";

// import { useState } from "react";

const Users = () => {
  // const [users] = useState();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  const handleDelete = (index) => {
    dispatch(userDelete(index));
  };
  return (
    <div className="container m-auto bg-red-200 p-10 mt-5">
      <h1 className="text-4xl text-center text-red-900">All Users:</h1>

      <ul>
        {users.map((user, index) => {
          return (
            <li key={index} className="text-xl text-red-700 text-center">
              {user.name}
              <span
                onClick={() => handleDelete(index)}
                className="text-red-900 font-semibold ml-2 cursor-pointer font-black"
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
