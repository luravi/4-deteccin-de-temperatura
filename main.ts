basic.forever(function on_forever() {
    let temperatura = input.temperature()
    if (temperatura > 25) {
        basic.showIcon(IconNames.Umbrella)
    } else if (temperatura < 10) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    
})
