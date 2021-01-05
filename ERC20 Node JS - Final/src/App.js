import React from "react";
import './App.css';
//import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import { useState } from "react";

const App = () => {

  //Transfer
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [responseTransfer, setResponseTransfer] = useState("");
  //BalanceOf
  const [account, setAccount] = useState("");
  const [responseBalance, setResponseBalance] = useState("");
  //Approve
  const [spender, setSpender] = useState("");
  const [responseApprove, setResponseApprove] = useState("");
  //Allowance
  const [owner, setOwner] = useState("");
  const [responseAllowance, setResponseAllowance] = useState("");
  //TransferFrom
  const [responseTransferFrom, setResponseTransferFrom] = useState("");

  const transfer = () => {
    Axios.post("http://localhost:5000/transfer", {recipient: recipient, amount: amount}).then((response) => {
    setResponseTransfer(response.data.status.toString());
    console.log(response.data.status.toString());
    });
  };

  const balanceOf = () => {
    Axios.post("http://localhost:5000/balanceOf", {account: account}).then((response) => {
    setResponseBalance(response.data);  
    console.log(response.data);
    });
  };

  const approve = () => {
    Axios.post("http://localhost:5000/approve", {spender: spender, amount:amount}).then((response) => {
      setResponseApprove(response.data.status.toString())  
    console.log(response.data.status.toString());
    });
  };

  const allowance = () => {
    Axios.post("http://localhost:5000/allowance", {owner:owner, spender: spender}).then((response) => {
    setResponseAllowance(response.data)  
    console.log(response.data);
    });
  };

  const transferFrom = () => {
    Axios.post("http://localhost:5000/transferFrom", {owner: owner, recipient: recipient, amount: amount}).then((response) => {
    setResponseTransferFrom(response.data.status.toString());  
    console.log(response.data.status.toString());
    });
};

return (

  <div>

    <h1 className="text-center mb-5" style={{ color: "white" }}>Milkshakes</h1>

    <div className="row">

      <div className="col-md-4">
        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Recipient
        </label>
          <input style={{ width: 245 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setRecipient(e.target.value) }} />
        </div>

        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Amount
        </label>
          <input style={{ width: 245 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setAmount(e.target.value) }} />
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-danger" type="submit" onClick={transfer}>Transfer</button>
        </div>
      </div>

      <div className="col-md-4">

        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Account
              </label>
          <input style={{ width: 268 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setAccount(e.target.value) }} />
        </div>

        <div className="text-center mt-4">
          <button style={{ width: 130 }} className="btn btn-danger" type="submit" onClick={balanceOf}>Check Balance</button>
        </div>

      </div>

      <div className="col-md-4">

        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Spender
              </label>
          <input style={{ width: 268 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setSpender(e.target.value) }} />
        </div>

        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Amount
              </label>
          <input style={{ width: 268 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setAmount(e.target.value) }} />
        </div>


        <div className="text-center mt-4">
          <button style={{ width: 130 }} className="btn btn-danger" type="submit" onClick={approve}>Approve</button>
        </div>

      </div>

    </div>

    <div className="row">

      <div className="col-md-4">
        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Owner
        </label>
          <input style={{ width: 290 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setOwner(e.target.value) }} />
        </div>
        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Recipient
        </label>
          <input style={{ width: 290 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setRecipient(e.target.value) }} />
        </div>

        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Amount
        </label>
          <input style={{ width: 290 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setAmount(e.target.value) }} />
        </div>

        <div className="text-center mt-4">
          <button style={{ width: 180 }} className="btn btn-danger" type="submit" onClick={transferFrom}>Transfer Approved</button>
        </div>
      </div>

      <div className="col-md-4">

        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Owner
              </label>
          <input style={{ width: 270 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setOwner(e.target.value) }} />
        </div>
        <div className="col-md-12">
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
            Spender
              </label>
          <input style={{ width: 270 }} type="email" id="defaultFormLoginEmailEx" className="form-control" onChange={(e) => { setSpender(e.target.value) }} />
        </div>

        <div className="text-center mt-4">
          <button style={{ width: 145 }} className="btn btn-danger" type="submit" onClick={allowance}>Check Allowance</button>
        </div>

      </div>

      <div className="col-md-4">

        <div className="col-md-12">
              <h3 style={{color:"white", marginTop: "50px", marginLeft: "-130px"}}> Account Balance: {responseBalance}</h3>
              <h3 style={{color:"white", marginLeft: "-130px"}}> Transfer Status: {responseTransfer}</h3>
              <h3 style={{color:"white", marginLeft: "-130px"}}> Approved Status: {responseApprove}</h3>
              <h3 style={{color:"white", marginLeft: "-130px"}}> Allowance: {responseAllowance}</h3>
              <h3 style={{color:"white", marginLeft: "-130px"}}> Transfer Approved Status: {responseTransferFrom}</h3>
        </div>

      </div>


    </div>

  </div>
)
};

export default App;