// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Counter {
    uint256 value;
    constructor (){

    }
    // setter
    function setValue(uint256 _value) public{
        value=_value;
    }
    // getter
    function getValue() public view returns(uint256) {
        // view:조회하기 위한 코드를 작성할 때
        // returns(256) 함수의 반환 타입
        return value;
    }

}