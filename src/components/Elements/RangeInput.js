import React, { useState, useEffect, useContext } from "react";
import { Box, Grommet, RangeInput as Range, Text,Button } from "grommet";
import { grommet } from "grommet/themes";
import { GlobalContext } from "../../GlobalContext";

function RangeInput() {
  const [min, setMin] = React.useState("");
  const [max, setMax] = useState("");
  const [value, setValu] = useState("");
  const [filteredData, setfilteredData] = useState([])

  const global = useContext(GlobalContext);

  useEffect(() => {
    if (global.user[0]) {
      const price = global.user[0].sub.map((el) => el.price);

      price.sort();
      console.log("price..", global.user);
      setMin(price[0]);
      setMax(price[price.length - 1]);
    }
  },[global.user]);

  const onChange = (event) => {
    setValu(event.target.value);
    console.log("selector value...", event.target.value);
    const newArr = global.user[0].sub.filter(
      (el) => el.price < event.target.value
    );
    const filterRange = [
      { Name: global.user[0].Name, id: global.user[0].id, sub: newArr },
    ];
    console.log("newArr..", filterRange);
    setfilteredData(filterRange)
    // global.setValue(filterRange[0]);
  };
  const rerender =() =>{
      console.log("...val")
  }
  useEffect(() => {
     rerender()
  }, [])
  const filterThings = ()=>{
      global.setValue(filteredData[0]);
      rerender() 
  }
  
  return (
    <div>
      <Grommet theme={grommet}>
        <Box pad="large">
          <Box direction="row" justify="between">
            <Text>{min}</Text>
            {value}
            <Text>{max}</Text>
          </Box>

          <Range min={min} max={max} onChange={onChange} />
          <Button onClick={() => filterThings()}>filter</Button>
        </Box>
      </Grommet>
    </div>
  );
}

export default RangeInput;
