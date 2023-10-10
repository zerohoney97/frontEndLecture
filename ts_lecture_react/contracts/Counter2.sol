// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Counter2 {
    uint256 value;

    constructor() {
        value = 0;
    }

    function increment() public {
        value += 1;
    }

    function decrement() public {
        require(value != 0, "value 0 error");
        value -= 1;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
