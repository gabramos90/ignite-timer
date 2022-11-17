export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  finishedDate?: Date
  interruptedDate?: Date
}

interface CycleState {
  cycle: Cycle[]
  activeCycleId: string | null
}

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPTED_CURRETN_CYCLE = 'INTERRUPTED_CURRETN_CYCLE',
  MARCK_CURRENT_CYCLE_AD_FINISHED = 'MARCK_CURRENT_CYCLE_AD_FINISHED',
}

export function cyclesReducers(state: CycleState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycle: [...state.cycle, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.INTERRUPTED_CURRETN_CYCLE:
      return {
        ...state,
        cycle: state.cycle.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    case ActionTypes.MARCK_CURRENT_CYCLE_AD_FINISHED:
      return {
        ...state,
        cycle: state.cycle.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
