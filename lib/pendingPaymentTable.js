import Tabular from 'meteor/aldeed:tabular';

TabularTables.pendingPayment = new Tabular.Table({
    name: "pendingPayment",
    collection: PendingPayment,
    columns: [
      {data: "_id", title: "Request Id"},
      {data: "clientName", title: "Client Name"},
      {data: "clientPhone", title: "Client Phone"},
      {data: "espacioId", title: "Espacio Id"},
      {data: "fechaDesde", title: "Fecha Desde"},
      {data: "fechaHasta", title: "Fecha Hasta"},
      {data: "fechaAprobacion", title: "Fecha Aprobacion"}
    ]
  });