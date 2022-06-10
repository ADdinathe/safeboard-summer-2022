import { MainStore } from './MainStore';

import rootStore from './instanse';

export function useMainStore(): MainStore {
  return rootStore.mainStore;
}
