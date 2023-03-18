import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-secondary text-light">
      <Container>
        <Row className='p-4'>
          <Col md={4} >
            <h4>Tentang Kami</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit elit. Nullam in tortor vel ante varius viverra eu eget urna. Proin vel ipsum sit amet tellus ornare sagittis ac vel enim.</p>
          </Col>
          <Col md={4}>
            <h4>Link</h4>
            <ul className="list-unstyled">
              <li><a href="#"className='text-dark stretched-link'>Beranda</a></li>
              <li><a href="#"className='text-dark stretched-link'>Tentang Kami</a></li>
              <li><a href="#"className='text-dark stretched-link'>Kontak Kami</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Ikuti Kami</h4>
            <ul className="list-unstyled">
              <li><a href="#" className='text-warning stretched-link'><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" className='text-warning stretched-link'><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className='text-warning stretched-link'><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
