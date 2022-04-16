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

class ProductBuilding extends Building {
    constructor(cadastralNum, name, area, property, nameProduct, power) {
        super(cadastralNum, name, area, property)
        this._nameProduct = nameProduct
        this._power = power
    }

    get nameProduct() {
        return this._nameProduct
    }

    set nameProduct(str) {
        this._nameProduct = str
    }

    get power() {
        return this._power
    }

    set power(num) {
        this._power = num
    }
}

class OfficeBuilding extends Building {
    constructor(cadastralNum, name, area, property, floorsNum, workerNum) {
        super(cadastralNum, name, area, property)
        this._floorsNum = floorsNum
        this._workerNum = workerNum
    }

    get floorsNum() {
        return this._floorsNum
    }

    set floorsNum(num) {
        this._floorsNum = num
    }

    get workerNum() {
        return this._workerNum
    }

    set workerNum(num) {
        this._workerNum = num
    }
}