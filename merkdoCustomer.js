//Packages required!
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "bamazon_db",
    port: 3306
  });
  connection.connect();

  var display = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log("-----------------------------");
      console.log("      Welcome To Mer K do    ");
      console.log("-----------------------------");
      console.log("");
      console.log("Find below our Products List");
      console.log("");
      var table = new Table({
        head: ["Product Id", "Description", "Price"],
        colWidths: [12, 50, 8],
        colAligns: ["center", "left", "right"],
        style: {
          head: ["green"],
          compact: true
        }
      });  

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connnected as id: ' + connection.threadId);
}
);

for (var i = 0; i < res.length; i++) {
    table.push([res[i].id, res[i].products_name, res[i].price]);
  }

  console.log(table.toString());
  console.log("");
  shopping();
}); 
//End Connection to products
};

var shopping = function() {
    inquirer
      .prompt({
        name: "productToBuy",
        type: "input",
        message: "Enter the ID product you wish to buy!"
      })
      .then(function(answer1) {
        var selection = answer1.productToBuy;
        connection.query("SELECT * FROM products WHERE Id=?", selection, function(
          err,
          res
        ) {
          if (err) throw err;
          if (res.length === 0) {
            console.log(
              "This product does not exist, Please enter a validnproduct Id from the list above"
            );
  
            shopping();
          } else {
            inquirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "How many items would you like to purchase?"
              })
              .then(function(answer2) {
                var quantity = answer2.quantity;
                if (quantity > res[0].stock_quantity) {
                  console.log(
                    "SORRY we only have " +
                      res[0].stock_quantity +
                      " of this product."
                  );
                  shopping();
                } else {
                  console.log("");
                  console.log(res[0].products_name + " purchased");
                  console.log(quantity + " qty @ $" + res[0].price);
  
                  var newQuantity = res[0].stock_quantity - quantity;
                  connection.query(
                    "UPDATE products SET stock_quantity = " +
                      newQuantity +
                      " WHERE id = " +
                      res[0].id,
                    function(err, resUpdate) {
                      if (err) throw err;
                      console.log("");
                      console.log("Your Order has been Processed.");
                      console.log("Thank you for Shopping!");
                      console.log("");
                      connection.end();
                    }
                  );
                }
              });
          }
        });
      });
  };

  display();