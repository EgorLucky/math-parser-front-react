export class Compute2DIntervalPlotResult {
    errorMessage: string = ""
    message: string = ""
    expression: any  
    isSuccessfulComputed: boolean = true
    result: Array<Point> = []
}

class Point {
    x: number = 0
    y: number = 0
}