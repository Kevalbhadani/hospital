import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Display from "./Display";
import Button from "react-bootstrap/Button";
import axios from "axios";

function AddData() {
  const [patientName, setpatientName] = useState(null);
  const [doctor, setdoctor] = useState(null);
  const [diseaseTypet, setdiseaseType] = useState(null);
  const [description, setdescription] = useState(null);
  const [medicineName, setmedicineName] = useState(null);
  const [wardTypet, setwardTypet] = useState(null);

  const token = "d1725600118196euz837308518hz";

  console.log(patientName);
  console.log(doctor);
  console.log(diseaseTypet);
  console.log(description);
  console.log(medicineName);
  console.log(wardTypet);

  const Submit = async () => {
    try {
      const responce = await axios.post(
        "https://service.apikeeda.com/api/v1/hospital",
        {
          patientName: patientName,
          doctor: doctor,
          diseaseType: diseaseTypet,
          description: description,
          medicineName: medicineName,
          wardType: wardTypet,
        },
        {
          headers: {
            "x-apikeeda-key": token,
          },
        }
      );

    if (responce.status== 201) {
      setpatientName('')
      setdoctor('')
      setdescription('')
      setdiseaseType('')
      setmedicineName('')
      setwardTypet('')
    }
      console.log(responce);
    } catch (error) {
      console.log("error", error);
    }
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

          <Button className="mb-3" variant="primary" onClick={() => Submit()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddData;
