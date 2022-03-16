import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../store/actions";
import { Icon } from "semantic-ui-react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

import ReactTable from "react-table";

import "./FinancialRecord.css";

import "react-table/react-table.css";

const FinancialRecord = (props) => {
  const [expenses, setExpenses] = useState();
  const [expenseColumns, setExpenseColumns] = useState();

  const categoryData = useSelector((state) => state.category);
  const expenseData = useSelector((state) => state.expense);

  useEffect(() => {
    setExpenseColumns(categoryData);
  }, [categoryData]);

  useEffect(() => {
    const data = expenseData.map((prop, key) => {
      return {
        ...prop,
        actions: (
          <button onClick={() => dispatch(actionTypes.deleteExpense(prop.id))}>
            <Icon name="pencil" />
          </button>
        ),
      };
    });

    setExpenses(data);
  }, [expenseData]);

  const dispatch = useDispatch();

  return (
    <div>
      {expenses !== undefined && (
        <Card>
          <CardTitle className="bg-light border-bottom p-3 mb-0">
            <i className="mdi mdi-border-right mr-2"></i>Basic Table
          </CardTitle>
          <CardBody>
            <ReactTable
              data={expenses}
              columns={expenseColumns}
              defaultPageSize={5}
              previousText="Anterior"
              nextText="Siguiente"
              loadingText="Cargando..."
              noDataText="No existen registros a cargar"
              pageText="Páginas"
              ofText="de"
              rowsText="filas"
              className="-striped -highlight"
              footerClassName="-striped -highlight"
              showPaginationBottom={true}
              showPageSizeOptions={true}
              headerStyle={{ color: "blue" }}
              onSortedChange={(newSorted, column, shiftKey) => {
                console.log(12345, column);
              }}
              style={{
                height: "400px", // This will force the table body to overflow and scroll, since there is not enough room
              }}
            />
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default FinancialRecord;
