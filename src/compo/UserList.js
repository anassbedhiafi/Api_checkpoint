import React, { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import axios from "axios";
import "./User.css";
const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <div className="card">
      {data.map((details) => (
        <UserCard key={details.id} details={details} />
      ))}
    </div>
  );
};
export default UserList;
