import Tabular from 'meteor/aldeed:tabular';

TabularTables.pendingRequest = new Tabular.Table({
    name: "espaciosDisponibles",
    collection: EspaciosDisponibles,
    columns: [
      {data: "_id", title: "Espacio Id"},
      {data: "dimensiones", title: "Dimensiones"},
      {data: "ilumincacion", title: "Ilumninacion"}
    ]
  });