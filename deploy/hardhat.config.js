require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.18",
  networks: {
    tbnb: {
      url: process.env.TBNB_RPC_URL,
      accounts: [process.env.TBNB_PRIVATE_KEY],
      chainId: 97,
    }
  }
};
