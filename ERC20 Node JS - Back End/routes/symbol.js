require('dotenv/config');
const MyContract = require("../build/contracts/ERC20.json");
const express = require("express");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const router = express.Router();

  const symbol = async() =>{
  
    const provider = new HDWalletProvider(process.env.mnemonic, `https://ropsten.infura.io/v3/${process.env.infuraKey}`)
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  
  const Contract = new web3.eth.Contract(
  MyContract.abi,
  MyContract.networks[networkId].address
  );
  
  router.get('/',async (req,res) => {
    res.send(await Contract.methods.symbol().call((err, result) => { console.log("symbol:", result) }));
  });
  
  }
  
symbol();

  module.exports = router;