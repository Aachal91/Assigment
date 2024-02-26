
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCard from './Componenet/NewCard'
import { Grid } from '@mantine/core';

function App() {
  const [users, setUsers] = useState([]);
  const [star, setStar] = useState(false);
  

  const handleDelete = (id) => {
    const newUpdate = users.filter(update => update.id !== id);
    setUsers(newUpdate);
  }

  const handleFollow = (id) => {
    setUsers(users.map(user => user.id === id ? {...
    user, star:!user.star} : user))
    console.log(users);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("https://jsonplaceholder.typicode.com/users")
          .then((res) => setUsers(res.data));
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);




  return (
    <>

      <Grid justify="flex-start" align="flex-start">
        {
          users.map(user => {
            return (
              <Grid.Col span={3}>
                <NewCard
                  data={user}
                  star={star}
                  handleDelete={handleDelete}
                  handleFollow={handleFollow} />
              </Grid.Col>
            )
          })
        }
      </Grid>




    </>
  );
}

export default App;
