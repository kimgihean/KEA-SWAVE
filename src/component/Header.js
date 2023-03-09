import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function App() {
  const teammates = [
    { number: 1, name: "강준희" },
    { number: 2, name: "김기현" },
    { number: 3, name: "김성국" },
    { number: 4, name: "이승섭" },
    { number: 5, name: "전광훈" },
    { number: 6, name: "함건욱" },
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" style={{
        marginLeft: "2%"
      }} id="HeaderFont">SWAVE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/vision">Vision</Nav.Link>
          <Nav.Link href="/contents">Contents</Nav.Link>
          <NavDropdown title="Teammates" id="basic-nav-dropdown">
            <NavDropdown.Item href="/teammate">Teammates</NavDropdown.Item>
            <NavDropdown.Divider />
            {teammates.map((member) => {
              return (
                <NavDropdown.Item href={`/teammate/${member.number}`}>{member.name}</NavDropdown.Item>
              )
            })}
          </NavDropdown>
          <Nav.Link href="/calendar">Calendar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}