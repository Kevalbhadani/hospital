import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Display from './Display';
import { useParams } from 'react-router-dom';
import { Modal } from 'bootstrap';

function UpdateData() {

  var id = useParams()
  console.log(id.id)
    const [patientName, setpatientName] = useState('');
    const [doctor, setdoctor] = useState('');
    const [diseaseTypet, setdiseaseType] = useState('');
    const [description, setdescription] = useState('');
    const [medicineName, setmedicineName] = useState('');
    const [wardTypet, setwardTypet] = useState('');

    // const handelClose = () => setShow(false)
    // const handelShow = () => setClose(true)

      const token = "a1722692323462giq327305037xy";

      const model = async () => {
        try {
          const responce = await axios.patch(
            `https://service.apikeeda.com/api/v1/hospital/${id}` ,
            {
              headers: {
                "x-apikeeda-key": token,
              },
            }
          ); console.log(responce.data.data);
          
        } catch (error) {
          console.log("error", error);
        }
      };

        const handelEdit = (contact) => {
          setpatientName(contact);
          setdoctor(contact)
          setdiseaseType(contact)
          setdescription(contact)
          setmedicineName(contact)
          setwardTypet(contact)
        };

  return (
    <>
      <Display></Display>
      <div className="Data-Add col-5 ms-5 ">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>PatientName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter patientName"
              value={patientName}
              name="patientName"
              onChange={(e) => setpatientName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> Doctor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter doctor"
              value={doctor}
              name="doctor"
              onChange={(e) => setdoctor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> DiseaseType</Form.Label>
            <Form.Control
              type="text"
              placeholder=" diseaseType"
              value={diseaseTypet}
              name="diseaseTypet"
              onChange={(e) => setdiseaseType(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              value={description}
              name="description"
              onChange={(e) => setdescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>MedicineName</Form.Label>
            <Form.Control
              type="text"
              placeholder="medicineName"
              value={medicineName}
              name="medicineName"
              onChange={(e) => setmedicineName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>WardType</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter wardType"
              value={wardTypet}
              name="wardTypet"
              onChange={(e) => setwardTypet(e.target.value)}
            />
          </Form.Group>

          {/* <Button className="mb-3" variant="primary" onClick={() => Submit()}>
            Submit
          </Button> */}
        </Form>
      </div>
      {/* <Modal show={show} onHide={hadelClose}>
        
      </Modal> */}
    </>
  );
}

export default UpdateData