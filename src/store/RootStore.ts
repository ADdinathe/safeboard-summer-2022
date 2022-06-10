import { MainStore } from './MainStore';

export default class RootStore {
  readonly mainStore = new MainStore();
}
