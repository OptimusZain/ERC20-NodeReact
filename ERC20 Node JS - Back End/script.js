require('dotenv/config');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const nameRoute = require("./routes/name");
const symbolRoute = require("./routes/symbol");
const supplyRoute = require("./routes/totalSupply");
const transferRoute = require("./routes/transfer");
const approveRoute = require("./routes/approve");
const allowanceRoute = require("./routes/allowance");
const transFromRoute = require("./routes/transferFrom");
const balanceOfRoute = require("./routes/balanceOf");
const cors = require("cors");

app.get('/', (req,res) => {
  res.send("We are on home");
});

app.use(cors());

app.use('/name', nameRoute);
app.use('/symbol', symbolRoute);
app.use('/balanceOf', balanceOfRoute);
app.use('/totalSupply', supplyRoute);
app.use('/transfer', transferRoute);
app.use('/approve', approveRoute);
app.use('/allowance', allowanceRoute);
app.use('/transferFrom', transFromRoute);

app.listen(5000);
