import React, { useState, useEffect } from "react";

import { categoriesData } from "../../data/data-dummy";

import { Icon } from "semantic-ui-react";

import "./NewFinantialRecord.css";

const NewFinaltialRecord = (props) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

  return (
    <div>
      <h1>Pantalla nuevo registro</h1>
      <div style={{ display: "inline-block", width: 200, height: 400 }}>
        {categories &&
          categories.map((item, key) => {
            return (
              <Icon
                onClick={() => console.log(item.name)}
                key={key}
                circular
                link
                name={item.image}
                size="big"
                color="teal"
                className="resultClass"
              />
            );
          })}
      </div>
    </div>
  );
};

export default NewFinaltialRecord;
