export const expenseColumnsData = [
  {
    accessor: "id",
    Header: "ID",
  },
  {
    accessor: "category",
    Header: "Categoria",
  },
  {
    accessor: "codeBill",
    Header: "Nro. de Factura",
  },
  {
    accessor: "bill",
    Header: "Compañia / Empresa",
  },
  {
    accessor: "date",
    Header: "Fecha",
  },
  {
    accessor: "RUC",
    Header: "RUC",
  },
  {
    accessor: "description",
    Header: "Descripción",
  },
  {
    accessor: "total",
    Header: "Total",
    Footer: (
      <span>
        <strong>Total Final:</strong> 15
      </span>
    ),
  },
  {
    Header: "Actions",
    accessor: "actions",
    sortable: false,
    filterable: false,
  },
];
