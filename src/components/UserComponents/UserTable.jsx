import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";

const UserTable = ({ users, setUsers }) => {
  function deleteUser(id) {
    const newUsers = users.filter((item) => item.id !== id);
    setUsers(newUsers);
  }

  const [show, setShow] = useState(false);

  return (
    <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 ">
      {show ? (
        <AddUser
          users={users}
          setUsers={setUsers}
          show={show}
          setShow={setShow}
        />
      ) : (
        <button
          className="p-3 bg-blue-500 text-white mb-5"
          onClick={() => {
            setShow(true);
          }}
        >
          Add User
        </button>
      )}

      <h1 className="text-3xl font-bold">User Data</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-lg text-white px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-lg text-white px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-lg text-white px-6 py-4"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-lg text-white px-6 py-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="border-black border-b-2">
                  {users.map((data, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b-2 border-black"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        {index + 1}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.name}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.email}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.phone}
                      </td>
                      <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                        <button
                          onClick={() => deleteUser(data.id)}
                          className="bg-red-600 text-white px-6 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
