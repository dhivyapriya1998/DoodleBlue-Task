import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Button, Modal, Row, Col, Container, Card } from "reactstrap";
import EditModale from "../Elements/Modal";
import moduleName from "../Landing.js";
import { AutoSizer, Grid } from "react-virtualized";
import _ from "lodash";
import "../Landing.css";

function GridItem(props) {
  const [editModalval, setEditModalval] = useState(false);
  const [items, setItems] = useState([]);
  const global = useContext(GlobalContext);
  const [price, setPrice] = useState("");
  const [subName, setSubname] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setItems(global.user);
    if (global.user.length > 0) {
      let formatedData = _.chunk(global.user[0].sub, 3);
      setsubCategory(formatedData);
      // console.log("formatedData", formatedData);
    }
  }, [global.user[0], global.categories]);

  useEffect(() => {
    setAllData(global.categories);
  }, [global.categories]);

  const editModal = (name) => {
    console.log("items..", allData);
    setEditModalval(!editModalval);
    items[0].sub.map((el) => (el.name === name ? setPrice(el) : null));
    allData.map((el) => {return(el.sub.map((val) => {return (val.name) === name ? setSubname(el) : null}) )})
    // allData.map((el) => (el.sub.map((val) => {return (val.name) === name ? setSubname(el) : null))} );
  };

  const cellRenderer = ({ columnIndex, key, rowIndex, parent, style }) => {
    console.log(columnIndex, key, rowIndex);
    //  setAllData([])

    console.log("bookdata", subCategory);

    const BookDatum = subCategory[rowIndex][columnIndex];
    console.log("BookDatum", BookDatum);

    return BookDatum ? (
      <Card
        style={{ display: "flex", float: "left", margin: "3rem 25px" }}
        onClick={() => {
          editModal(BookDatum.name);
        }}
      >
        <img
          src="https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png"
          width="200"
          height="200"
        />
        <div>
          <div style={{ textAlign: "center" }}>
            <b>{BookDatum.name}</b>
          </div>
          <div style={{ textAlign: "center" }}>
            ${subCategory[rowIndex][columnIndex].price}
          </div>
        </div>
      </Card>
    ) : null;
  };
  return (
    <div>
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
          {/* <Button onClick={() => setEditModalval(!editModalval)}>X</Button> */}
          <EditModale price={price} name={subName} />
        </Modal>
      )}
      <div style={{ width: "900", height: "800px" }}>
        <AutoSizer>
          {({ width, height }) => (
            <Grid
              cellRenderer={cellRenderer}
              // noContentRenderer={noContentRenderer}
              columnCount={3}
              overscanColumnCount={4}
              overscanRowCount={4}
              columnWidth={300}
              height={height}
              rowCount={subCategory.length}
              rowHeight={900}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default GridItem;

// import React,{useContext} from 'react'

// import {
//   grommet,
//   Box,
//   Card,
//   Grid,
//   Grommet,
//   ResponsiveContext,
//   Text,
// } from 'grommet';

// function GridItem() {
//   const cards = Array(20)
//   .fill()

//   .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);
//   const size = useContext(ResponsiveContext);

//   return (
//     <div>
//      <Grommet theme={grommet}>
//       <Box pad="large">
//         <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
//           {cards.map((card, index) => (

//             <Box pad="large" key={index}>
//               {card}
//             </Box>
//           ))}
//         </Grid>
//       </Box>
//     </Grommet>

//     </div>
//   )
// }

// export default GridItem
