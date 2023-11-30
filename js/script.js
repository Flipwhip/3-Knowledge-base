const element = document.querySelector('.select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom'
});

ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [48.87105975909371, 2.35569385054014],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 16,
		controls: []
	});

	var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/mdi_location_on.svg',
		iconImageSize: [28, 40],
	});
	myMap.geoObjects.add(myPlacemark);
}

document.addEventListener("DOMContentLoaded", function () {
	const validation = new JustValidate('.form', {
		errorLabelStyle: {
			color: '',
		}
	});
	const selector = document.querySelector("input[type='tel']");
	const im = new Inputmask("+7 (999)-999-99-99");
	im.mask(selector);

	validation
		.addField('.name', [{
			rule: 'minLength',
			value: 2,
			errorMessage: "Вы не ввели имя"
		}])
		.addField('.mail', [{
			rule: 'email',
			errorMessage: 'Вы не ввели e-mail',
		}
		])
		.addField('.tel', [{
			rule: "function",
			validator: function (name, value) {
				const phone = selector.inputmask.unmaskedvalue();
				return phone.length === 10
			},
			errorMessage: 'Вы не ввели телефон',
		}]);
})