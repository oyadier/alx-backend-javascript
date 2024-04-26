import Currency from './3-currency';
/**
 * A pricing of the courses obj
 */
export default class Pricing {
  /**
     *
     * @param {Number} amount
     * @param {Currency} currency
     */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  set currency(curr) {
    this._currency = curr;
  }

  /**
 *
 * @returns full display of course charges
 */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this._currency.code})`;
  }

  /**
 *
 * @param {Number} amount to ber converted
 * @param {Number} conversionRate conversion rate
 * @returns converted price
 */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}

