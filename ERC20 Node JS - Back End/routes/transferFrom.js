require('dotenv/config');
const MyContract = require("../build/contracts/ERC20.json");
const express = require("express");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const router = express.Router();

  const transferFrom = async() =>{
  
    const provider = new HDWalletProvider(process.env.mnemonic, `https://ropsten.infura.io/v3/${process.env.infuraKey}`)
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  
  const Contract = new web3.eth.Contract(MyContract.abi, MyContract.networks[networkId].address);
  
  router.post('/', async (req,res) => {
    const acc = await web3.eth.getAccounts();
    console.log(acc[1]);
    res.send(await Contract.methods.transferFrom(req.body.owner, req.body.recipient, req.body.amount).send({from : acc[1]}).catch((err) => { console.log("message:" ,err) })
  )});
  
    // console.log(MyContract.networks[networkId].address);
  }
  
transferFrom();
  module.exports = router;
  