let meva = ["olma", "bexi", "shaftoli", "o'rik"]
let result = [ "bu meva kiritilgan"]
while (true) {
    let javob = prompt("Meva kiriting")
    if (javob == "stop") {
        break
    } else if (meva[0] == javob || meva[1] == javob || meva[2] == javob || meva[3] == javob) {
        result.unshift(javob)
        continue
    } else {
        meva.push(javob)  
    }
        console.log(result)
        console.log(meva)
}
