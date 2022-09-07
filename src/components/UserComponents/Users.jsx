import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import AddUser from "./AddUser";
import UserTable from "./UserTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="flex ">
      <Sidebar />

      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default Users;
