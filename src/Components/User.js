import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h5>Contact: xyz </h5>
    </div>
  );
};

export default User;
