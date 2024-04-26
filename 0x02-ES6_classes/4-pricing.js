import Currency from './3-currency';
/**
 * A pricing of the courses obj
 */
class Pricing {
  /**
     *
     * @param {Number} amount
     * @param {Currency} currency
     */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  /**
 *
 * @returns full display of course charges
 */
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  /**
 *
 * @param {Number} amount to ber converted
 * @param {Number} conversionRate conversion rate
 * @returns converted price
 */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
export default Pricing;
