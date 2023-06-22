import { Container, Row, Col} from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <Container>
      <Row className='mt-5'>
        <Col className='bg-dark text-white text-center py-5'>Copyright &copy; online order</Col>
      </Row>
    </Container>
    );
}

export default FooterComponent;