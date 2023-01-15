import { EnumValueObject } from '@risotto/value-objects';
import { InvalidArgumentError } from '@risotto/value-objects/exceptions';

export enum OrderTypes {
  ASC = 'ASC',
  DESC = 'DESC',
  NONE = 'NONE',
}

export class OrderType extends EnumValueObject<OrderTypes> {
  constructor(value: OrderTypes) {
    super(value, Object.values(OrderTypes));
  }

  static fromValue(value: string): OrderType {
    switch (value) {
      case OrderTypes.ASC:
        return new OrderType(OrderTypes.ASC);
      case OrderTypes.DESC:
        return new OrderType(OrderTypes.DESC);
      default:
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }
  }

  isNone(): boolean {
    return this.value === OrderTypes.NONE;
  }

  isAsc(): boolean {
    return this.value === OrderTypes.ASC;
  }

  isDesc(): boolean {
    return this.value === OrderTypes.DESC;
  }

  protected throwErrorForInvalidValue(value: OrderTypes): void {
    throw new InvalidArgumentError(`The order type ${value} is invalid`);
  }
}
