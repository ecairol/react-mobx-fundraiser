import { extendObservable, computed } from "mobx";

export default class Project {
  constructor(data) {
    const { id, title, description, goal, currency, address } = data;

    extendObservable(this, {
      id,
      title,
      description,
      goal,
      currency,
      address,
    })
  }

  @computed
  get isBitcoin() {
    return this.currency === 'BTC';
  }
}