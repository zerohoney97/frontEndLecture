// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IPERC20.sol";

// 0x37d4fD7Bfc602e59FE9f96D6a0649D13c95294ad
contract PERC20 is IERC20 {
    // 토큰의 이름
    string public name;
    // 토큰의 단위
    string public symbol;

    // 토큰의 소수점 자리 18 자리로 구성
    uint8 public decimals = 18;

    // 토큰의 현재 총 발행량
    uint public override totalSupply;

    address private owner;

    // CA 주소로 이더가 전송이 되었을 때 실행시키고 싶은 동작이 있어
    // 익명함수
    // receive (익명함수) 특별한 함수
    // CA에 이더를 받으면 자동으로 실해되는 메서드
    // 이더를 CA에 전송 받았을 때 동작을 추가 할 수 있다.

    receive() external payable {
        // 이더를 CA가 받았을 때 실행되는 동자
        // 배포자가 토큰의 발행량을 관리하고
        // 다른 이용자들이 토큰을 가지고 싶으면
        // 컨트랙트 배포자가 정한 비율에 따라 토큰을 가져갈 수 있게

        // 소유권을 줄 토큰의 양
        // 받은 이더 비율로 1이더*200개의 토큰
        uint amount = msg.value * 200;

        require(balance[owner] >= amount);
        balance[owner] -= amount;
        balance[msg.sender] += amount;
        // 만약에 토큰을 다 소유권을 넘겨서 배포자가 들오있는 토큰이 없다.
        // 만약 배포가 이더를 보냈다면 토큰을 발행 할 수 있게

        if (msg.sender == owner) {
            mint(amount);
        }
    }

    // 컨트랙트 생성자
    constructor(string memory _name, string memory _symbol, uint256 _amount) {
        owner = msg.sender;
        name = _name;
        _symbol = symbol;
        mint(_amount * (10 ** uint256(decimals)));
    }

    mapping(address => uint) public balance;

    mapping(address => mapping(address => uint)) public override allowance;

    function mint(uint amount) internal {
        balance[msg.sender] += amount;
        totalSupply += amount;
    }

    function balanceOf(address account) external view override returns (uint) {
        return balance[account];
    }

    function transfer(
        address to,
        uint amount
    ) external override returns (bool) {
        balance[msg.sender] -= amount;
        balance[to] += amount;
        return true;
    }

    function chargeToken() public payable {
        address CA = address(this);
        address payable _to = payable(CA);
        _to.transfer(msg.value);
    }

    function approve(
        address spender,
        uint amount
    ) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transferFrom(
        address sender,
        address to,
        uint amount
    ) external override returns (bool) {
        require(allowance[sender][msg.sender] >= amount);
        allowance[sender][msg.sender] -= amount;
        balance[sender] -= amount;
        balance[to] += amount;
        return true;
    }

    function burn(uint amount) external {
        balance[msg.sender] -= amount;
        totalSupply -= amount;
    }
}
