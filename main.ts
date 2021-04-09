let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
let helligkeit = 255
basic.forever(function () {
    strip.showColor(neopixel.hsl(255, 255, helligkeit))
    strip.show()
    if (helligkeit > 0) {
        helligkeit = helligkeit - 1
    } else {
        helligkeit = 255
    }
    basic.pause(10)
})
