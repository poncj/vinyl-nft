const { ethers } = require("hardhat");
require('dotenv').config();

async function deploy() {
    const contractFactory = await ethers.getContractFactory("VinylNFT");
    const contract = await contractFactory.deploy();
    await contract.deployed();
    console.log(`Contract address: ${contract.address}`);
}

deploy().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1);
});

