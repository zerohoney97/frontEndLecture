// SPDX-License-Identifier:MIT

pragma solidity ^0.8.13;

contract Lotto {
    constructor() {}

    uint256[] public lottoArr;

    function setLottoArr(
        uint256 _lottoNum1,
        uint256 _lottoNum2,
        uint256 _lottoNum3,
        uint256 _lottoNum4,
        uint256 _lottoNum5,
        uint256 _lottoNum6
    ) public {
        lottoArr = [
            _lottoNum1,
            _lottoNum2,
            _lottoNum3,
            _lottoNum4,
            _lottoNum5,
            _lottoNum6
        ];
    }

    function getLottoArr() public view returns (uint256[] memory) {
        return lottoArr;
    }
}
