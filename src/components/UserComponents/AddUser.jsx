import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "./Users";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const addUseronServer = async (name, email, phone) => {
  try {
    const { data } = await axios.post(baseUrl, { name, email, phone });
    return data;
  } catch (error) {
    console.log(error);
  }
};

function AddUser({ users, setUsers, show, setShow }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const data = {
    id: users.length + 1,
    name: name,
    email: email,
    phone: phone,
  };

  const addNewUser = async (name, email, phone, id) => {
    if (
      users.findIndex((user) => user.email === email) === -1 &&
      email !== "" &&
      name !== "" &&
      phone !== ""
    ) {
      const data = await addUseronServer(name, email, phone);
      setUsers([
        ...users,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          id: users.length,
        },
      ]);
      // console.log(data)
    }
  };

  function submitForm(e) {
    e.preventDefault();
    addNewUser(name, email, phone);
    // console.log(users)
    setShow(!show);
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form className="w-[50%] h-full flex flex-col ">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter phone no."
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4 mb-4"
          type="submit"
          onClick={submitForm}
        >
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default AddUser;
