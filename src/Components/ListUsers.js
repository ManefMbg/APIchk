import React, {useEffect, useState} from 'react'
import User from './User'
import axios from 'axios'


const ListUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
    }, [])
    
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {users.map((user, key) => (
        <User user={user} key={user.id}/>
        ))}
    </div>
  )
}

export default ListUsers