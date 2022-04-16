'use strict'

class Building {
    constructor(cadastralNum, name, area, property) {
        this._cadastralNum = cadastralNum
        this._name = name
        this._area = area
        this._property = property
    }

    get cadastralNum() {
        return this._cadastralNum
    }

    set cadastralNum(str) {
        this._cadastralNum = str
    }

    get name() {
        return this._name
    }

    set name(str) {
        this._name = str
    }

    get area() {
        return this._area
    }

    set area(num) {
        this._name = num
    }

    get property() {
        return this._property
    }

    set property(check) {
        this._property = check
    }
}