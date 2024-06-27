export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Setter and getter for code
  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  // Setter and getter for name
  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  dsiplayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
