export interface Result<T> {
  isError: false;
  value: T;
}

export interface Failure<T> {
  isError: true;
  value: T;
}

export type Failable<T1, T2> = Result<T1> | Failure<T2>;
