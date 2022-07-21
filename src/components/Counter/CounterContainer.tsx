import {connect} from "react-redux";
import {Counter} from "./Counter";
import {changeSettingsAC, counterSettingsType, incrementAC, resetAC} from '../../BLL/counter-reducer';
import {Dispatch} from "redux";
import {AppStateType} from '../../BLL/store';


type MapStateToPropsType = {
    count: null | number
    settings: counterSettingsType
}

type MapDispatchToPropsType = {
    inc: () => void
    reset: () => void
    changeSettings: (newMinCount: number, newMaxCount: number) => void
}

export type CounterPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        count: state.counter.count,
        settings: {
            minCount: state.counter.settings.minCount,
            maxCount: state.counter.settings.maxCount
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        inc: () => {
            dispatch(incrementAC())
        },
        reset: () => {
            dispatch(resetAC())
        },
        changeSettings: (newMinCount: number, newMaxCount: number) => {
            dispatch(changeSettingsAC(newMinCount, newMaxCount))
        }
    }
}


const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer;