import { ChangeEvent } from "react"
import { Parameter } from "../../mathparserService/requestModels/parameter"

export class ParameterProp {
    deleteParameter?: (key: number) => void
    id = 0
    parameter: Parameter = new Parameter()
    onTextChanged?: (e: ChangeEvent<HTMLInputElement>, key: number, property: string) => void
}