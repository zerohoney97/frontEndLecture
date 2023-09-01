// class를 사용할 떄
// 유지보수를 편하게 하기 위해서 사용을 하는데

// 상품의 구조 정의
interface IProduct {
  name: string;
  price: number;
}

class Product {
  // private접근 불가 키워드
  // 직접 참조가 안되는 값
  private name: string;
  private price: number;
  private discountAmount: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.discountAmount = 0;
  }

  //   private는 키워드로 직접 참조가 안되므로 값을 확인하기 위해 get/set으로 확인

  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price - this.discountAmount;
  }
  getProducts() {
    return { name: this.name, price: this.getPrice() };
  }

  //   할인가 조정
  public set setDiscount(amount: number) {
    this.discountAmount = amount;
  }
}

const product = new Product("블록", 1000);

product.setDiscount = 200;
console.log(product.getProducts());

// 할인율이 종류가 있다고 치면

// 전략 패턴
