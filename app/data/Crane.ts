export class Crane {
    constructor(readonly displayName: String,
                readonly model: String,
                readonly liftWeight: String,
                readonly boomLength: String,
                readonly jib: String,
                readonly liftingHeight: String,
                readonly workRadius: String,
                readonly units: String
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

    values(): String[] {
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