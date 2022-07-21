
export type counterSettingsType = {
    minCount: number
    maxCount: number
}

type InitialStateType = {
    count: null | number
    settings: counterSettingsType
}

const counterState = {
    count: null,
    settings: {
        minCount: 0,
        maxCount: 5
    }
}

export type ActionType = ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changeSettingsAC>

export const counterReducer = (state: InitialStateType = counterState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count ? state.count + 1 : state.settings.minCount + 1}
        case 'RESET':
            return {...state, count: 0}
        case 'CHANGE-SETTINGS':
            return {...state, count: action.newMinCount, settings: {minCount: action.newMinCount, maxCount: action.newMaxCount}}
        default:
            return state
    }
}

export const incrementAC = () => {
    return {type: 'INCREMENT'} as const
}

export const resetAC = () => {
    return {type: 'RESET'} as const
}
export const changeSettingsAC = (newMinCount: number, newMaxCount: number) => {
    return {
        type: 'CHANGE-SETTINGS',
        newMinCount,
        newMaxCount
    }
}