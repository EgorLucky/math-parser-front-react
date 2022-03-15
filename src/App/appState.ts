import { ComputedFunction, ParametersAndValue } from '../mathparserService/responseModels/computedFunction'
import { ParameterProp } from '../Components/Parameter/parameterProp'


export class AppState {
    expression = ""
    isComputing = false
    parametersArray: ParameterProp[] = []
    lastComputedFunctions: ComputedFunction[] = []
    computeResult = ""
}