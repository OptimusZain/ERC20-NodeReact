require('dotenv/config');
const MyContract = require("../build/contracts/ERC20.json");
const express = require("express");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const router = express.Router();

 const approve = async() =>{
  
    const provider = new HDWalletProvider(process.env.mnemonic, `https://ropsten.infura.io/v3/${process.env.infuraKey}`)
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  
  const Contract = new web3.eth.Contract(MyContract.abi, MyContract.networks[networkId].address);
  
  router.post('/', async (req,res) => {
    const acc = await web3.eth.getAccounts();
    // console.log(acc);
    res.send(await Contract.methods.approve(req.body.spender, req.body.amount).send({from : acc[0]}));
    });
  
  }
  
approve();
  module.exports = router;
  