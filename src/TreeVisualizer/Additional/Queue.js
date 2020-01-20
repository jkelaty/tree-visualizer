export default class Queue {
    constructor () {
        this.queue = [];
    }

    empty() {
        return ! this.queue.length;
    }

    push(val) {
        this.queue.push(val);
    }

    front() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }
}