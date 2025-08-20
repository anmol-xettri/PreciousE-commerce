import React from "react";
import { useNavigate } from "react-router";
import deleteUserApi from "../../Api/User/deleteUserApi";

const DeleteAccount = () => {
  const handelLogout = () => {
    if (confirm("Are You sure to logout")) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  const handelDelete = () => {
    if (confirm("Are you sure you want to delete account")) {
      deleteUserApi();
    }
  };
  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">
        <div className="text-gray-700 font-bold text-xl italic ">
          Delete Account
        </div>
        <div
          className="w-fit border border-red-300 bg-red-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-red-300 hover:shadow-xl hover:shadow-red-700/50 hover:border-red-700 hover:bg-red-700 cursor-pointer "
          onClick={() => handelDelete()}
        >
          Delete Account
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">
        <div className="text-gray-700 font-bold text-xl italic ">Log Out</div>
        <div
          className="w-fit border border-gray-300 bg-gray-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-gray-300 hover:shadow-xl hover:shadow-gray-700/50 hover:border-gray-700 hover:bg-gray-700 cursor-pointer "
          onClick={() => handelLogout()}
        >
          logout
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
