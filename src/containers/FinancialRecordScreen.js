import React from "react";
import { Tab } from "semantic-ui-react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import FinancialRecord from "./FinancialRecord/FinancialRecord";
import NewFinalcialRecord from "./NewFinancialRecord/NewFinaltialRecord";

const FinancialRecordScreen = (props) => {
  const panes = [
    {
      menuItem: {
        as: NavLink,
        id: "tab1",
        content: "Registros",
        to: "/records",
        exact: true,
        key: "records",
      },
      pane: <Route path="/records" exact component={FinancialRecord} key="1" />,
    },
    {
      menuItem: {
        as: NavLink,
        id: "tab2",
        content: "Nuevo registro",
        to: "/new-record",
        exact: true,
        key: "new-record",
      },
      pane: <Route path="/new-record" exact component={NewFinalcialRecord} key="2" />,
    },
  ];

  return (
    <Router>
      <div style={{ margin: "50px" }}>
        <Tab
          menu={{
            color: "green",
            inverted: true,
            attached: false,
            tabular: false,
            fluid: false,
            vertical: false,
          }}
          renderActiveOnly={false}
          activeIndex={-1}
          panes={panes}
        />
      </div>
    </Router>
  );
};

export default FinancialRecordScreen;
