import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "moderat2_root",
  password: "].NB3T0Au?e7",
});

// export const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mbuya",
// });

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
