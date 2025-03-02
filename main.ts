let værdi = 0
input.onGesture(Gesture.Shake, function () {
    værdi = randint(0, 2)
    if (værdi == 1) {
        basic.showString("Chewbacca")
    } else if (false) {
        basic.showString("Leia Organaa")
    } else {
        basic.showString("Luke Skywalker")
    }
    basic.pause(200)
})
