import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import LedControl from './components/LedControl';
import SwitchStatus from './components/SwitchStatus';

function App() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">IoT 제어 시스템</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/led">LED 제어</Nav.Link>
                            <Nav.Link as={Link} to="/switch">스위치 상태</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                    <Route path="/led" element={<LedControl />} />
                    <Route path="/switch" element={<SwitchStatus />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
