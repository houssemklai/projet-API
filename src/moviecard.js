import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Moviecard({user}) {
    return (
        <div >
<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h1>  {user.name}  </h1>
      
      <h3>   {user.username}  </h3>
    </Card.Text>
    <Link to ={`/details/${user.id}`}>
    <Button variant="primary">details</Button>
    </Link>
  </Card.Body>
</Card>

        </div>
    )
}

export default Moviecard;
