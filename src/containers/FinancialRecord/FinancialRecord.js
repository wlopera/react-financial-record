import React, { useState, useEffect } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../store/actions";
import { Icon } from "semantic-ui-react";

import "./Financialrecord.css";

const FinancialRecord = (props) => {
  const [expenses, setExpenses] = useState();
  const [expenseColumns, setExpenseColumns] = useState();

  const categoryData = useSelector((state) => state.category);
  const expenseData = useSelector((state) => state.expense);

  console.log(123, categoryData);
  console.log(456, expenseColumns);

  useEffect(() => {
    categoryData.push({
      dataField: "actions",
      text: "Acciones",
      headerAlign: "center",
      align: "center",
      formatter: (cell, row) => (
        <button onClick={() => dispatch(actionTypes.deleteExpense(row.id))}>
          <Icon name="pencil" />
        </button>
      ),
    });
    setExpenseColumns(categoryData);

    return () => {
      categoryData.pop();
    };
  }, []);

  useEffect(() => {
    setExpenses(expenseData);
  }, [expenseData]);

  const dispatch = useDispatch();

  const addExpense = () => {
    dispatch(
      actionTypes.addExpense({
        id: new Date().getTime(),
        category: 12,
        codeBill: "ADVF-5647-56774",
        bill: "Famacia Cruz Azul",
        date: "01-01-2021",
        total: 30.55,
        RUC: "543-12-45362 DV 65",
        description: "Medicinas en general",
      })
    );
  };

  const deleteExpense = () => {
    dispatch(actionTypes.deleteExpense(5));
  };

  return (
    <div>
      <div className="recordButton">
        <button className="btn btn-primary" onClick={addExpense}>
          Agregar
        </button>
      </div>
      <br />
      {expenses && (
        <BootstrapTable
          striped
          hover
          keyField="id"
          data={expenses}
          columns={expenseColumns}
          filter={filterFactory()}
          pagination={paginationFactory()}
        />
      )}
    </div>
  );
};

export default FinancialRecord;
