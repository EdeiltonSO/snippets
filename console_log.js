const { Readable } = require('stream')

class In extends Readable {
    constructor(str) {
        super()
        this.data = Buffer.from(String(str))
    }

    _read() {
        this.push(this.data)
        this.push(null)
    }
}

function myconsolelog(str) {
    new In(str).pipe(process.stdout)
}

myconsolelog("edeilton")