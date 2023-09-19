import {
  TransactionData,
  TransactionPool,
  TransactionRow,
  TxIn,
  TxOut,
  UnspentTxOut,
  UnspentTxOutPool,
} from "./transaction.interface";

// UTXO
// 각 노드의 UTXO 데이터베이스
// 각 주소별로 가지고 있는 잔액 금액을 가지고 있는 객체의 내용이 포함되어있다.

// A가B에게 1비트를 보내면
// 트랜잭션을 발생 시키고
// txIn에 이전 트랜잭션에서 남은 미사용 객체 UTXO를 참조해서(A가 얼마나 가지고 있는지 확인 잔액들)
// txOut 결과물의 UTXO 객체를 만들어놓고
// 보내는 금액보다 많이 가지고 있으면 트랜잭션을 승인
// UTXO에 결과로 생성된 잔액과 주소를 포함한 객체를 추가

class Unspent {
  // UTXO객체들 목록
  //   누가 얼마를 가지고 있는지의 내용이 배열로 담겨있다.
  //   미사용 객체들이 담겨있을 예정
  private readonly unspentTxOuts: UnspentTxOutPool = [];
  constructor() {}

  //   get UTXO의 내용을 반환하는 함수

  public get value(): UnspentTxOutPool {
    return this.unspentTxOuts;
  }

  //   미사용 객체를 txIn에서 참조할 때 객체를 조회하는데
  // 사용하고나면 객체를 값을 수정하는게 아니라 한 번도 사용하지않는 객체들이 UTXO에 담겨있고
  // 사용을 하면 제거=> 즉 미사용객체만 남게됨
  delete(txIn: TxIn) {
    const { txOutId, txOutIndex } = txIn;
    const index = this.unspentTxOuts.findIndex(
      (unspentTxOuts: UnspentTxOut) => {
        return (
          // utxo가 포함된 트랜잭션 아이디와 인덱스가 같은지 비교
          unspentTxOuts.txOutId === txOutId &&
          unspentTxOuts.txOutIndex === txOutIndex
        );
      }
    );

    // unspentTxOuts에서 찾은 값을 제거 => 즉 위에서 말한 사용한 객체를 제거한 것이다.
    if (index !== -1) {
      this.unspentTxOuts.splice(index, 1);
    }
  }

  //   새로운 객체가 생성이 되면
  //  txout정보를 가지고 utxo에 생성 목룍에 추가
  create(hash: string) {
    return (txout: TxOut, txOutIndex: number) => {
      const { amount, account } = txout;
      this.unspentTxOuts.push({
        txOutId: hash, //트랜잭션의 해쉬값!
        txOutIndex, //트랜잭션의 인덱스
        account,
        amount,
      });
    };
  }

  //   트랜잭션 업데이트 UTXO의 내용을 업데이트 하는 메서드
  update(transaction: TransactionRow) {
    // 처리되는 트랜잭션의 내용
    // txIns 입력값 누가 누구에게 송금하는지 내용 잔액확인
    // txOuts 누가 받았는지 account,amount 잔액,주소
    // hash 트랜잭션 식별자 고유값
    const { txIns, txOuts, hash } = transaction;
    if (!hash) {
      throw new Error("hash is not exist");
    }
    // 트랜잭션 출력값을 UTXO에 추가
    // 목록에 추가 미사용 객체
    txOuts.forEach(this.create(hash));
    //   사용한 객체 제거
    // UTXO목록에서 사용한 객체들은 제거
    // bind 현재 작성된 위치의 객체를 참조F
    txIns.forEach(this.delete.bind(this));
  }

  //   특정 계정 (account)에 객체를 UTXO에서 목록을 조회
  getUTXO(account: string): UnspentTxOut[] {
    // 계정의 잔액의 정보를 가지고 있는 객체를 모두 조회하는 함수
    const myUnspentTxOuts = this.unspentTxOuts.filter((utxo) => {
      // utxo에 있는 요소들을 순회하면서
      // account가 찾는 account매개변수 값이랑 같으면
      return utxo.account === account;
    });
    return myUnspentTxOuts;
  }
  //   특정 계정의 잔액 금액의 총합을 조회하는 메서드
  getAmount(myUnspentTxOuts: UnspentTxOut[]) {
    //
    return myUnspentTxOuts.reduce((acc, utxo) => {
      // 초기값으 0으로 매개변수 두번째로 전달
      // 첫번째 매개변수로 콜백함수
      // 콜백함수의 첫번째 매개변수는 누적값 순회하고 변환 누적값
      // 콜백함수의 두번째 매개변수는 현재 순회하는 요소
      //   값의 합을 내보낸것
      return acc + utxo.amount;
    }, 0);
  }

  //   주어진 계정의 잔고가 보내는 금액보다 큰지 검증
  isAmount(account: string, sendAmount: number) {
    // 내 주소와 잔액 정보가 있는 사용하지 않은 객체 조회(배열)
    const myUnspentTxOuts = this.getUTXO(account);
    // totalAmount 총 잔액
    const totalAmount = this.getAmount(myUnspentTxOuts);

    // 계정의 총 잔고가 보내는 금액보다 크면 true
    // 아니면 false로 못 보냄
    if (totalAmount > sendAmount) {
      return true;
    }
    return false;
  }
}

export default Unspent;
