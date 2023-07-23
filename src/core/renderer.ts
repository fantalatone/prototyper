import Scene from "./scene.js"

class Renderer {
    fps: number
    fpsi: number = 0
    now: number = 0
    then: number = 0
    elasped: number = 0

    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    scene: Scene
    constructor(_fps: number, _canvas: HTMLCanvasElement, _scene: Scene) {
        this.fps = _fps
        this.canvas = _canvas
        this.ctx = <CanvasRenderingContext2D>_canvas.getContext("2d")
        this.scene = _scene
    }

    render() {
        this.fpsi = 1000 / this.fps;
        this.then = Date.now();
        this._render();
    }
    _render = () => {
        requestAnimationFrame(this._render);

        this.now = Date.now();
        this.elasped = this.now - this.then;

        if (this.elasped > this.fpsi) {

            this.then = this.now - (this.elasped % this.fpsi);

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.fillStyle = this.scene.background
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        }
    }

}

export default Renderer