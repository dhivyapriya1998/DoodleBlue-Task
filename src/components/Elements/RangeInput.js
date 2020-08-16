import React, { useState, useEffect, useContext } from "react";
import { Box, Grommet, RangeSelector, Text, Stack } from "grommet";
import {Button} from "reactstrap"
import { grommet } from "grommet/themes";
import { GlobalContext } from "../../GlobalContext";

function RangeInput() {
  const [values, setValues] = React.useState([0, 10000]);
  // const [price, setPrice] = React.useState([]);
  const [max, setMax] = useState("");
  const [value, setValu] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  const global = useContext(GlobalContext);


  const slideee = (values) => {
    console.log("range", values[0], values[1]);
    setValues(values);

    let Arr = [];
    global.categories.map((el) => {
      console.log("element..", el);
      if (el.Name === global.selectedCategory) {
        Arr = el.sub;
      }
    });

    console.log("heee", parseInt(values[0]), parseInt(values[1]));
    const newArr = Arr.filter(
      (el) => el.price > values[0] && el.price < values[1]
    );
    console.log("Arr...", newArr);
    var Identity = "";
    if (global.selectedCategory === "Books") {
      Identity = "01";
    } else if (global.selectedCategory === "Dress") {
      Identity = "02";
    } else if (global.selectedCategory === "Cosmetics") {
      Identity = "03";
    } else if (global.selectedCategory === "Electric Appliances") {
      Identity = "04";
    }
    const filterRange = [
      { Name: global.selectedCategory, id: Identity, sub: newArr },
    ];
    console.log("filterRange..", filterRange);
    setfilteredData(filterRange);
  };
  const rerender = () => {
    // console.log("...val");
  };
  useEffect(() => {
    rerender();
  }, []);
  const filterThings = () => {
    console.log("filteredData[0]", filteredData[0]);
    global.setValue(filteredData[0]);
    rerender();
  };

  return (
    <div>
      <Grommet theme={grommet}>
        <Box style={{marginBottom:"2rem"}}>
          <Text weight="bold">Filter By Price</Text>
        </Box>

        <Stack>
          <Box background="light-4" height="6px" direction="row" />
          <RangeSelector
            direction="horizontal"
            invert={false}
            min={0}
            max={10000}
            size="full"
            round="small"
            values={values}
            onChange={(values) => slideee(values)}
          />
        </Stack>
        <Box align="end">
          <Text size="small">{`Price : ${values[0]} - ${values[1]}`}</Text>
        </Box>
        <Button
          onClick={() => {
            filterThings();
          }} 
          style={{ background: "#FF3380" }}
        >
          Filter
        </Button>
      </Grommet>
    </div>
  );
}

export default RangeInput;
