import React, { useState, useEffect } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

import { expensesData } from "../../data/data-dummy";
import { expenseColumnsData } from "../../columns/columns";

const FinancialRecord = (props) => {
  const [expenses, setExpenses] = useState();
  const [expenseColumns, setExpenseColumns] = useState();

  useEffect(() => {
    setExpenses(expensesData);
    setExpenseColumns(expenseColumnsData);
  }, [expensesData]);

  return (
    <div>
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
