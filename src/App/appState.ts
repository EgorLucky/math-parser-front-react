import { ParameterState } from './parameterState' 

export class AppState {
    expression = ""
    isComputing = false
    parametersArray: Array<ParameterState> = []
    lastComputedFunctions: Array<any> = []
    computeResult = ""
}