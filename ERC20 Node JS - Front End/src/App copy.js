import React from "react";
//import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const app = () => {
  return (


    <div>

      <h1 className="text-center mb-4">Milkshakes</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" className="text-center">
              Recipient
        </label>
            <input style={{ width: 200 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="col-md-12">
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Amount
        </label>
            <input style={{ width: 200 }} type="email" id="defaultFormLoginEmailEx" className="form-control" />
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-danger" type="submit">Transfer</button>
          </div>

        </div>
      </div>
    </div>
  )

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


};

export default app;