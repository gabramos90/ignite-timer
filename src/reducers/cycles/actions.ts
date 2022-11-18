import { Cycle } from './reducers'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPTED_CURRETN_CYCLE = 'INTERRUPTED_CURRETN_CYCLE',
  MARCK_CURRENT_CYCLE_AD_FINISHED = 'MARCK_CURRENT_CYCLE_AD_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARCK_CURRENT_CYCLE_AD_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPTED_CURRETN_CYCLE,
  }
}
