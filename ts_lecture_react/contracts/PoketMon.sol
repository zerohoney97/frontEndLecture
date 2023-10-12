// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./PERC20.sol";

contract Poketmon is PERC20 {
    constructor() PERC20("Poketmon", "PKT", 10000) {}

    // 포켓몬 객체를 만들 것
    // 이 객체 하나가 포켓몬의 데이터

    struct Pokets {
        string url;
        string name;
    }

    // 포켓몬 빵 구매한 사람들의 주소를 담아놓을 것
    struct Users {
        address account;
    }

    // ERC20 토큰을 지불해서 포켓몬 빵을 하나 사는것
    // 빵하나에 얼마?

    // 단위 하나를 이더로 지정 10**18 소수점 단위
    // 가격이 1000토큰
    uint256 private tokenPrice = 1000 ether;

    // 우리가 포켓몬 빵을 사면 랜덤란 스티커가 들어있는데
    // 배열에 나올 수있는 포켓몬의 이름을 선언 해두자
    // 한글을 사용하려면 유니코드 작성해야함... 영어로 쓰자

    string[] poketmonName = ["pikachu", "kobuk", "Charmander"];

    // 포켓몬 이쁜 이미지를 담아놓을 배열
    string[] poketmonUrl = [
        "https://static.wikia.nocookie.net/pokemon/images/8/8e/%EB%94%B0%EB%9D%BC%ED%81%90_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170804054502&path-prefix=ko",
        "https://media.bunjang.co.kr/product/208341180_1_1691548729_w180.jpg",
        "https://i1.ruliweb.com/img/19/11/08/16e49e9f1ff509386.jpg"
    ];
    // 구매하면 한개를 얻는데
    // 또 사면 두개
    mapping(address => Pokets[]) public poketmons;

    // 한 번이라도 포켓몬 빵을 구매한 사람들의 주소를 가지고 있는 Users 객체

    Users[] public users;

    // 지갑 주소가 가지고있는 포켓몬 조회
    function getPoketmon() public view returns (Pokets[] memory) {
        return poketmons[msg.sender];
    }

    function getPoketmonUsers() public view returns (Users[] memory) {
        return users;
    }

    // 포켓몬 거래 함수
    function tradePoketmon(
        address to,
        string memory tradePoketmonName
    ) public returns (bool) {
        Pokets[] memory tempPoketArr = poketmons[msg.sender];
        string memory tradePoketmon;
        for (uint256 index = 0; index < tempPoketArr.length; index++) {
            if (
                keccak256(abi.encodePacked(tempPoketArr[index].name)) ==
                keccak256(abi.encodePacked(tradePoketmonName))
            ) {
                string memory name = poketmons[msg.sender][index].name;
                string memory url = poketmons[msg.sender][index].url;

                poketmons[to].push(Pokets(url, name));
                if (index < poketmons[msg.sender].length - 1) {
                    poketmons[msg.sender][index] = poketmons[msg.sender][
                        tempPoketArr.length - 1
                    ];
                }
                poketmons[msg.sender].pop();
                // 로직
            }
        }
        return true;
    }

    // function getUsersWhoHaveDrawn() public view returns(Users[] memory){
    //      Users[] memory tempUser;
    // for(uint i=0;i<users.length;i++){
    //     if(users[i].length !=0){
    //         tempUser.push(users[i]);
    //     }
    // }
    // return tempUser;

    // }

    function buyPoketmon() public {
        require(balance[msg.sender] >= tokenPrice);
        balance[msg.sender] -= tokenPrice;
        totalSupply -= tokenPrice;

        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, block.coinbase, block.number)
            )
        );
        random = uint(random % 3); //0~3까지의 랜덤값

        // Pokets구조체 형태로 객체를 만들어서 배열에 푸쉬
        poketmons[msg.sender].push(
            Pokets(poketmonUrl[random], poketmonName[random])
        );
        // 유저가 포켓몬 빵을 한 번 산적이 있는지
        bool isUser = false;
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].account == msg.sender) {
                isUser = true;
                break;
            }
        }

        if (!isUser) {
            users.push(Users(msg.sender));
        }
    }
}
