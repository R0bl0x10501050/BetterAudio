class BetterAudio {
    constructor(url) {
        this.url = url
        this.Audio = new Audio(this.url)
    }
    
    play() {
        this.Audio.play()
    }

    copy() {
        return new BetterAudio(this.url)
    }
}

module.exports = BetterAudio