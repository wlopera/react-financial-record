import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { categoriesData } from "../../data/data-dummy";
import { Icon, Grid } from "semantic-ui-react";
import DatePicker from "react-datepicker";

import "./NewFinantialRecord.css";
import "react-datepicker/dist/react-datepicker.css";

const NewFinaltialRecord = (props) => {
  const [categories, setCategories] = useState();

  const { register, handleSubmit, errors, setValue, control } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

  const categoryHandler = (item, value) => {
    setValue("category", value.name);
  };

  return (
    <div>
      <h1>Pantalla nuevo registro</h1>

      <Grid columns={2} stackable textAlign="center">
        <Grid.Row verticalAlign="top">
          <Grid.Column>
            <div style={{ display: "inline-block", width: 200, height: 400 }}>
              {categories &&
                categories.map((item, key) => {
                  return (
                    <Icon
                      onClick={(item, value) => categoryHandler(item, value)}
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
          </Grid.Column>

          <Grid.Column>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="category"
                  placeholder="Categoría"
                  ref={register({ required: true })}
                  readOnly
                  className="inputReadOnly"
                />
                {errors.category && <span>Seleccionar categoria </span>}
                <input name="codeBill" placeholder="Nro. de Factura" ref={register({ required: true })} />
                {errors.codeBill && <span>Agregar número de factura</span>}
                <input name="company" placeholder="Compañía" ref={register({ required: true })} />
                {errors.company && <span>Agregar nombre de la compañia</span>}
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true }}
                  render={({ onChange, value }) => (
                    <DatePicker
                      onChange={onChange}
                      className="buttonDatePicker"
                      selected={value}
                      placeholderText="Fecha de la factura"
                    />
                  )}
                />
                {errors.date && <span>Seleccionar la fecha de la factura</span>}
                <input name="RUC" placeholder="Nro. RUC" ref={register({ required: true })} />
                {errors.RUC && <span>Agregar número de RUC</span>}
                <input name="description" placeholder="Descripción" ref={register({ required: false })} />
                <input name="total" placeholder="Total" ref={register({ required: true })} />
                {errors.total && <span>Agregar el total de la factura</span>}
                <input type="submit" className="buttonSubmit" />
              </form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default NewFinaltialRecord;
