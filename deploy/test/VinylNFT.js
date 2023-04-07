const { ethers } = require("hardhat");
const { assert, expect } = require("chai");


describe("VinylNFT", async function () {
  let contractFactory, contract;
  beforeEach(async function(){
    contractFactory = await ethers.getContractFactory("VinylNFT");
    contract = await contractFactory.deploy();
  });

  it("Deployed contract name is VinylNFT", async function(){
    const name = await contract.name(); 
    assert.equal("VinylNFT", name);
  });

  it("Symbol is VNFT", async function(){
    const symbol = await contract.symbol();
    assert.equal("VNFT", symbol);
  });

  it("Init totalSupply is 0", async function(){
    const totalSupply = await contract.totalSupply();
    assert.equal(0, totalSupply);
  });
});
