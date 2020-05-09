function hang(seconds = 5) {
    const doneAt = Date.now() + seconds * 1000
    while(Date.now() < doneAt) {}
}
//if we run on console of browser it hangs/freezes for specified time