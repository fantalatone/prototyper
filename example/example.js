import { Renderer, Scene } from "../build/src/index.js";

const canvas = document.getElementById("game")
const scene = new Scene("red")
const renderer = new Renderer(30, canvas, scene)

renderer.render()