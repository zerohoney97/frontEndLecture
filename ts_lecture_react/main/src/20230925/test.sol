// SPDX-License-Identifier:MIT

pragma solidity ^0.8.13;

contract Counter {
    uint256 value;

    constructor() {}

    function getValue() public view returns (uint256) {
        return value;
    }

    function setValue(uint256 _value) public {
        value = _value;
    }

    function subValue() public {
        value -= value;
    }
}
