import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Card, Button, Modal } from "reactstrap";
import EditModale from "../Elements/Modal";
import moduleName from "../Landing.js";
// import { AutoSizer, Grid } from "react-virtualized";
import _ from "lodash";
import "../Landing.css";

import { grommet, Box, Grid, Grommet, ResponsiveContext, Text } from "grommet";

function GridItem() {
  const [editModalval, setEditModalval] = useState(false);
  const [items, setItems] = useState([]);
  const global = useContext(GlobalContext);
  const [price, setPrice] = useState("");
  const [subName, setSubname] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [allData, setAllData] = useState([]);

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
  const Closemodal = (val) =>{
    if(val){
      setEditModalval(!editModalval)
    }

  }

  const size = useContext(ResponsiveContext);

  return (
    <div>
      <Grommet theme={grommet}>
        <Box pad="large">
          <Grid columns={size !== "20rem" ? "20rem" : "100%"} gap="small">
            {items.map((subdata, index) => (
              <Card
                key={index}
                pad="large"
                onClick={() => {
                  editModal(subdata.name);
                }}
              >
                <Box align="center">
                  <img
                    src="https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png"
                    width="200"
                    height="200"
                  />
                </Box>

                <Box gap="small" align="center" pad="small">
                  {subdata.name}
                  <Text>{subdata.price}</Text>
                </Box>
              </Card>
            ))}
          </Grid>
        </Box>
      </Grommet>
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
          <EditModale price={price} name={subName} Closemodal ={Closemodal}/>
        </Modal>
      )}
    </div>
  );
}

export default GridItem;
