// Install dependencies:
// npm init
// npm install --save-dev dotenv truffle-wallet-provider ethereumjs-wallet

// Create .env in project root, with keys:
// ROPSTEN_PRIVATE_KEY="123abc"
// MAINNET_PRIVATE_KEY="123abc"

require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex")
var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");

var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraProjectId = process.env["INFURA_API_KEY"] || "api_key_123";
const mnemonic =
  process.env["MNEMONIC"] ||
  "test test test test test test test test test test test junk";
module.exports = {
  networks: {
		dev: { // Whatever network our local node connects to
			network_id: "*", // Match any network id
			host: "localhost",
			port: 8545,
		},
		
		// ropsten
		ropsten: {
			provider: () =>
			new HDWalletProvider(
				mnemonic,
				`https://ropsten.infura.io/v3/${infuraProjectId}`
			),
			network_id: 3, // Ropsten's id
			gas: 5500000, // Ropsten has a lower block limit than mainnet
			confirmations: 2, // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: false, // Skip dry run before migrations? (default: false for public nets )
		},
		ganache: { // Ganache local test RPC blockchain
			network_id: "5777",
			host: "localhost",
			port: 7545,
			gas: 6721975,
		}
	},
	compilers: {
	  solc: {
		version: "^0.6.2"
	  }
	}
};
