import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Profile() {
  const {id} = useParams();
  const [user, setUser] = useState({})
  useEffect(() => {
  axios
  .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
  .then((res)=> setUser(res.data[0]))
  .catch((err) => console.log(err));});  
  
  return (
    <div>
      <h2>Profile</h2>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAbdxO5KlG7ClKFO0oCNNefItucipE9Siz-FKYzTqoevtbdFDjUzGNSnwIyKZuX-OZJw&usqp=CAU" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
        {user.username}
        {user.email}
        </Card.Text>
        <Button variant="primary">
            <Link to={"/users"} style={{color:"white"}}> Go back </Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}




