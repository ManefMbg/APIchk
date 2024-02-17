import React from 'react'
import { Button,Card,ListGroup } from 'react-bootstrap'

const User = ({user}) => {
  return (  
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAbdxO5KlG7ClKFO0oCNNefItucipE9Siz-FKYzTqoevtbdFDjUzGNSnwIyKZuX-OZJw&usqp=CAU" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.address.city}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.phone}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button>Profile</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default User
