/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jp
 * Created on: Sep 2024
 * This program says ther temperature
*/

let temperature = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    temperature=input.temperature()
    basic.showString('The temperature is:')
    basic.showNumber(temperature)
    })