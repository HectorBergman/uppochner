let Håll = 0
let Hållbörjan = input.compassHeading()
let andrahållet = 0
basic.forever(function () {
    Håll = input.compassHeading() - Hållbörjan + 90
})
basic.forever(function () {
    if (andrahållet == 0) {
        if (Håll > Hållbörjan + 135 && Håll < Hållbörjan + 225) {
            basic.showIcon(IconNames.Happy)
            andrahållet = 1
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        if (Håll > Hållbörjan - 45 && Håll < Hållbörjan + 45) {
            basic.showIcon(IconNames.Sad)
            andrahållet = 0
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
})
