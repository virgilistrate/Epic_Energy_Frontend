import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const HomeComponent = () => {
  const [clients, setClients] = useState([])

  const runFetch = () => {
    fetch("http://localhost:3023/clients", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setClients(data.content)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }
  useEffect(() => {
    runFetch()
  }, [])

  return (
    <Container>
      <Row>
        {clients.map((client) => (
          <Col xs={12} md={4} lg={2} className="my-4">
            <Card className="h-100 my-3">
              <Card.Img variant="top" src={client.logo} />
              <Card.Body>
                <Card.Title>{client.ragioneSociale}</Card.Title>
                <Card.Text className="fs-6">
                  partitaIva:
                  <br />
                  {client.partitaIva}
                </Card.Text>
                <Card.Text>
                  fatturatoAnnuale: <br />
                  {client.fatturatoAnnuale} €
                </Card.Text>
                <Card.Text>
                  data di inserimento: <br />
                  {client.dataInserimento}
                </Card.Text>
                <Card.Text>
                  nome contatto: <br />
                  {client.nomeContatto}
                </Card.Text>
                <Card.Text>
                  cognome contatto: <br />
                  {client.cognomeContatto}
                </Card.Text>
                <Card.Text>
                  email contatto: <br />
                  {client.emailDiContatto}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeComponent
