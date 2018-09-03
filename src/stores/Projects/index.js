import { observable, action, computed } from "mobx";
import Project from './model';

// store
// get, post, delete
// selectores o computed values (cuantos completos, cuantos completos el día de hoy)
// maneja las instancias de ./model

export default class ProjectStore {
  @observable
  state = {
    list: [],
    selected: null,
    error: false,
    busy: false,
  }

  @action
  add(data) {
    const created = new Project(data);
    this.state.list.push(created);
    return created;
  }

  @action
  setBusy(value) {
    this.state.busy = value;
  }

  @action
  setError(value) {
    this.state.error = value;
  }

  @computed
  get projectsLength() {
    return this.state.list.length;
  }

  // Functions that do not alter the state.
  findAll() {
    this.setBusy(true);
    this.setError(false);

    fetch('mock/projects.json')
      .then(res => res.json())
      .then(data => data.map(project => {
        return this.add(project);
      }))
      .catch((err) => {this.setError(true)})
      .finally(() => this.setBusy(false));
  }
}