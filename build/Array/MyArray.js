"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyArray {
    /**
     * 传入数组的容量capacity构造Array
     * @param capacity 数组的容量
     */
    constructor(capacity = 10) {
        this.data = new Array(capacity);
        this.size = 0;
    }
    /**
     * 获取数组中的元素个数
     */
    getSize() {
        return this.size;
    }
    /**
     * 获取数组的容量
     */
    getCapacity() {
        return this.data.length;
    }
    /**
     * 返回数组是否为空
     */
    isEmpty() {
        return this.size === 0;
    }
    /**
     * 向所有元素后添加一个新元素
     * @param e 新元素
     */
    addLast(e) {
        this.add(this.size, e);
    }
    /**
     * 在所有元素前添加一个新元素
     * @param e 新元素
     */
    addFirst(e) {
        this.add(0, e);
    }
    /**
     * 在第index个位置插入一个新元素e
     * @param index 索引
     * @param e 新元素
     */
    add(index, e) {
        if (index < 0 || index > this.size) {
            throw new Error(`Add failed. Require index >= 0 and index <= ${this.size}.`);
        }
        if (this.size === this.data.length) {
            this.resize(2 * this.data.length);
        }
        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = e;
        this.size++;
    }
    /**
     * 从数组中删除index位置的元素，返回删除的元素
     * @param index 索引
     */
    remove(index) {
        if (index < 0 || index > this.size) {
            throw new Error(`Add failed. Require index >= 0 and index <= ${this.size}.`);
        }
        let ret = this.data[index];
        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
        // TODO 清除引用
        // this.data[this.size] = undefined;
        // 防止复杂度震荡
        if (this.size === Math.trunc(this.data.length / 4) &&
            Math.trunc(this.data.length / 2) !== 0) {
            this.resize(Math.trunc(this.data.length / 2));
        }
        return ret;
    }
    /**
     * 从数组中删除第一个元素，返回删除的元素
     */
    removeFirst() {
        return this.remove(0);
    }
    /**
     * 从数组中删除最后一个元素，返回删除的元素
     */
    removeLast() {
        return this.remove(this.size - 1);
    }
    /**
     * 获取index索引位置的元素
     * @param index 索引
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Get failed. Index is illegal.');
        }
        return this.data[index];
    }
    /**
     * 修改index索引位置的元素为e
     * @param index 索引
     * @param e 新元素
     */
    set(index, e) {
        if (index < 0 || index >= this.size) {
            throw new Error('Set failed. Index is illegal.');
        }
        this.data[index] = e;
    }
    /**
     * 查找数组中是否有元素e
     * @param e 元素
     */
    contains(e) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return true;
            }
        }
        return false;
    }
    /**
     * 查找数组中元素e所在的索引，如果不存在元素e，则返回-1
     * @param e 元素
     */
    find(e) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return i;
            }
        }
        return -1;
    }
    /**
     * 从数组中删除元素e
     * @param e 元素
     */
    removeElement(e) {
        const index = this.find(e);
        if (index !== -1) {
            this.remove(index);
        }
    }
    /**
     * 显示数组打印结果
     */
    toString() {
        let res = `Array: size = ${this.size}, capacity = ${this.data.length}\n`;
        res += '[';
        for (let i = 0; i < this.size; i++) {
            res += this.data[i];
            if (i !== this.size - 1) {
                res += ', ';
            }
        }
        res += ']';
        return res;
    }
    /**
     * 动态数组
     * @param newCapacity 新容量
     */
    resize(newCapacity) {
        const newData = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }
}
exports.default = MyArray;
