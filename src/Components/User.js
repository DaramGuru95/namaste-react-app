import React, { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState("");

  useEffect(() => {
    fetchData();
  }, [count]);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/DaramGuru95");
    const json = await data.json();
    setCount(json);
    // console.log(json);
  };

  return (
    <div className="user-card">
      <div>
        <h1>Count:{json?.name}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <h3>Name: {name}</h3>
      <h4>Location: {json?.location}</h4>
      <h5>Contact: xyz </h5>
      <h4>GitHub Name:{count.name}</h4>
    </div>
  );
};

export default User;
