import { ChangeEvent } from "react"
import { Parameter } from "../mathparserService/requestModels/parameter"

export class ParameterState {
    deleteParameter?: (key: number) => void
    key = 0
    parameter: Parameter = new Parameter()
    onTextChanged?: (e: ChangeEvent<HTMLInputElement>, key: number, property: any) => void
}