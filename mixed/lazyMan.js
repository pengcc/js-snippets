function LazyMan(name) {
    return new LazyManClass(name);
}

class LazyManClass {
    constructor(name) {
        this.taskList = [];
        // used for method executeTasks
        // this.taskDataList = [];
        this.init(name);
    }

    init(name) {
        this.printLog('name', name);
        setTimeout(() => {
            // the alternative solution
            // this.executeTasks();
            this.next();
        }, 0);
    }

    printLog(type, data) {
        const LOG_MAP = {
            'name': `Hi, I am ${data}`,
            'eat': `I am eating ${data}.`,
            'sleep': `Waited for ${data} seconds.`,
            'error': `Got something wrrong: ${data}.`
        };
        console.log(LOG_MAP[type]);
    }

    delayPromise(t) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, t * 1000);
        });
    };

    createTaskData(type, data) {
        return { type, data };
    }

    createTask(type, data) {
        return async () => {
            if (type === 'sleep') {
                try {
                    await this.delayPromise(data);
                }
                catch(e) {
                    this.printLog('error', e);
                }
            }
            this.printLog(type, data);
            this.next();
        }
    }

    addTask(type, data, isFirst=false) {
        if (isFirst) {
            // used for method executeTasks
            // this.taskList.unshift(this.createTask(type, data));
            this.taskList.unshift(this.createTask(type, data));
        } else {
            // used for method executeTasks
            // this.taskList.unshift(this.createTask(type, data));
            this.taskList.push(this.createTask(type, data));
        }
    }

    eat(str) {
        this.addTask('eat', str);
        return this;
    }

    sleep(t) {
        this.addTask('sleep', t);
        return this;
    }

    sleepFirst(t) {
        this.addTask('sleep', t, true);
        return this;
    }

    next() {
        if (this.taskList.length > 0) {
            let task = this.taskList.shift();
            task && task();
        }
    }
    async executeTasks() {
        let taskDataList = this.taskDataList;
        while (taskDataList.length > 0) {
            let { type, data } = taskDataList.shift();
            if (type === 'sleep') {
                try {
                    await this.delayPromise(data);
                }
                catch(e) {
                    this.printLog('error', e);
                }
            }
            this.printLog(type, data);
        }
    }
}