// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../main/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PepeToken is ERC20{

    constructor ()ERC20('PepeToken','PEPE'){
        _mint(msg.sender,10000*10**decimals());
    }
}