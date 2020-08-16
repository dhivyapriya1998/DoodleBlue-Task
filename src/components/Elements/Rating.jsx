import React, { useState, useEffect, useContext } from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { GlobalContext } from "../../GlobalContext.js";
import { Box, Grommet, RangeSelector, Text, Stack } from "grommet";

function Rating() {
  const [Topvalues, setTopvalues] = useState([]);
  const global = useContext(GlobalContext);

  return (
    <div>
      <Box style={{ margin: "1rem 0rem" }}>
        <Text weight="bold">Top Products</Text>
      </Box>
      {global.categories.map((category) => {
        return category.sub.map((el) => {
          if (el.rating === "5") {
            return (
              <Box direction="row" justify="between" pad="small">
                <Box>
                  <img
                    src="https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png"
                    width="70"
                    height="70"
                  />
                </Box>
                <Box>
                  <div>{el.name}</div>

                  <Rate
                    defaultValue={el.rating}
                    disabled
                    style={{ fontSize: 20 }}
                    allowHalf
                    allowClear={false}
                  />
                  <div>{el.price}</div>
                </Box>
              </Box>
            );
          }
        });
      })}
    </div>
  );
}

export default Rating;
