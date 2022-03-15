import { ComputedFunction, ParametersAndValue } from '../mathparserService/responseModels/computedFunction'
import { ParameterState } from './parameterState'


export class AppState {
    expression = ""
    isComputing = false
    parametersArray: ParameterState[] = []
    lastComputedFunctions: ComputedFunction[] = []
    computeResult = ""
}