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
	await this.token.sendTransaction({ value: 100, from: accounts[0] });
	let balance = await this.token.balanceOf(accounts[0]);
	balance.should.be.bignumber.equal(1);
    });

});

