var BCPToken = artifacts.require("BCPToken");

module.exports = function(deployer) {
  // Deploy the BCPToken contract as our only task
  deployer.deploy(BCPToken);
};
