# 솔리디티

1. 절차적 프로그래밍 언어
2. 컴파일 언어

# SPDX License Identifier

- 스마트 컨트랙트 신뢰성
- 저작권 문제를 방지하기 위해 코드 최상단에 주석으로 표시, 작성함

# Pragma

- 컴파일러의 기능을 사용하기 위해 작성하는 구문
- 솔리디티 버전 작성 명시

# Contract

- 객체 지향 언어의 class와 유사
- contract의 내부에 상태 변수를 보관
- 상태변수를 조회 또는 변경을 하기 위한 함수도 포함을 하고 있음.

# 솔리디티 코드를 작성할때

## import

- 외부 파일의 코드를 가져올 수 있음(모듈화)
- export 할 필요 없음. 선언한 Contract를 바로 사용 가능

```javascript
import "파일 경로";
import {"Contract이름"} from "파일 경로";

```

# 상태 변수

- Contract 내부에 선언한 변수
- Contract storage에 저장

1. Storage : 블록체인에 기록되는 영구적인 값이 유지되는 공간
2. Memory : 프로그램이 동작하는 동안에만 값을 기억, 동작하고 종료되면 해제시키는 데이터 공간(function등)

# 데이터의 타입

```javascript
contract Counter{
    // 상태변수 선언
    // [타입] [변수명]
    bool _bool;
    // 기본 true
    // 참과 거짓의 값을 저장하는 변수

    uint256 _ uint;
    // uint 부호가 없는 정수형, -(마이너스)가 안붙는 정수. 음수가 될 수 없음.
    // 정수형 타입 uint는 uint 자료형 뒤에 숫자를 붙이면 메모리 영역의 크기를 지정할수 있음.

    int256 _int;
    // 부호가 있는 정수형 -(마이너스)가 붙을수 있음. 음수가 될 수 있음.
    // 정수형 타입 int는 int자료형 뒤에 숫자를 붙이면 메모리 영역의 크기를 지정할 수 있음.

    // int, uint의 데이터 범위를 지정할 수 있는 이유는 작업을 할때 어떤 코드를 작성하느냐에 따라 효율적으로 데이터 공간을 줄이기 위해서임.
    // 8 ~ 256 bit 까지 지원을 하고

    /*
    예)
    int8 === -128 ~ 127
    uint8 === 0 ~ 255

    enum
    개발자가 가독성 높이기 위해서 사용하는 자료형
    상수를 사용하면서 가독성을 높이기 위해서 사용
    */
    enum Status{
        Pending, // 0
        Accepted,// 1
        Rejected,// 2
    }

    // status 초기값은 0
    Status public status;
    // status.Pending === 0
    // status.Accepted === 1
    // status.Rejected === 2

    // enum의 상태를 조회
    function get() public view returns (Status){
        return status
    }

    // enum의 상태를 변경
    function set(Status _status) public {
        status = _status;
    }

    // string 문자열 자형
    string Str='hello sol';
    // address주소형
    // 우리가 지갑을 만들 때 봤던 주소
    // 주소의 크기는 20바이트 크기의 자료형 컨트랙트 주소를 저장할 때 사용하는 변수
    address sender=0x742d35Cc6634C0532925a3b844Bc454e4438f44e;


    // sender.balance===해당 주소의 이더 잔액을 조회 할수 있다.
    // sender.transfer('얼마')
    // sender.send('보낼 금액')
    // balance property가 있어서 주소의 이더 잔액을 확인 가능하다.
    // 메서드 transfer,send 메서드를 사용해서
    // 이더 전송 가능

    // 배열의 타입
    // 배열의 크기가 실행중에 변경 가능
    string[] strArr=['1','2','3']

    // 배열의 크기 지정
    // 배열의 크기가 선언시 지정이 된다.
    string[2] strArr2=['1','2']

    // 구조체 struct
    struct Struct{
        string name;
        uint number;
    }
    // 구조를 정의

    // 매핑 key-value 키와 값을 저장할 때 사용하는 데이터 타입
    mapping(address => uint256) tokens;
    tokens{
        address:10000
    }
    // adress가 key
    // uint256가 value

    mapping(string=>mapping(address=>uint256))token2;
    // string이 key
    // mapping(address=>uint256)가 value
    // address가 key
    // uint256이 value
    tokens2{
        string:{
            address:10000,
            address2:10000
        }, string2:{
            address:10000,
            address2:10000
        }
    }
    // 글로벌 변수
    function a(address payable _to) public payable{
        // address payable 선언식
        // 매개변수 이름 _to


        // payable:이더리움을 보낼건지,결제를 할건지 결제 처리를 한다는 처리문

        // 이더리움 블록체인 정보
        // block
        block.coinbase; // 현재 블록을 채굴한 account의 주소
        block.difficulty; //현재 블록의 난이도
        block.gaslimit; //현재 블록이 사용가능한 최대 가스 값
        block.number; // 블록의 높이
        block.timestamp //블록 생성 시간

        // msg 컨트랙트에서 message call했을 때 컨트랙트에 전달된 메시지 정보를 가지고 있는 객체
        msg.sender // 컨트랙트를 호출한 account의 주소
        msg.value // 메시지로 전달받은 이더리움의 단위가 wei단위로 담겨있음
        msg.data; //컨트랙트 call로 실행할 때 보낸 데이터의 내용
        msg.sig; //전달받은 데이터의 첫 4바이트 === 어떤 메소드를 실행시켰는지 확인

        // address
        _to.balance ; //잔고
        uint.amount=10**18;
        _to.transfer(amount) //이더를 해당 주소에 보냄
        _to.send(amount)//이더를 해당 주소에 보냄

    }
    // 함수의 구조
    function name(uint a) public view returns (uint){

    }
    // name:함수명
    // uint a:타입 매개변수 이름
    // public: 함수의 접근자
    // 접근자의 타입
    // 1.public : 외부에서 호출이 가능 외부 컨트랙트나 계정에서 호출 가능 EOA나 CA에서 호출이 가능하다는 얘기
    // 2. private: 컨트랙트 내부(함수 등)에서만 접근 가능
    // 3.Internal:내부 함수는 컨트랙트에서 접근을 할 수 있고 외부x =>다른 컨트랙트에서 상속받아서는 호출 가능하다.


}
```
