

/** @type {HTMLCanvasElement} */
const canvasNode = document.querySelector('#gossip-canvas')
const ctx = canvasNode.getContext('2d')

// canvas长宽
const len = 400
// 太极半径
const radius = 100
canvasNode.width = len
canvasNode.height = len
// 设置原点到canvas中心
ctx.translate(len / 2, len / 2)

ctx.beginPath()
ctx.arc(0, radius / 2, radius / 2, Math.PI / 2, Math.PI * 3 / 2, false)
ctx.arc(0, - radius / 2, radius / 2, Math.PI / 2, -Math.PI / 2, true)
ctx.arc(0, 0, radius, -Math.PI / 2, Math.PI / 2, true)
ctx.fillStyle = 'white'
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.arc(0, radius / 2, radius / 2, Math.PI / 2, Math.PI * 3 / 2, false)
ctx.arc(0, - radius / 2, radius / 2, Math.PI / 2, -Math.PI / 2, true)
ctx.arc(0, 0, radius, -Math.PI / 2, Math.PI / 2, false)
ctx.fillStyle = 'black'
ctx.fill()
ctx.stroke()

// 上小半圆
ctx.beginPath()
ctx.arc(0, - radius / 2, radius / 8, 0, 2 * Math.PI)
ctx.fillStyle = 'black'
ctx.fill()
ctx.stroke()

// 下小半圆
ctx.beginPath()
ctx.arc(0, radius / 2, radius / 8, 0, 2 * Math.PI)
ctx.fillStyle = 'white'
ctx.fill()
ctx.stroke()



/*
    在太极周围从外向内看：
    乾三连（☰），坤六断（☷）；震仰盂（☳），艮覆碗（☶）；
    离中虚（☲），坎中满（☵）；兑上缺（☱），巽下断（☴）。
*/

// 天乾 风巽 水坎 山艮 地坤 雷震 火离 泽兑
const data = [7, 6, 2, 4, 0, 1, 5, 3]
function drawLine(ctx, isSolid, num) {
    if (isSolid) {
        ctx.moveTo(-radius / 4, -radius - radius / 4 - num * radius / 8)
        ctx.lineTo(radius / 4, -radius - radius / 4 - num * radius / 8)
    }
    else {
        ctx.moveTo(-radius / 4, -radius - radius / 4 - num * radius / 8)
        ctx.lineTo(-radius / 32, -radius - radius / 4 - num * radius / 8)
        ctx.moveTo(radius / 32, -radius - radius / 4 - num * radius / 8)
        ctx.lineTo(radius / 4, -radius - radius / 4 - num * radius / 8)
    }
}
ctx.lineWidth = 7
ctx.beginPath()
for (let i = 0; i < 8; ++i) {
    ctx.save()
    ctx.rotate(Math.PI / 4 * i)
    for (let j = 0; j < 3; ++j) {
        drawLine(ctx, data[i] & (1 << j), j)
    }
    ctx.restore()
}
ctx.stroke()
