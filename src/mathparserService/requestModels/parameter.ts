export class Parameter{
    variableName: string
    value: number
    
    constructor(variableName: string = "", value: number = 0){
        this.variableName = variableName
        this.value = value;
    }
} 