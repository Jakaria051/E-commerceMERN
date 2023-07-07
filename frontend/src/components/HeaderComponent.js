import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">Online Order</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <InputGroup>
                <DropdownButton id="dropdown-item-button" title="All">
                  <Dropdown.Item as="button">Electronics</Dropdown.Item>
                  <Dropdown.Item as="button">Cars</Dropdown.Item>
                  <Dropdown.Item as="button">Sport</Dropdown.Item>
                </DropdownButton>

                <Form.Control type="text" placeholder="Search..." />

                <Button variant="warning"><i className="bi bi-search"></i>
</Button>
              </InputGroup>
            </Nav>
            </Nav>
            <Nav>
            
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title="John Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to="/login">
            <Nav.Link>
                Login
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
            <Nav.Link>
                Register
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link >
            
              <i className="bi bi-cart4"></i>
              <Badge bg="danger">2</Badge>
              <span className="ms-1">Cart</span>
             
            </Nav.Link>
            </LinkContainer>
                  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
