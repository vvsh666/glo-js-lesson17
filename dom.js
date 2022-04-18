const selectTypeBuilding = document.getElementById('building-type')
const textInputs = document.querySelectorAll('input[type=text]')
const textInputsProduct = document.querySelectorAll('.product')
const textInputsOffice = document.querySelectorAll('.office')
const checkboxInput = document.getElementById('building-property')
const btnForm = document.getElementById('btn-submit')
const form = document.querySelector('form')
const table = document.querySelector('table')
let inputsEnabled = document.querySelectorAll('input[type=text]:not([disabled])')
let deleteBtns = table.querySelectorAll('.del-btn')
let arrData = JSON.parse(localStorage.getItem('dataBuildings')) || []


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
    console.log(obj);
    arrData.push(obj)
    console.log(arrData);
    resetForm()
    addLocalStorage()
    showTableRow(obj)
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
        <th>${obj._cadastralNum}</th>
        <th>${obj._name}</th>
        <th>${obj._area}</th>
        <th>${obj._property}</th>
        <th>${obj._nameProduct}</th>
        <th>${obj._power}</th>
        <th>${obj._levelNum}</th>
        <th>${obj._workerNum}</th>
        <th><button class = "del-btn"></button></th>
    `
    table.append(tr)
    table.querySelectorAll('th').forEach((item) => {
        if (item.textContent === 'undefined') {
            item.textContent = '-'
        }
    })
    tr.querySelector('.del-btn').addEventListener('click', (e) => {
        // Building.deleteObj()
        console.log(e.target);
    })
}

const showTable = (arr) => {
    arr.forEach((item) => {
        showTableRow(item)
    })


}

showTable(arrData)





