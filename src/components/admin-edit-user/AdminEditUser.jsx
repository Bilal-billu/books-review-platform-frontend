import axios from 'axios';
import React, { useState } from 'react';

const EditUserForm = ({ user, onSubmit }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [role, setRole] = useState(user.role || 'user');
  const [acceptedTerms, setAcceptedTerms] = useState(true); // Always true for edit
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }

    
    try
    {
      const updatedUser = {
       ...user,
       name,
       email,
       role,
       ...(password ? { password } : {}),
      };
      const url = `/api/user/update-via-admin/${user._id}`;
      const response = await axios.patch(url, updatedUser,{
        withCredentials: true
          })
      console.log(response);
      onSubmit();
    }
    catch(e)
    {
      console.log(e)
    }

    // console.log(updatedUser)

    // onSubmit(updatedUser);
  };

  const requiredFields = name && email;

  return (
    <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
    <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 text-theme-text-primary">
      <div className="p-6 space-y-4 md:space-y-4 sm:p-4">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Edit User
        </h1>
        <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              className="text-theme-text-primary border border-theme-primary text-sm rounded-lg focus:border-theme-primary-hovered block w-full p-2 focus:outline-none"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="text-theme-text-primary border border-theme-primary text-sm rounded-lg focus:border-theme-primary-hovered block w-full p-2 focus:outline-none"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="role" className="block mb-2 text-sm font-medium">Role</label>
            <select
              id="role"
              className="text-theme-text-primary border border-theme-primary text-sm rounded-lg focus:border-theme-primary-hovered block w-full p-2 focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">New Password (optional)</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="text-theme-text-primary border border-theme-primary text-sm rounded-lg focus:border-theme-primary-hovered block w-full p-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              className="text-theme-text-primary border border-theme-primary text-sm rounded-lg focus:border-theme-primary-hovered block w-full p-2 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={!requiredFields}
            className="w-full border border-theme-primary text-theme-text-secondary bg-theme-primary hover:bg-theme-primary-hovered disabled:bg-theme-foreground disabled:text-theme-primary disabled:hover:bg-theme-foreground focus:ring-2 focus:outline-none focus:ring-theme-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default EditUserForm;
