// import React from 'react'

// import { useState } from "react";

const App = () => {
  // const [users] = useState();
  return (
    <div className="container m-auto bg-red-200 p-10 mt-5">
      <h1 className="text-4xl text-center text-red-900">All Users:</h1>

      <ul>
        {users.map((user, index) => {
          return (
            <li key={index} className="text-xl text-red-700 text-center">
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
