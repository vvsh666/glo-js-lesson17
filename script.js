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
    constructor(cadastralNum, name, area, property, levelNum, workerNum) {
        super(cadastralNum, name, area, property)
        this._levelNum = levelNum
        this._workerNum = workerNum
    }

    get levelNum() {
        return this._levelNum
    }

    set levelNum(num) {
        this._levelNum = num
    }

    get workerNum() {
        return this._workerNum
    }

    set workerNum(num) {
        this._workerNum = num
    }
}

const office1 = new OfficeBuilding('sadfsd435345', 'Административно-бытовой корпус 1', 525, true, 2, 35)
const office2 = new OfficeBuilding('sad435345345', 'Административно-бытовой корпус 2', 1520, false, 4, 67)
const product1 = new ProductBuilding('34534fgdfg', 'Цех заготовительныq', 2510, true, 'Металлоконструкции', 1500)
const product2 = new ProductBuilding('34534fgdfg', 'Цех малярный', 2510, true, 'Покраска металлоконструкций', 650)

console.log(office1)
console.log(office2)
console.log(product1)
console.log(product2)