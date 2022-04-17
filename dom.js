const selectTypeBuilding = document.getElementById('building-type')
const textInputs = document.querySelectorAll('input[type=text]')
const textInputsProduct = document.querySelectorAll('.product')
const textInputsOffice = document.querySelectorAll('.office')
const checkboxInput = document.getElementById('building-property')
const btnForm = document.getElementById('btn-submit')
let inputsEnabled = document.querySelectorAll('input[type=text]:not([disabled])')

console.log(btnForm);

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
            console.log(empty);
            btnForm.disabled = empty !== 0
        })
    })
})







