import React, { useState, useEffect, useContext } from "react";
import "../Landing.css";
import { GlobalContext } from "../../GlobalContext";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Modal(props) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);

  const global = useContext(GlobalContext);

  useEffect(() => {
    const Arr = [];
    Arr.push(props);

    console.log("globsl...", global.categories);
    setData(Arr[0].name);
  });
  const saveData = () => {
    const copy = global.category;
    let val = [copy, { category: category, Title: title, price: price }];
    console.log("data", val, props);
    props.closeModal(val);
  };

  return (
    <div className="m-4">
      <Form>
        <div className="mb-5 text-center">
          <h3>{data ? "Edit Product" : "Add product"}</h3>
        </div>
        <FormGroup>
          <Label for="exampleSelect">Product Category</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(e) => setCategory(e.target.value)}
          >
            {global.categories.map((el) => {
              return <option>{el.Name}</option>;
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Product Title</Label>
          <Input
            type="text"
            id="exampleEmail"
            placeholder={data ? data.name : "Enter Product Title"}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" onClick={() => console.log(props.subName)}>
            Price
          </Label>
          <Input
            type="text"
            id="exampleEmail"
            placeholder={data ? data.price : "Enter Product Price"}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload Product Image</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <div className="header">
          <div style={{ float: "right" }}>
            {/* <Button>Cancel</Button> &nbsp;&nbsp; */}
            <Button
              style={{ background: "#FF3380" }}
              onClick={() => saveData()}
            >
              {data ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Modal;
