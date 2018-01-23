pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

/**
 * @title CryptoHoleToken
 * @dev CryptoHoleToken (ERC20) contract defining basic parameters of a ERC20 Token
 */

contract CryptoHoleToken is MintableToken {
  string public constant name = 'CryptoHoleToken';
  string public constant symbol = 'CHT';
  uint8 public constant decimals = 0;

  function CryptoHoleToken() public {
  }

  function () external payable {
    address recipient = msg.sender;
    if (balances[recipient] == 0) {
      mint(recipient, 1);
    }
  }
}
