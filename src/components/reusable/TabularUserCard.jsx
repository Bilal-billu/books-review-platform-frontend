import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import AdminEditUser from '../admin-edit-user/AdminEditUser';
import ModalDialog from './Dialog';
import axios from 'axios';
import { useUserAuth } from '../../context/AuthContext';

const TabularUserCard = ({ user, dataUpdated }) => {
  const [openUser, setOpenUser] = useState(false);

  const openAUser = () => setOpenUser(true);
  const closeAUser = () => setOpenUser(false);

  const admin = useUserAuth();

  const deleteUser = async () => {
    try
    {
      if(user._id === admin.user._id )
      {
        console.log("Deleting yourself is not allowed... ;(")
        return;
      }
      const url = `/api/user/${user._id}`;
      const response = await axios.delete(url);
      console.log(response)
    }
    catch(e)
    {
      console.log(e)
    }
  }

  const { name, email, role, createdAt } = user;

  return (
    <div
      className="w-full p-4 mb-4 border rounded shadow hover:shadow-md text-left even:bg-theme-background odd:bg-theme-foreground even:text-theme-text-unrelated-dark odd:text-theme-text-primary hover:text-theme-text-secondary hover:bg-theme-primary transition-colors duration-200 cursor-pointer group"
      onClick={openAUser}
    >
      <div className="grid grid-cols-9 gap-4 items-center">
        <div className="truncate text-sm font-medium col-span-2" title={name}>
          {name}
        </div>
        <div className="truncate text-sm font-semibold col-span-3" title={email}>
          {email}
        </div>
        <div className="truncate text-sm col-span-2" title={role}>
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </div>
        <div className="truncate text-sm" title={new Date(createdAt).toLocaleString()}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        <div className="col-span-1">
          <button
            className="text-theme-primary border border-theme-primary group-hover:text-theme-text-secondary group-hover:border-theme-text-secondary rounded-full p-1.5"
            onClick={(e) => {
              e.stopPropagation(); // prevent modal opening
              deleteUser();
            }}
          >
            <Icon icon="fluent:delete-48-regular" className="w-full h-full" />
          </button>
        </div>
      </div>

      <ModalDialog
        isOpen={openUser}
        title="Edit User"
        close={closeAUser}
        
      >
        <AdminEditUser
          user={user}
          onSubmit={() => {
            closeAUser();
            dataUpdated();
          }}
        />
      </ModalDialog>
    </div>
  );
};

export default TabularUserCard;
