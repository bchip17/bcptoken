const BCPToken = artifacts.require("BCPToken");

contract('BCPToken', accounts => {

  beforeEach(async function () {
    InstanceBCPToken = await BCPToken.new();
  });

  it('has a name', async function () {
    const name = await InstanceBCPToken.name();
    assert.notEqual(name, "", "token name shouldn't be empty");
  });

  it('has a symbol', async function () {
    const symbol = await InstanceBCPToken.symbol();
    assert.notEqual(symbol, "", "token symbol shouldn't be empty");
  });

  it('has decimals', async function () {
    const decimals = await InstanceBCPToken.decimals();
    assert.notEqual(decimals, "", "token decimals shouldn't be empty");
  });

});