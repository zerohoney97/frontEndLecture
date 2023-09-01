// 할인
interface Discount {
  // 함수만 선언
  getDiscountPrice(price: number): number;
}

// 가격만 수정하는 할인
class FlatDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  getDiscountPrice(price: number): number {
    return price - this.amount;
  }
}

// 할인으로 가격 수정
class PercentDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  getDiscountPrice(price: number): number {
    return price * (1 - this.amount / 100);
  }
}

// 둘 다 있음
class FlatPercentDiscount implements Discount {
  private flatAmount: number;
  private percent: number;
  constructor(flatAmount: number, percent: number) {
    this.flatAmount = flatAmount;
    this.percent = percent;
  }
  getDiscountPrice(price: number): number {
    const flatDiscountAmount = price - this.flatAmount;
    return flatDiscountAmount * (1 - this.percent / 100);
  }
}

// 할인의 기능에 대한 유지보수가 좋아진다.
// 클래스 하나만 더 추가하면 되는것

class Products {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public get getName(): string {
    return this.name;
  }

  public get getPrice(): number {
    return this.price;
  }
}

class ProductDiscount {
  private product: Products;
  private discount: Discount;
  constructor(product: Products, discount: Discount) {
    this.product = product;
    this.discount = discount;
  }

  public get getPrice(): number {
    console.log(this.discount.getDiscountPrice(this.product.getPrice));
    return 1;
  }
}

const _product = new Products("mac", 100000);
const _product2 = new Products("window", 2000);

const ProductDiscount2 = new PercentDiscount(10);
const ProductDiscount3 = new FlatDiscount(1000);
const ProductDiscount4 = new FlatPercentDiscount(1000, 10);

const productWithDisCount = new ProductDiscount(_product, ProductDiscount2);


console.log(productWithDisCount.getPrice);
