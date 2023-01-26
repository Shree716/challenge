input.onButtonPressed(Button.A, function () {
    player_score += 1
    basic.showNumber(player_score,100)
})
input.onButtonPressed(Button.AB, function () {
    player_score = 0
    basic.showNumber(player_score,100)
})
input.onButtonPressed(Button.B, function () {
    player_score += -1
    basic.showNumber(player_score,100)
})
let player_score = 0
player_score = 0
