import "./style.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="dark-mode">
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Card style={{ width: "30rem", backgroundColor: "#404040" }}>
            <Card.Body>
              <center>
                <Card.Title>
                  <div className="text-container">
                    <p style={{ fontSize: "24px" }}>
                      <b>Kevin Long Nguyen</b>
                    </p>
                  </div>
                </Card.Title>
                <Card.Subtitle>
                  <div className="text-container">
                    <p style={{ fontSize: "13px" }}>
                      Computer Science Graduate | RMIT University
                    </p>
                  </div>
                </Card.Subtitle>
              </center>
              <Card.Text>
                <div>
                  <a href="mailto: kevinnguyen3047@gmail.com" target="_blank">
                    <Button
                      variant="light"
                      style={{
                        width: "160px",
                        float: "left",
                        marginLeft: "50px",
                      }}
                    >
                      <i
                        class="bi bi-envelope"
                        style={{ marginRight: "5px" }}
                      ></i>
                      Email
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevin-nguyen-2270331ab/"
                    target="_blank"
                  >
                    <Button
                      variant="primary"
                      style={{
                        width: "160px",
                        float: "right",
                        marginRight: "50px",
                      }}
                    >
                      <i
                        class="bi bi-linkedin"
                        style={{ marginRight: "5px" }}
                      ></i>
                      LinkedIn
                    </Button>
                  </a>
                </div>
                <br />
                <br />
                <hr style={{ color: "#FFFF" }} />
                <div className="text-container">
                  <b>
                    <p style={{ fontSize: "15px" }}>Coursework / Projects</p>
                  </b>
                  <p style={{ fontSize: "12px" }}>
                    Programming Project 1 | Developed “VVallet” in a team
                    setting, a PayPal clone, using React, Python and AWS
                    services, also utilized scrum methodology.
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Interactive 3D Graphics and Animation | Developed “Asteroid
                    Arena”, a 2D asteroid shooter using OpenGL and C++, by
                    following object orientated programming
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Cloud Computing | Developed a restaurant finder app that
                    utilises several different cloud services including Google
                    APIs, AWS Lambda, EC2 and DynamoDB
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Further Web Programming | React focussed course that taught
                    us the in and outs of React to develop websites, includes
                    React JS, Node, Express and MySQL
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Practical Data Science | Data analysis course that taught us
                    the initial access of data, modelling, transformation, data
                    mining methods and presentation of results using Python
                  </p>
                </div>
              </Card.Text>
              <hr style={{ color: "#FFFF" }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://github.com/kevinnguyen2000"
                  target="_blank"
                  style={{ color: "#FFFF" }}
                >
                  <i style={{ fontSize: "26px" }} class="bi bi-github"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default App;
