var Stopwatch = () => {
    var sec = document.getElementById("sec")
    var min = document.getElementById("min")
    var hour = document.getElementById("hour")
 
    var s = 0
    var m = 0
    var h = 0
    
    setInterval(() => {

        if (s === 60) {
            s = 0
            m = m + 1
            sec.innerText=s
            min.innerText = m
        }
        else {
            s = s + 1
            sec.innerText = s
        }
        if (m === 60) {
            m = 0
            h = h + 1
            hour.innerText = h
            min.innerText=m
        }
    }, 1)


}

