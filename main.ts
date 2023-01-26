let player_score = 0
input.onButtonPressed(Button.A, function () {
    player_score += 1
})
input.onButtonPressed(Button.AB, function () {
    player_score = 0
})
input.onButtonPressed(Button.B, function () {
    player_score += -1
})
