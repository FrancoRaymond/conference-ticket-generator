import React, { useState } from 'react';
import logo from '../assets/images/logo-full.svg';
import DragandDropField from './DragandDropField';

const Form = () => {
  const [formErrors, setFormErrors] = useState({
    avatar: false,
    fullName: false,
    email: false,
    gitHubUsername: false,
  });

  const [formData, setFormData] = useState({
    avatar: null,
    fullName: '',
    email: '',
    gitHubUsername: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic here (example: set errors)
    let errors = {};
    if (!formData.fullName) errors.fullName = true;
    if (!emailRegex.test(formData.email)) errors.email = true;
    if (!formData.gitHubUsername) errors.gitHubUsername = true;

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      // Submit form logic here
    }
  };

  return (
    <div className="bg-transparent flex flex-col items-center text-white">
      <img src={logo} alt="Logo" />
      <h1 className="text-2xl font-semibold text-center px-5 mt-5 leading-none">
        Your journey to coding conf {new Date().getFullYear()} starts here!
      </h1>
      <p className="text-gray-400 text-center px-5 mt-3">
        Secure your spot at next year's biggest coding conference
      </p>

      <form onSubmit={handleSubmit} className="py-5 flex flex-col gap-5 z-20 max-w-lg">
        <DragandDropField />

        <label htmlFor="fullName">
          Full Name <br />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 w-full text-white bg-white outline-none bg-opacity-15 py-2 px-3 border border-gray-600 rounded-md"
          />
          {formErrors.fullName && (
            <span className="text-red-500 text-sm">Please enter your full name</span>
          )}
        </label>

        <label htmlFor="email">
          Email Address <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="mt-1 text-white outline-none w-full bg-white bg-opacity-15 py-2 px-3 border border-gray-600 rounded-md"
          />
          {formErrors.email && (
            <span className="text-red-500 text-sm">Please enter a valid email address</span>
          )}
        </label>

        <label htmlFor="gitHubUsername">
          GitHub Username <br />
          <input
            type="text"
            name="gitHubUsername"
            value={formData.gitHubUsername}
            onChange={handleChange}
            placeholder="@yourusername"
            className="mt-1 text-white outline-none w-full bg-white bg-opacity-15 py-2 px-3 border border-gray-600 rounded-md"
          />
          {formErrors.gitHubUsername && (
            <span className="text-red-500 text-sm">Please enter your GitHub Username</span>
          )}
        </label>

        <button type="submit" className="bg-[#f67464] rounded-md text-blue-950 font-semibold py-2">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;

