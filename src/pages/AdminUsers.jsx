import {useState, useEffect} from 'react';
import axios from 'axios';
import ModalDialog from '../components/reusable/Dialog';
import TabularUserCard from '../components/reusable/TabularUserCard';
import LoadingSkeleton from '../components/reusable/loading/LoadingSkeleton';
import { Loading } from '../components/reusable/loading/Loading';
import Error from '../components/reusable/error/Error';

const AdminUsers = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)


  const getUsers = async () => {
    // Replace with actual API call
    // Example:
    try
    {
        const url = `/api/user/`;
        const response = await axios.get(url);
        // console.log("All users", response)
        setAllUsers(response.data.data);
    }
    catch(e)
    {
        console.log(e)
        setError(true);
    }
    finally
    {
      setLoading(false);
    }

    // Temporary dummy data
    // setAllUsers([
    //   { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    //   { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    // ]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if(loading)
  {
    return (
      <LoadingSkeleton>
        <Loading />
      </LoadingSkeleton>
    )
  }

  if(error)
  {
    return (
      <LoadingSkeleton>
        <Error />
      </LoadingSkeleton>
    )
  }

  return (
    <div>
      <div>
        <div className="w-full flex justify-end p-4">
          <button 
            className="px-4 py-2 rounded border border-theme-primary text-theme-text-secondary bg-theme-primary hover:bg-theme-primary-hovered disabled:bg-theme-foreground disabled:text-theme-primary disabled:hover:bg-theme-foreground "
            onClick={() => setShowAddUser(true)}
          >
            Add User
          </button>
        </div>

        <ModalDialog
          isOpen={showAddUser}
          close={() => setShowAddUser(false)}
          title={"Add new user"}
        >
          {/* <AddUser /> */}
        </ModalDialog>

        <div>
          <div className="w-full">
            {allUsers && allUsers.length > 0 &&
              allUsers.map((item, i) => (
                <TabularUserCard user={item} key={i} dataUpdated={getUsers} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminUsers


