import React from "react";
import logo from "../assets/images/logo-full.svg";
import ticket from "../assets/images/pattern-ticket.svg";
import gh from "../assets/images/icon-github.svg";
import { useAppContext } from "../context/context";

const Ticket = () => {
  const { formData } = useAppContext();

  return (
    <div className="max-w-lg w-full bg-transparent flex flex-col items-center text-white mx-auto">
      <img src={logo} alt="Logo" />
      <h1 className="text-2xl sm:text-4xl font-bold text-center px-5 mt-5 leading-none">
        Congrats,
        <span className="bg-gradient-to-r from-[#f67464] via-[#f67464] to-white text-transparent bg-clip-text">
          {formData.fullName.split(" ")[0]}
        </span>{" "}
        <span className="bg-gradient-to-r from-[#f67464] via-[#f67464] to-white text-transparent bg-clip-text">
          {formData.fullName.split(" ")[1]}
        </span>
        ! Your ticket is ready.
      </h1>
      <p className="text-gray-400 text-center px-5 mt-3">
        We've emailed your ticket to{" "}
        <span className="text-[#f67464]">{formData.email}</span> and will send
        updates in the run to the event.
      </p>
      <div className="mt-14 relative size-fit">
        <img src={ticket} alt="" className="w-full max-w-[400px]" />
        <div className="absolute top-0 p-4 flex w-full h-full justify-between">
          <div className="mt-0 flex flex-col justify-between">
            <div>
              <img src={logo} alt="" className="w-40" />
              <span className="text-gray-400 text-sm ml-9">
                Jan 31, 2025 / Austin, TX
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={formData.avatar} 
                alt="User Avatar"
                className="size-10 rounded-md"
              />
              <div className="flex flex-col text-left">
                <h2 className="text-lg">{formData.fullName}</h2>
                <span className="text-gray-400 text-sm -mt-1 flex items-center gap-1">
                  <img src={gh} alt="" className="size-4" />
                  {formData.gitHubUsername}
                </span>
              </div>
            </div>
          </div>
          <span className="text-gray-300 rotate-90 items-center flex text-lg size-fit mt-auto mb-auto">
            #01609
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

