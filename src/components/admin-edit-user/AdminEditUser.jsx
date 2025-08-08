import React, { useState } from 'react';

const EditUserForm = ({ user, onSubmit }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [role, setRole] = useState(user.role || 'user');
  const [acceptedTerms, setAcceptedTerms] = useState(true); // Always true for edit
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const updatedUser = {
      ...user,
      name,
      email,
      role,
      ...(password ? { password } : {}),
    };

    onSubmit(updatedUser);
  };

  const requiredFields = name && email;

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto lg:py-0">
        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 text-background-muted">
          <div className="p-6 space-y-4 sm:p-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Edit User
            </h1>
            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="bg-foreground-soft text-background-muted border border-gray-300 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
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
                  className="bg-foreground-soft text-background-muted border border-gray-300 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
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
                  className="bg-foreground-soft text-background-muted border border-gray-300 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">New Password (optional)</label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-foreground-soft text-background-muted border border-gray-300 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
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
                  className="bg-foreground-soft text-background-muted border border-gray-300 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={!requiredFields}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
