// SPDX-License-Identifier : MIT
pragma solidity ^0.8.13;

import "./Counter.sol";

contract Counter2 {
    uint256 value; // 상태 변수 uint 정수. 부등호가 없는 정수. 상태변수
    // 마이너스가 나올수 없음
    Counter counter; // Counter 컨트랙트의 구조를 가지고있는 counter 상태변수

    constructor() {
        // Counter 인스턴스를 하나 생성
        counter = new Counter();
    }

    function setValue(uint256 _value) public {
        value = _value;
        counter.setValue(_value);
    }

    // public 접근제한자

    function getValue() public view returns (uint256) {
        return value;
    }

    // view는 읽기전용이라는 의미

    function getValue2() public view returns (uint256) {
        return counter.getValue();
    }
}
