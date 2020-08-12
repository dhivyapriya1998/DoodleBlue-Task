import React, { useState } from "react";
import "./Landing.css";
import { Button, Modal, Row, Col, Container } from "reactstrap";
import AddModal from "./Elements/Modal";
import Categories from "./Elements/Categories";
import GridItem from "./Elements/GridItem";

function Landing() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };
  const closeModal = (val) => {
    console.log("valuee", val);
    setOpen(!open);
  };
  const cancelClick = (val) => {
    if (val) {
      console.log("cancelllll");
    }
  };
  return (
    <div className="m-4">
      <div className="header">
        <h3>
        <b> Products</b>
         
          <span style={{ float: "right" }}>
            <Button
              style={{ background: "#FF3380" }}
              onClick={() => openModal()}
            >
              Add product
            </Button>
          </span>
        </h3>
        {open && (
          <Modal isOpen={open}>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button className="buttonCss" onClick={() => openModal()}>
                X
              </Button>
            </span>
            <AddModal closeModal={closeModal} cancelClick={cancelClick} />
          </Modal>
        )}
        <div className="category">
          <Row>
            <Col sm={3}>
              <b>CATEGORIES</b>
              <div className="categoryBox">
                <Categories />
              </div>
            </Col>
            <Col sm={9}>
              <GridItem />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Landing;
