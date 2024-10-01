import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function GalleryPage() {
  // Example image data with varying sizes and captions
  const images = [
    { src: 'images/cook.png', caption: 'Photo 1', gridClass: 'col-lg-5 col-md-6' },
    { src: 'images/guitar.png', caption: 'Photo 2', gridClass: 'col-lg-7 col-md-12' },
    { src: 'images/explore.png', caption: 'Photo 3', gridClass: 'col-lg-3 col-md-6' },
    { src: 'images/friends.png', caption: 'Photo 4', gridClass: 'col-lg-6 col-md-6' },
    { src: 'images/music.png', caption: 'Photo 5', gridClass: 'col-lg-3 col-md-12' },
    { src: 'images/village.png', caption: 'Photo 6', gridClass: 'col-lg-4 col-md-6' },
    { src: 'images/bridge.png', caption: 'Photo 7', gridClass: 'col-lg-8 col-md-12' },
    { src: 'images/volleyball.png', caption: 'Photo 8', gridClass: 'col-lg-4 col-md-6' },
  ];

  return (
    <Container className="p-5 gallery-background">
      <h2 className="text-center mb-4 text-light">Gallery</h2>
      <Row className="g-3">
        {images.map((image, index) => (
          <Col key={index} className={image.gridClass}>
            <a href={image.src} target='_blank' rel="noreferrer">
              <Card className="">
                <Card.Img variant="top" src={image.src} alt={image.caption} />
                <Card.Body>
                  <Card.Text className="text-center">
                    {image.caption}
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GalleryPage;