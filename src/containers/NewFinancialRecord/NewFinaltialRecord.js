import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { categoriesData } from "../../data/data-dummy";
import { Icon, Grid } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";

import "./NewFinantialRecord.css";
import "react-datepicker/dist/react-datepicker.css";

import * as actionTypes from "../../store/actions";

const NewFinaltialRecord = (props) => {
  const [categories, setCategories] = useState();

  const { register, handleSubmit, errors, setValue, control } = useForm();

  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(111, data);

    const category = categories.filter((item) => item.name === data.category);
    console.log("category: ", category[0]);

    dispatch(
      actionTypes.addExpense({
        id: new Date().getTime(),
        category: category[0].id,
        codeBill: data.codeBill,
        bill: data.company,
        date: moment(data.date).format("DD/MM/YYYY"),
        RUC: data.RUC,
        total: data.total,
        description: data.description,
      })
      // .then(() => {
      //   console.log("Done!");
      // })
    );
    //history.push("/records");
  };

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

  const categoryHandler = (item, value) => {
    const category = categories.filter((data) => data.image === value.name);
    setValue("category", category[0].name);
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
