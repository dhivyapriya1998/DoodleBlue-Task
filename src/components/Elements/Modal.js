import React, { useState, useEffect, useContext } from "react";
import "../Landing.css";
import { GlobalContext } from "../../GlobalContext";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Modal(props) {
  const [category, setCategory] = useState("Books");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editName, setEditName] = useState("");
  const [subcategoy, setSubcategoy] = useState("")

  const global = useContext(GlobalContext);

  useEffect(() => {
    console.log(
      "props..",
      props,
      props.name.Name,
      props.price.price,
      props.price.name
    );
    setEditPrice(props.price.price)
    setEditName(props.name.Name)
    setSubcategoy( props.price.name)

  }, []);

  const saveData = () => {
    let newCatagory = [...global.categories];
    newCatagory.map((el) => {
      console.log("check...", el.Name, category);
      if (el.Name.toLowerCase() === category.toLowerCase()) {
        console.log("check...", el.Name, category);
        let newSub = el.sub.push({ name: title, price: price });
        return { ...el, sub: newSub };
      }

      return el;
    });
    global.getCategory(newCatagory);
    console.log("data", global.categories);
    props.closeModal("val");
  };
  const EditData = () => {
    let newCatagory = [...global.categories];
    newCatagory.map((el) => {
      console.log("check...", el.Name, category);
      if (el.Name.toLowerCase() === category.toLowerCase()) {
        console.log("check...", el.Name, category);
        let newSub = el.sub.push({ name: title, price: price });
        return { ...el, sub: newSub };
      }

      return el;
    });
    global.getCategory(newCatagory);
    console.log("data", global.categories);
    props.closeModal("val");
  };

  return (
    <div className="m-4">
      <Form>
        <div className="mb-5 text-center">
          <h3>{subcategoy ? "Edit Product" : "Add product"}</h3>
        </div>
        <FormGroup>
          <Label for="exampleSelect">Product Category</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            placeholder={editName ? editName : "Enter Category Name"}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
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
            placeholder={subcategoy ? subcategoy: "Enter Product Title"}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" onClick={() => console.log(props.subName)}>
            Price
          </Label>
          <Input
            type="text"
            id="exampleEmail"
            placeholder={editPrice ? editPrice : "Enter Product Price"}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
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
              onClick={() => {
                subcategoy ? EditData() : saveData();
              }}
            >
              {subcategoy ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Modal;
