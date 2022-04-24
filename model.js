'use strict'

const selectTypeBuilding = document.getElementById('building-type')
const textInputs = document.querySelectorAll('input[type=text]')
const textInputsProduct = document.querySelectorAll('.product')
const textInputsOffice = document.querySelectorAll('.office')
const checkboxInput = document.getElementById('building-property')
const btnForm = document.getElementById('btn-submit')
const form = document.querySelector('form')
const table = document.querySelector('.table')
const tableBody = table.querySelector('tbody')
let inputsEnabled = document.querySelectorAll('input[type=text]:not([disabled])')
let deleteBtns = table.querySelectorAll('.del-btn')
let arrData = JSON.parse(localStorage.getItem('dataBuildings')) || []

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

selectTypeBuilding.addEventListener('change', () => {
    if (selectTypeBuilding.value === '') {
        checkboxInput.checked = false
        checkboxInput.disabled = true
        textInputs.forEach((item) => {
            item.value = ''
            item.disabled = true
        })
    }
    if (selectTypeBuilding.value === 'product' || selectTypeBuilding.value === 'office') {
        checkboxInput.disabled = false
        textInputs.forEach((item) => {
            item.disabled = false
        })
    }
    if (selectTypeBuilding.value === 'product') {
        textInputsOffice.forEach((item) => {
            item.value = ''
            item.disabled = true
        })
    }
    if (selectTypeBuilding.value === 'office') {
        textInputsProduct.forEach((item) => {
            item.value = ''
            item.disabled = true
        })
    }
    inputsEnabled = document.querySelectorAll('input[type=text]:not([disabled])')
    inputsEnabled.forEach((input) => {
        input.addEventListener('input', () => {
            let empty = [...inputsEnabled].filter(el => {
                return el.value.trim() === ''
            }).length
            btnForm.disabled = empty !== 0
        })
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let obj

    if (form[0].value === 'product') {
        obj = new ProductBuilding(
            form[1].value,
            form[2].value,
            form[3].value,
            form[4].checked,
            form[5].value,
            form[6].value
        )
    }
    if (form[0].value === 'office') {
        obj = new OfficeBuilding(
            form[1].value,
            form[2].value,
            form[3].value,
            form[4].checked,
            form[7].value,
            form[8].value
        )
    }
    resetForm()
    arrData.push(obj)
    addLocalStorage()
    showTable(arrData)
})

const resetForm = () => {
    form.querySelectorAll('input[type=text]').forEach((item) => {
        item.value = ''
        item.disabled = true
    })
    form[0].value = ''
    form[4].checked = false
    form[4].disabled = true
    form[9].disabled = true
}

const addLocalStorage = () => {
    localStorage.setItem('dataBuildings', JSON.stringify(arrData))
}

const showTableRow = (obj) => {
    const tr = document.createElement('tr')

    tr.innerHTML = `
            <td>${obj._cadastralNum}</td>
            <td>${obj._name}</td>
            <td>${obj._area}</td>
            <td>${obj._property}</td>
            <td>${obj._nameProduct}</td>
            <td>${obj._power}</td>
            <td>${obj._levelNum}</td>
            <td>${obj._workerNum}</td>
            <td><button class = "del-btn"></button></td>
        `
    tableBody.append(tr)

}

const showTable = (arr) => {
    tableBody.innerHTML = ''
    arr.forEach((item) => {
        showTableRow(item)
    })
    table.querySelectorAll('td').forEach((item) => {
        if (item.textContent === 'undefined') {
            item.textContent = '-'
        }
        if (item.textContent === 'true') {
            item.textContent = 'да'
        }
        if (item.textContent === 'false') {
            item.textContent = 'нет'
        }
    })
    deleteBtns = table.querySelectorAll('.del-btn')
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            deleteObj(index)
        })
    })
}

const deleteObj = (index) => {
    if (confirm('Вы уверены, что хотите удалить запись?')) {
        arrData.splice(index, 1)
        addLocalStorage()
        showTable(arrData)
    }
}

showTable(arrData)
