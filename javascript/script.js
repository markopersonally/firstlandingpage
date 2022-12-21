// mobile menu
const menHamburger = document.querySelector('.menHamburger');
const overlayMenHamburger = document.querySelector('.overlayMenHamburger');

const openMenHamburger = () => {
	if (overlayMenHamburger.style.display === 'none') {
		overlayMenHamburger.style.display = 'flex';
	} else {
		overlayMenHamburger.style.display = 'none';
	}
};

overlayMenHamburger.addEventListener('click', () => {
	if (overlayMenHamburger.style.display === 'flex') {
		overlayMenHamburger.style.display = 'none';
	}
});

menHamburger.addEventListener('click', openMenHamburger);
// popup function
const selectCityFrom = document.querySelector('#selectCityFrom');
const selectCityTo = document.querySelector('#selectCityTo');
const boxPopup = document.querySelector('.boxPopup');
const overlayPopup = document.querySelector('.overlayPopup');
const popup = document.querySelector('.popupSearch');
const closeButton = document.querySelector('.closeButton');
const buttonSearch = document.querySelector('.buttonSearch');
const boxSearchText = document.querySelector('.boxSearchText');
const inputDateFrom = document.querySelector('#inputDateFrom');
const inputDateTo = document.querySelector('#inputDateTo');
const cityFrom = document.querySelector('#cityFrom');
const cityTo = document.querySelector('#cityTo');
const dateFrom = document.querySelector('#dateFrom');
const dateTo = document.querySelector('#dateTo');
const flyTime = document.querySelector('#flyTime');
const errorSelectCityFrom = document.querySelector('#errorSelectCityFrom');
const errorSelectCityTo = document.querySelector('#errorSelectCityTo');
const errorInputDateFrom = document.querySelector('#errorInputDateFrom');
const errorInputDateTo = document.querySelector('#errorInputDateTo');

const generateFlyTime = () => {
	const result = data.find(
		(item) =>
			item.cityFrom === selectCityFrom.value &&
			item.cityTo === selectCityTo.value
	);
	return result;
};

const closePopup = () => {
	boxPopup.style.display = 'none';
	overlayPopup.style.display = 'none';
};

closeButton.addEventListener('click', closePopup);
overlayPopup.addEventListener('click', closePopup);

// btn open popup

const openPopup = () => {
	boxPopup.style.display = 'block';
	overlayPopup.style.display = 'block';
	cityFrom.innerHTML = selectCityFrom.value;
	cityTo.innerHTML = selectCityTo.value;
	dateFrom.innerHTML = inputDateFrom.value;
	dateTo.innerHTML = inputDateTo.value;

	if (selectCityFrom.value === 'portugal' && selectCityTo.value === 'italy') {
		flyTime.innerHTML = '5 hours';
	}
	if (selectCityFrom.value === 'portugal' && selectCityTo.value === 'finland') {
		flyTime.innerHTML = '3 hours';
	}
	if (selectCityFrom.value === 'italy' && selectCityTo.value === 'portugal') {
		flyTime.innerHTML = '7 hours';
	}
	if (selectCityFrom.value === 'italy' && selectCityTo.value === 'finland') {
		flyTime.innerHTML = '10 hours';
	}
	if (selectCityFrom.value === 'finland' && selectCityTo.value === 'portugal') {
		flyTime.innerHTML = '8 hours';
	}
	if (selectCityFrom.value === 'finland' && selectCityTo.value === 'italy') {
		flyTime.innerHTML = '9 hours';
	}
	flyTime.innerHTML = generateFlyTime().flyTime;
};

const validSearchForm = () => {
	if (selectCityFrom.value === '') {
		errorSelectCityFrom.style.display = 'block';
	} else {
		errorSelectCityFrom.style.display = 'none';
	}
	if (selectCityTo.value === '') {
		errorSelectCityTo.style.display = 'block';
	} else {
		errorSelectCityTo.style.display = 'none';
	}
	if (inputDateFrom.value === '') {
		errorInputDateFrom.style.display = 'block';
	} else {
		errorInputDateFrom.style.display = 'none';
	}
	if (inputDateTo.value === '') {
		errorInputDateTo.style.display = 'block';
	} else {
		errorInputDateTo.style.display = 'none';
	}
	if (
		selectCityFrom.value !== '' &&
		selectCityTo.value !== '' &&
		inputDateFrom.value !== '' &&
		inputDateTo.value !== ''
	) {
		openPopup();
	}
};

buttonSearch.addEventListener('click', validSearchForm);
