// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "./Store/reducers/UserReducer";

// import { useState } from "react";

const App = () => {
  // const [users] = useState();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  const handleDelete = (id) => {
    dispatch(userDelete(id));
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
                onClick={() => handleDelete(user.id)}
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

export default App;
