pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/StandardToken.sol";

/**
 * @title CryptoHole
 * @dev CryptoHole (ERC20) contract defining basic parameters of a ERC20 Token
 */

contract CryptoHole is StandardToken {
  string public constant name = 'CryptoHole';
  string public constant symbol = 'CRH';
  uint8 public constant decimals = 0;

  function CryptoHoleToken() public {
  }

  function () public payable {
    address recipient = msg.sender;
    totalSupply = totalSupply.add(1);
    balances[recipient] = balances[recipient].add(1);
    Transfer(address(0), recipient, 1);
  }
}
