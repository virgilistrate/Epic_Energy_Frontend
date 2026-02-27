import { Col, Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"

const LoginComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginAcccess = (e) => {
    e.preventDefault()
    console.log("fetch partita")

    fetch("http://localhost:3023/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.accessToken)
        console.log(data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center">
        <Col md={6} className="my-5 border rounded border-primary">
          <Form className="p-5" onSubmit={loginAcccess}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComponent
