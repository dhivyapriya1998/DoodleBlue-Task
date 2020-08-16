import React, { useState, useEffect, useContext } from "react";
import "../Landing.css";
import GridItem from "./GridItem";
import { GlobalContext } from "../../GlobalContext";

function Categories() {
  const global = useContext(GlobalContext);
  const [state, setstate] = useState("");

  const getProduct = (filterval) => {
    global.categories.map((el) => {
      if (el.id === filterval) {
        global.setValue(el);
        global.getSelectedCategory(el.Name);
      }
    });
  };
  useEffect(() => {
    getProduct("01");
    console.log("get", getProduct("01"));
  }, []);

  return (
    <div>
      {global.categories.map((el) => {
        return (
          <div
            className="categoryName"
            onClick={() => {
              getProduct(el.id);
            }}
          >
            {el.Name}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
