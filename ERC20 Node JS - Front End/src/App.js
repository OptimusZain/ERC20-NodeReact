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

  const Transfer = () => {
    Axios.post("", {}).then((response) => {
      console.log(response);
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
            <input style={{ width: 245 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Amount
        </label>
            <input style={{ width: 245 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-danger" type="submit">Transfer</button>
          </div>
        </div>

        <div className="col-md-4">

          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Account
              </label>
            <input style={{ width: 268 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="text-center mt-4">
            <button style={{ width: 130 }} className="btn btn-danger" type="submit">Check Balance</button>
          </div>

        </div>

        <div className="col-md-4">

          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Spender
              </label>
            <input style={{ width: 268 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Amount
              </label>
            <input style={{ width: 268 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>


          <div className="text-center mt-4">
            <button style={{ width: 130 }} className="btn btn-danger" type="submit">Approve</button>
          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-4">
          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Owner
        </label>
            <input style={{ width: 290 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>
          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Recipient
        </label>
            <input style={{ width: 290 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Amount
        </label>
            <input style={{ width: 290 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="text-center mt-4">
            <button style={{ width: 180 }} className="btn btn-danger" type="submit">Transfer Approved</button>
          </div>
        </div>

        <div className="col-md-4">

          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Owner
              </label>
            <input style={{ width: 270 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>
          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ color: "white" }}>
              Spender
              </label>
            <input style={{ width: 270 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="text-center mt-4">
            <button style={{ width: 145 }} className="btn btn-danger" type="submit">Check Allowance</button>
          </div>

        </div>

      </div>

    </div>
  )
};

export default App;