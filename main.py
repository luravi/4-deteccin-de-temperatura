def on_forever():
    temperatura = input.temperature()
    if temperatura > 25:
        basic.show_icon(IconNames.UMBRELLA)
    elif temperatura < 10:
        basic.show_icon(IconNames.SQUARE)
    else:
        basic.show_icon(IconNames.HAPPY)

basic.forever(on_forever)
