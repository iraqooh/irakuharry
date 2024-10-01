import React from 'react'
import { Card } from 'react-bootstrap'

function CardComponent({image, title, link, linkText}) {
  return (
    <Card className="bg-secondary text-light text-center h-100">
        <Card.Body>
            <img src={`images/${image}.png`} alt={`${image}`} className="img-thumbnail rounded-circle mb-3" />
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            <a href={link} className="text-decoration-none text-reset">{linkText}</a>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CardComponent