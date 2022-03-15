export class ComputedFuctionState {
    id = 0
    functionNotation: string = ""
    loadMore: boolean = false
    parametersAndValues: Array<ParametersAndValueState> = []
}

export class ParametersAndValueState {
    id = 0
    parameters: string = ""
    value: number = 0
}