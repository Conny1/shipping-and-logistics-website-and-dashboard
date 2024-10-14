import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
