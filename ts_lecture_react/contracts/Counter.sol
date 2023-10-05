// SPDX-License-Identifier : MIT
pragma solidity ^0.8.13;

contract Counter {
    uint256 private value; // 상태 변수 uint 정수. 부등호가 없는 정수. 상태변수

    // 마이너스가 나올수 없음

    constructor() {}

    // function setValue(uint256 _value) public {
    //     value = _value;
    // }

    // 누르면 1증가
    function increment() public {
        value += 1;
    }

    // 누르면 1감소
    function decrement() public {
        value -= 1;
    }

    // public 접근제한자

    function getValue() public view returns (uint256) {
        return value;
    }
    // view는 읽기전용이라는 의미
}
