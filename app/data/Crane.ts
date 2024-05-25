export class Crane {
    constructor(readonly displayName: String,
                readonly model: String,
                readonly liftWeight: String,
                readonly boomLength: String,
                readonly jib: String,
                readonly liftingHeight: String,
                readonly workRadius: String,
                readonly units: Number
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
}