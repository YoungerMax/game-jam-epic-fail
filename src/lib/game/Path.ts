export class PathPoint {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    calculateDistanceTo(other: PathPoint) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    calculateDirectionTo(other: PathPoint): number {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return (Math.atan2(dy, dx) * 180) / Math.PI;
    }
}

export class Path {
    private points: PathPoint[];

    constructor(points: PathPoint[]) {
        if (points.length < 2) {
            throw new Error("A path must have at least two points.");
        }
        this.points = points;
    }

    private calculateTotalDistance(): number {
        let totalDistance = 0;
        for (let i = 0; i < this.points.length - 1; i++) {
            totalDistance += this.points[i].calculateDistanceTo(this.points[i + 1]);
        }
        return totalDistance;
    }

    public getFirstPoint() {
        return this.points[0];
    }

    public calculatePositionForDistance(
        distance: number
    ): { x: number; y: number; direction: number } {

        const firstPoint = this.getFirstPoint();

        for (let i = 0; i < this.points.length - 1; i++) {
            const start = this.points[i];
            const end = this.points[i + 1];
            const segmentDistance = start.calculateDistanceTo(end);
            
            if (distance < segmentDistance) {
                const ratio = distance / segmentDistance;
                const x = start.x + ratio * (end.x - start.x);
                const y = start.y + ratio * (end.y - start.y);
                const direction = start.calculateDirectionTo(end);

                return {
                    x: x,
                    y: y,
                    direction,
                }
            }
            
            distance -= segmentDistance;
        }

        const lastPoint = this.points[this.points.length - 1];
        const secondLastPoint = this.points[this.points.length - 2];
        const finalDirection = secondLastPoint.calculateDirectionTo(lastPoint);
        return { x: lastPoint.x, y: lastPoint.y - firstPoint.y, direction: finalDirection };
    }
}
