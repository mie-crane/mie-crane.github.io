export class Crane {
    constructor(readonly displayName: string,
                readonly model: string,
                readonly liftWeight: string,
                readonly boomLength: string,
                readonly jib: string,
                readonly liftingHeight: string,
                readonly workRadius: string,
                readonly units: string
    ) {
        this.displayName = displayName
        this.model = model
        this.liftWeight = liftWeight
        this.boomLength = boomLength
        this.jib = jib
        this.liftingHeight = liftingHeight
        this.workRadius = workRadius
        this.units = units
    }

    values(): string[] {
        return [
        this.displayName,
        this.model,
        this.liftWeight,
        this.boomLength,
        this.jib,
        this.liftingHeight,
        this.workRadius,
        this.units
        ]
    }
}