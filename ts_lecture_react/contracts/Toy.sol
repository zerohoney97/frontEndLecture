// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./PERC20.sol";

contract Toy {
    address private owner;
    mapping(address => Product[]) userProductInfo;
    struct Product {
        uint256 cost;
        string name;
    }

    constructor() {
        userProductInfo[msg.sender].push(Product(100, "trust"));
        userProductInfo[msg.sender].push(Product(200, "hope"));
        userProductInfo[msg.sender].push(Product(300, "love"));
        owner = msg.sender;
    }

    function getProductList() public view returns (Product[] memory) {
        return userProductInfo[msg.sender];
    }

    function setProductList(string memory _name, uint256 cost) public {
        userProductInfo[msg.sender].push(Product(cost, _name));
    }
}
