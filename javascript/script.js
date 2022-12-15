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
const flightList = [
	{
		id: 1,
		cityFrom: 'portugal',
		cityTo: 'finland',
		flyTime: 5,
	},
	{
		id: 2,
		cityFrom: 'portugal',
		cityTo: 'italy',
		flyTime: 5,
	},
	{
		id: 3,
		cityFrom: 'italy',
		cityTo: 'portugal',
		flyTime: 5,
	},
	{
		id: 4,
		cityFrom: 'italy',
		cityTo: 'finland',
		flyTime: 5,
	},
	{
		id: 5,
		cityFrom: 'finland',
		cityTo: 'portugal',
		flyTime: 3,
	},
	{
		id: 6,
		cityFrom: 'finland',
		cityTo: 'italy',
		flyTime: 5,
	},
];

const selectCityFrom = document.querySelector('#selectCityFrom');
const selectCityTo = document.querySelector('#selectCityTo');
const boxPopup = document.querySelector('.boxPopup');
const overlayPopup = document.querySelector('.overlayPopup');

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

const openPopup = () => {
	boxPopup.style.display = 'block';
	overlayPopup.style.display = 'block';
	cityFrom.innerHTML = selectCityFrom.value;
	cityTo.innerHTML = selectCityTo.value;
	dateFrom.innerHTML = inputDateFrom.value;
	dateTo.innerHTML = inputDateTo.value;
	if (selectCityFrom.value === 'dubai' && selectCityTo.value === 'portugal') {
		flyTime.innerHTML = 5;
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
