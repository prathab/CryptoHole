const BigNumber = web3.BigNumber;

const CryptoHole = artifacts.require('CryptoHole');

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

contract("CryptoHole", function(accounts) {
    
    beforeEach(async function () {
	this.token = await CryptoHole.new();
    });

    it('token should be allocated', async function() {
	for (let i = 0; i < 10; ++i) {
	    await this.token.sendTransaction({ value: (i + 1) * 100, from: accounts[i] });
	    let balance = await this.token.balanceOf(accounts[i]);
	    balance.should.be.bignumber.equal(1);
	}
    });

});

