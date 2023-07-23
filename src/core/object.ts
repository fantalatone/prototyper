class Object {
    x: number = 0
    y: number = 0
    w: number = 0
    h: number = 0
    constructor(_x: number, _y: number, _w: number, _h: number) {
        this.x = _x
        this.y = _y
        this.w = _w
        this.h = _h
    }
    draw(_ctx: CanvasRenderingContext2D) { }
}

export default Object