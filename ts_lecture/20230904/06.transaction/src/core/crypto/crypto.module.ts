class CryptoModule {
  static hashToBinary(hash: string): string {
    let binary: string = "";
    // 16진수를 2진수로 바꾸는 식
    // 해시 문자열을 2글자씩 가지고 와서 반복

    for (let i = 0; i < hash.length; i += 2) {
      // 반복문에서 i를 2씩 증가
      const hexByte = hash.substr(i, 2);
      //   16진수를 바이트
      const dec = parseInt(hexByte, 16);

      //   10진수를 2진 문자열로 반환 8자리로 패딩
      const binaryByte = dec.toString(2).padStart(8, "0"); // 변경된 부분: dec.toString(2)로 수정
      //   현재의 2진 바이트를 최종 이진 문자열에 추가
      binary += binaryByte;
    }
    return binary;
  }
}

export default CryptoModule;
