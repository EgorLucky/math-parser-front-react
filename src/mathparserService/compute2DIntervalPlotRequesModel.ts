export class Compute2DIntervalPlotRequestModel{
    expression: string
    max: number
    min: number
    step: number

    constructor(
        expression: string, 
        max: number, 
        min: number, 
        step: number){
            this.expression = expression
            this.max = max
            this.min = min
            this.step = step
    }

}