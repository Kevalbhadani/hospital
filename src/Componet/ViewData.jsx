import React, { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal"; // Correct import for Modal

function ViewData() {
  var { id } = useParams();

  const [data, setData] = useState([]);

  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [diseaseType, setDiseaseType] = useState("");
  const [description, setDescription] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [wardType, setWardType] = useState("");
  const [Id, setId] = useState(null);
  const [show, setShow] = useState(false); // State for modal show/hide

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = "d1725600118196euz837308518hz";

  const GetData = async () => {
    try {
      const response = await axios.get(
        "https://service.apikeeda.com/api/v1/hospital",
        {
          headers: {
            "x-apikeeda-key": token,
          },
        }
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const Delete = async (id) => {
    try {
      const response = await axios.delete(
        `https://service.apikeeda.com/api/v1/hospital/${id}`,
        {
          headers: {
            "x-apikeeda-key": token,
          },
        }
      );
      GetData();
    } catch (error) {
      console.log("error", error);
    }
  };

  const update = async () => {
    try {
      const response = await axios.patch(
        `https://service.apikeeda.com/api/v1/hospital/${Id}`,
        {
          patientName,
          doctor,
          diseaseType,
          description,
          medicineName,
          wardType,
        },
        {
          headers: {
            "x-apikeeda-key": token,
          },
        }
      );
      console.log(response.data.data);
      GetData();
      handleClose();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEdit = (contact) => {
    setPatientName(contact.patientName);
    setDoctor(contact.doctor);
    setDiseaseType(contact.diseaseType);
    setDescription(contact.description);
    setMedicineName(contact.medicineName);
    setWardType(contact.wardType);
    setId(contact._id);
    handleShow();
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Display />
      <Container>
        <Row>
          { data ==null?"loding": data.map((v, i) => (
              <Col xs={4} key={v._id}>
                <div className="description">
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroup.Item>No: {i + 1}</ListGroup.Item>
                      <ListGroup.Item>
                        Patient Name: {v.patientName}
                      </ListGroup.Item>
                      <ListGroup.Item>Doctor: {v.doctor}</ListGroup.Item>
                      <ListGroup.Item>
                        Disease Type: {v.diseaseType}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Description: {v.description}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Medicine Name: {v.medicineName}
                      </ListGroup.Item>
                      <ListGroup.Item>Ward Type: {v.wardType}</ListGroup.Item>
                    </ListGroup>
                    <div className="button">
                      <h5>
                        <Button
                          onClick={() => handleEdit(v)}
                          variant="info"
                          className="btn"
                        >
                          Edit
                        </Button>
                      </h5>
                      <h5>
                        <Button variant="danger" onClick={() => Delete(v._id)}>
                          Delete
                        </Button>
                      </h5>
                    </div>
                  </Card>
                </div>
              </Col>
            ))}
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                update();
              }}
            >
              <div className="form-group">
                <label>Patient Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Doctor</label>
                <input
                  type="text"
                  className="form-control"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Disease Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={diseaseType}
                  onChange={(e) => setDiseaseType(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Medicine Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Ward Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={wardType}
                  onChange={(e) => setWardType(e.target.value)}
                />
              </div>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default ViewData;
