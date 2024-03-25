const countries = [{ name: 'Russian', code: 'RU', phone: 7 }]

const select_box = document.querySelector('.options')
const search_box = document.querySelector('.search-box')
const input_box = document.querySelector('input[type="tel"]')
const selected_option = document.querySelector('.selected-option div')

let options = null

function updateSelectedOption(option) {
	const icon = option.querySelector('.iconify').cloneNode(true)
	const phone_code = option.querySelector('strong').cloneNode(true)

	selected_option.innerHTML = ''
	selected_option.append(icon, phone_code)

	input_box.value = phone_code.innerText

	select_box.classList.remove('active')
	selected_option.classList.remove('active')

	search_box.value = ''
	select_box
		.querySelectorAll('.hide')
		.forEach(el => el.classList.remove('hide'))
}

function updateOptionsVisibility(search_query) {
	options.forEach(option => {
		const is_matched = option
			.querySelector('.country-name')
			.innerText.toLowerCase()
			.includes(search_query)
		option.classList.toggle('hide', !is_matched)
	})
}

function selectOption() {
	updateSelectedOption(this)
}

function searchCountry() {
	const search_query = search_box.value.toLowerCase()
	updateOptionsVisibility(search_query)
}

selected_option.addEventListener('click', () => {
	select_box.classList.toggle('active')
	selected_option.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', function () {
	var inputElement = document.querySelector('input[name="tel"]')
	var maskOptions = {
		mask: '(999) 999-99-99'
	}
	Inputmask(maskOptions).mask(inputElement)
})

// Создание списка опций
for (const country of countries) {
	const option = `
	  <li class="option">
		<div>
		  <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
		  <span class="country-name">${country.name}</span>
		</div>
		<strong>+${country.phone}</strong>
	  </li>`

	select_box.querySelector('ol').insertAdjacentHTML('beforeend', option)
}

options = document.querySelectorAll('.option')
options.forEach(option => option.addEventListener('click', selectOption))
search_box.addEventListener('input', () =>
	searchCountry(search_box.value.toLowerCase())
)

//
document.addEventListener('DOMContentLoaded', function () {
	var selectElement = document.getElementById('role')
	var roles = [
		'Собтвенник',
		'Руководитель отдела продаж',
		'Технический специалист',
		'Интегратов amoCRM'
	]

	roles.forEach(function (role) {
		var optionElement = document.createElement('option')
		optionElement.value = role.toLowerCase()
		optionElement.textContent = role
		selectElement.appendChild(optionElement)
	})
})

//
const promoCheckbox = document.getElementById('promoCheckbox')
const promoInput = document.getElementById('promoInput')

promoCheckbox.addEventListener('change', function () {
	promoInput.style.display = this.checked ? 'block' : 'none'
})
//

const errorMessage = document.getElementById('errorMessage')

if (errorMessage) {
	errorMessage.addEventListener('click', () => {
		errorMessage.style.display = 'none' // Скрыть сообщение об ошибке
	})
}
//
document.addEventListener('DOMContentLoaded', function () {
	const input = document.getElementById('formName')
	const flag = document.getElementById('flag')
	const formTel = document.getElementById('formTel')
	const roleSelect = document.getElementById('role')
	const formSubmitButton = document.querySelector('.form__submit-btn')
	const errorMessage = document.getElementById('errorMessage')

	formSubmitButton.addEventListener('click', function (event) {
		let hasError = false
		if (input.value.trim() === '') {
			input.style.border = '1px solid red'
			hasError = true
		} else {
			input.style.border = ''
		}

		if (formTel.value.trim() === '') {
			flag.classList.add('error')
			hasError = true
		} else {
			flag.classList.remove('error')
		}

		if (roleSelect.value === 'Выберите роль') {
			roleSelect.style.border = '1px solid red'
			hasError = true
		} else {
			roleSelect.style.border = ''
		}
		if (hasError) {
			errorMessage.style.display = 'block'
		} else {
			errorMessage.style.display = 'none'
		}
		// Предотвращаем отправку формы
		event.preventDefault()
	})
})
