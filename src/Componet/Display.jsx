import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function Display() {
  
  return (
    <>
      <div className="Hospital">
        <div className="top-header">
          <div className="heding">
            <h2>Hospital</h2>
          </div>

          <div className="btn">
            <Link to="/view">
              <Button variant="primary">Viwe</Button>
            </Link>

            <Link to="/add">
              <Button variant="primary">Add</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display