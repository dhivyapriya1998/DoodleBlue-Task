import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  Card,
  Button,
  Modal,
  FormGroup,
  FormText,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Container,
  Row,
  Col,
} from "reactstrap";
import EditModale from "../Elements/Modal";
import moduleName from "../Landing.js";
// import { AutoSizer, Grid } from "react-virtualized";
import _ from "lodash";
import "../Landing.css";
import Pagination from "./Pagination";

import { grommet, Box, Grid, Grommet, ResponsiveContext, Text } from "grommet";

function GridItem() {
  const [editModalval, setEditModalval] = useState(false);
  const [items, setItems] = useState([]);
  const global = useContext(GlobalContext);
  const [price, setPrice] = useState("");
  const [subName, setSubname] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [allData, setAllData] = useState([]);

  //   get current data
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dataperPage, setDataperPage] = useState(9);

  const indexOfLastData = currentPage * dataperPage;
  const indexOfFirstPage = indexOfLastData - dataperPage;
  const currentData = items.slice(indexOfFirstPage, indexOfLastData);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    if (global.user.length > 0) {
      const globaldata = global.user;
      console.log("itemss...", globaldata[0]);
      setAllData(globaldata[0]);
      const sublevel = globaldata[0].sub.map((el) => el);
      setItems(sublevel);
    }
  }, [global.user, global.categories]);

  useEffect(() => {
    console.log("global.categories...", global.categories);
    setAllData(global.categories);
  }, [global.categories]);

  const editModal = (name) => {
    console.log("items..", allData);
    setEditModalval(!editModalval);
    items.map((subdata, index) =>
      subdata.name === name ? setPrice(subdata) : null
    );
    setSubname(allData);
  };
  const Closemodal = (val) => {
    if (val) {
      setEditModalval(!editModalval);
    }
  };
  const sortasc = () => {
    let arr = [...items];
    let empty = [];
    arr.map((val) => {
      empty.push({ name: val.name, price: val.price });
    });
    const newr = arr.sort(function (a, b) {
      return a.price - b.price;
    });
    setItems(newr);
  };
  const sortdesc = () => {
    let arr = [...items];
    let empty = [];
    arr.map((val) => {
      empty.push({ name: val.name, price: val.price });
    });
    const newr = arr.sort(function (a, b) {
      return b.price - a.price;
    });
    setItems(newr);
  };


  return (
    <div>
      <div style={{ height: "50rem" }}>
      
          <Row>
            <Col md="9">
              <b>{allData.Name}</b>
            </Col>
            <Col style={{marginLeft:"15px"}}>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Default Sorting</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem disabled>Default</DropdownItem>
                  <DropdownItem onClick={() => sortasc()}>
                    Low to High
                  </DropdownItem>
                  <DropdownItem onClick={() => sortdesc()}>
                    High to Low
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
 

        <h6>{/* showing {dataperPage} of {items.length} */}</h6>
        <Container>
          <Row>
            {currentData.map((subdata, index) => (
              <Col sm="4" className="pt-4">
                <Card
                  key={index}
                  pad="large"
                  onClick={() => {
                    editModal(subdata.name);
                  }}
                >
                  <div align="center">
                    <img
                      src="https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div align="center">
                    <div className="pb-2">{subdata.name}</div>

                    <div className="pb-3">${subdata.price}</div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Pagination
        dataperPage={dataperPage}
        totalData={items.length}
        paginate={paginate}
      />
      {editModalval && (
        <Modal isOpen={editModalval}>
          <span style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              className="buttonCss"
              onClick={() => setEditModalval(!editModalval)}
            >
              X
            </Button>
          </span>
          <EditModale price={price} name={subName} Closemodal={Closemodal} />
        </Modal>
      )}
    </div>
  );
}

export default GridItem;
