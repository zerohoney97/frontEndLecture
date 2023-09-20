import {
  TransactionData,
  TransactionPool,
  TransactionRow,
  TxIn,
  TxOut,
  UnspentTxOut,
  UnspentTxOutPool,
} from "./transaction.interface";
import { SignatureInput } from "elliptic";
import { SHA256 } from "crypto-js";
import Unspent from "./unspent";

// 보내는 사람의 타입 구조 정의
class Sender {
  account: string; //보낼 사람의 계정 주소
}

// 영수증
// 누가 누구에게 보냈는지의 내용을 가지고 있는 객체구조 정의
export class Receipt {
  sender: Sender; //보내는 사람의 정보
  received: string; //받는 사람의 계정
  amount: number; //보낸 금액
  signature: SignatureInput; //서명 정보
}

class Transaction {
  // 블록 채굴을 하면
  // 블록 생성 권한을 얻고
  // 트랜잭션을 처리하는데
  // 첫번째 트랜잭션으로 트랜잭션이 하나 추가되는데
  // 특수한 트랜잭션이 블록의 첫번째로 추가되는데
  // 채굴한 사람의 주소 전달되는 금액 보상이 들어간다.
  private readonly REWARD = 50; // 코인 베이스 트랜잭션 보상
  private readonly transactionPool: TransactionPool = []; //트랜잭션이 처리되지않은 내용이 있는 공간

  constructor() {}

  //   트랜잭션 목록을 확인 조회하는 함수

  public get getPool() {
    return this.transactionPool;
  }

  //   트랜잭션 추가
  create(receipt: Receipt, unspentTxOuts: UnspentTxOut[]) {
    // 트랜잭션의 output 내용의 객체를 UTXO에 추가
    // 서명을 확인을 하고
    if (!receipt.signature) throw new Error("서명이 정상적이지 않다.");

    // 잔액계산
    const [txIns, amount] = this.createInput(
      unspentTxOuts,
      receipt.amount,
      receipt.signature
    );
    // 출력 트랜잭션 객체를 생성
    const txOuts = this.createOutPut(
      receipt.received,
      receipt.amount,
      receipt.sender.account,
      amount
    );

    const transaction: TransactionRow = {
      txIns, //누가 누구에게 전송한 금액의 내용이 포함되어 있고 잔액 확인
      txOuts, // 최종적으로 결과물, 누구의 주소에 얼마가 포함되는지 객체가 생성
    };
    // 트랜잭션 객체에 hsah값 추가
    transaction.hash = this.serializeRow(transaction);

    this.transactionPool.push(transaction);
    // 바로 트랜잭션이 처리되는게 아니라 pool에 담고
    // 대기상태로 있다가 블록이 채굴되면 검증하고 승인이 되면 트랜잭션을 처리하고 하나의 블록에
    // 여러개의 트랜잭션 내용을 기록한다
    return transaction;
  }

  createInput(
    myUnspentTxOuts: UnspentTxOut[],
    receiptAmount: number,
    signature: SignatureInput
  ): [TxIn[], number] {
    // 0 보다 큰지 비교
    let targetAmount = 0;
    const txIns = myUnspentTxOuts.reduce(
      (acc: TxIn[], unspentTxOut: UnspentTxOut) => {
        // 현재 순회하는 요소(본인의 미서용 객체 UTXO)의 잔액과 포함된 트랜잭션 hash값 포함된 트랜잭션 index를 구조분해 할당
        const { amount, txOutId, txOutIndex } = unspentTxOut;

        // 검증 혹시나 0을 보내면
        if (targetAmount >= receiptAmount) {
          return acc;
        }
        targetAmount += amount;
        acc.push({ txOutIndex, txOutId, signature });
        return acc;
      },
      [] as TxIn[]
      //   type 추론이 안됨 TxIn[]인지
      // TxIn[]일거라 커스텀 추론
    );
    return [txIns, targetAmount];
  }

  createOutPut(
    received: string,
    amount: number,
    sender: string,
    sendAmount: number
  ) {
    // amount 받은 사람의 금액(얼마를 받았는지)
    // sendAmount 보낸사람의 잔액
    // console.log(received, amount, sendAmount, sender);
    const txOuts: TxOut[] = [];
    // txOut 받는사람, 얼마를 받았는지
    // 이에 대한 객체 생성
    txOuts.push({
      account: received,
      amount,
    });
    // 잔액은 보낸사람으로 다시 새로운 객체를 만들어서 목록에 추가
    if (sendAmount - amount > 0) {
      txOuts.push({ account: sender, amount: sendAmount - amount });
    }
    // 잔액을 비교해서 검증
    const outAmount = txOuts.reduce((acc, txOut: TxOut) => {
      return acc + txOut.amount;
    }, 0);
    // 전체 금액 검증
    // 내가 가지고 있는 금액에서
    // 보낸값과 내가 다시 남은 잔액이
    // 총금액과 같은지 검증
    if (outAmount !== sendAmount) {
      throw new Error("금액이 안 맞음");
    }
    return txOuts;
  }

  serializeTxOut(txOut: TxOut): string {
    // 출력 트랜잭션을 문자열로 반환
    const { account, amount } = txOut;
    const text = [account, amount].join("");
    return SHA256(text).toString();
  }

  serizlizeTxIn(txIn: TxIn): string {
    // 입력 트랜잭션을 문자열로 반환
    const { txOutIndex } = txIn;
    const text = [txOutIndex].join("");

    return SHA256(text).toString();
  }

  //  트랜잭션을 직렬화한 문자열로 반환
  serializeTx<T>(data: T[], callback: (item: T) => string) {
    // 데이터를 배열로 문자열 반환
    return data.reduce((acc: string, item: T) => {
      // acc는 초기값에 ''배열 수만큼 반복시키면서 callback함수 반환값 문자열로 계속 더해서 긴문자로 반환
      return acc + callback(item);
    }, "");
  }
  //   트랜잭션 row를 전부 직렬화 해서 반한할 함수
  serializeRow(row: TransactionRow) {
    const { txIns, txOuts } = row;
    // 직렬화된 문자열로 변환
    const txOutsText = this.serializeTx<TxOut>(txOuts, (item) => {
      return this.serializeTxOut(item);
    });
    const txInsText = this.serializeTx<TxIn>(txIns, (item) => {
      return this.serizlizeTxIn(item);
    });
    return SHA256(txOutsText + txInsText).toString();
  }
  //   블록을 채굴하면 채굴자가
  // 블록의 채굴 보상을 받는데
  // 특수한 트랜잭션이 생성
  // 블록의 첫번째로 기록이 되는데
  // 코인 베이스 트랜잭션
  // 채굴자의 주소와 보상이 제공된다.
  createCoinBase(account: string, latestBlockHeight: number) {
    // 채굴자일 경우에는 트랜잭션 해시가 없고 서명도 없기 때문에
    const txIn = this.createTxIn(latestBlockHeight + 1);
    const txOut = this.createTxOut(account, this.REWARD);
    return this.createRow([txIn], [txOut]);
  }

  createRow(txIns: TxIn[], txOuts: TxOut[]) {
    // txIns,txOuts
    // 문자열로 반환 해시값으로 반환
    const transactionRow = new TransactionRow();
    transactionRow.txIns = txIns;
    transactionRow.txOuts = txOuts;
    transactionRow.hash = this.serializeRow(transactionRow);
    return transactionRow;
  }

  createTxIn(
    txOutIndex: number,
    txOutId?: string,
    signature?: SignatureInput
  ): TxIn {
    // 단순하게 입력 트랜잭션 생성
    const txIn = new TxIn();
    txIn.txOutIndex = txOutIndex;
    txIn.txOutId = txOutId;
    txIn.signature = signature;
    return txIn;
  }
  createTxOut(account: string, amount: number): TxOut {
    //받는 계정 주소랑 출력 트랜잭션 생성
    if (account.length !== 40) {
      throw new Error("정상적인 계좌가 아닙니다.");
    }
    const txOut = new TxOut();
    txOut.account = account;
    txOut.amount = amount;
    return txOut;
  }

  //   트랜잭션 pool 업데이트
  update(transaction: TransactionRow, utxo: Unspent) {
    const findCallBack = (tx: TransactionRow) => transaction.hash == tx.hash;
    const index = this.transactionPool.findIndex(findCallBack);
    if (index !== -1) {
      console.log("업데이트 완");
      // 트랜잭션이 대기목록에서 사라졌으므로 해당하는 UTXO데이터를 업데이트
      utxo.update(this.transactionPool[index]);
      console.log(this.transactionPool[index]);
      this.transactionPool.splice(index, 1);
    }
  }

  //   트랜잭션 목록 업데이트
  sync(transaction: TransactionData, utxo: Unspent) {
    if (typeof transaction === "string") {
      return;
    }

    transaction.forEach((transaction: TransactionRow) => {
      this.update(transaction, utxo);
    });
  }
}

export default Transaction;
