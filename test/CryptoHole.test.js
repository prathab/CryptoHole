const BigNumber = web3.BigNumber;

const CryptoHoleToken = artifacts.require('CryptoHoleToken');

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

contract("CryptoHoleToken", function(accounts) {
    
    beforeEach(async function () {
	this.token = await CryptoHoleToken.new();
    });

    it('token should be allocated', async function() {
	await this.token.sendTransaction({ value: 100, from: accounts[0] });
	let balance = await this.token.balanceOf(accounts[0]);
	balance.should.be.bignumber.equal(1);
    });

});

