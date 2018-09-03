import { extendObservable, computed } from "mobx";

export default class Project {
  constructor(data) {
    const { id, title, description, goal, currency, address, total } = data;

    extendObservable(this, {
      id,
      title,
      description,
      goal,
      currency,
      address,
      total
    })
  }

  @computed
  get isBitcoin() {
    return this.currency === 'BTC';
  }
}