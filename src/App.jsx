import Register from './components/Register'
import { supabase } from './createClient';
import React, { useEffect, useState } from 'react';

const App = () => {

  const [users,setUsers] = useState([]);
  

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const {data} = await supabase
      .from('users')
      .select('*')
      setUsers(data)
      console.log(data)
  }

  return (
    <>
      <Register/>
    </>
  )
}

export default App;
