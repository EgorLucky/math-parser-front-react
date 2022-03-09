import { Parameter } from "./parameter"

export class ComputeExpressionRequestModel {
    expression: string
    parameters: Array<Parameter>
    
    constructor(expression: string, parameters: Array<Parameter>){
        this.expression = expression
        this.parameters = parameters
    }
}