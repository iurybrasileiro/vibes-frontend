import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'

import { User, UserStore } from './user.type'

const initialState: UserStore = {
  user: undefined,
}

export const userStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(store => ({
    updateUser(user: User) {
      patchState(store, prevState => ({
        ...prevState,
        user,
      }))
    },
  })),
)
