'use strict';
let body = document.querySelector('body');
let fixed_padding = document.querySelectorAll('.fixed-padding');

/* Select */

function addSelect(elem, multiple = false) {
	let select_icon = document.querySelector('#' + elem.id + ' .select-icon'),
			select_list = document.querySelector('#' + elem.id + ' .select-list'),
			select_input = document.querySelectorAll('#' + elem.id + ' .select-list .select-input'),
			select_label = document.querySelectorAll('#' + elem.id + ' .select-list .select-label'),
			select_value = document.querySelector('#' + elem.id + ' .select-value'),
			select_title = document.querySelector('#' + elem.id + ' .select-title'),
			prevValue,
			countValue = 0;

	select_title.addEventListener('click', function(e) {
		select_list.classList.toggle('active');
		if (select_icon) {
			select_icon.classList.toggle('active');
		}
	});

	document.documentElement.addEventListener('click', function(e) {
		if (!e.target.closest('#' + elem.id)) {
			select_icon.classList.remove('active');
			select_list.classList.remove('active');
		}
	});

	if (multiple == false) {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				select_value.innerHTML = select_label[i].innerHTML;
				prevValue = i;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				select_value.innerHTML = select_label[i].innerHTML;
				select_label[i].classList.add('active');
				if (prevValue != undefined) {
					select_input[prevValue].checked = false;
					select_label[prevValue].classList.remove('active');
					if (prevValue == i) {
						select_input[prevValue].checked = true;
					}
				}
				prevValue = i;
			});
		}
	} else {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				if (select_value.innerHTML == '') {
					select_value.innerHTML = select_label[i].innerHTML;
				} else {
					select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
				}
				countValue = countValue + 1;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				if (select_input[i].checked == true) {
					select_label[i].classList.add('active');
					if (select_value.innerHTML == '') {
						select_value.innerHTML = select_label[i].innerHTML;
					} else {
						select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
					}
					countValue = countValue + 1;
				} else {
					select_label[i].classList.remove('active');
					let prevText = select_value.innerHTML;
					select_value.innerHTML = select_value.innerHTML.replace(', ' + select_label[i].innerHTML, '');
					if (prevText == select_value.innerHTML) {
						select_value.innerHTML = select_value.innerHTML.replace(select_label[i].innerHTML + ', ', '');
					}
					countValue = countValue - 1;
					if (countValue == 0) {
						select_input[i].checked = true;
						select_label[i].classList.add('active');
						countValue = countValue + 1;
					}
				}
			});
		}
	}
}

function addSelectMod_1(elem, multiple = false) {
	let select_icon = document.querySelector('#' + elem.id + ' .select-icon'),
			select_list = document.querySelector('#' + elem.id + ' .select-list'),
			select_input = document.querySelectorAll('#' + elem.id + ' .select-list .select-input'),
			select_label = document.querySelectorAll('#' + elem.id + ' .select-list .select-label'),
			select_value = document.querySelector('#' + elem.id + ' .select-value'),
			select_title = document.querySelector('#' + elem.id + ' .select-title'),
			prevValue,
			valueText = select_value.innerHTML,
			countValue = 0;

	select_title.addEventListener('click', function(e) {
		select_list.classList.toggle('active');
		if (select_icon) {
			select_icon.classList.toggle('active');
		}
	});

	document.documentElement.addEventListener('click', function(e) {
		if (!e.target.closest('#' + elem.id)) {
			select_icon.classList.remove('active');
			select_list.classList.remove('active');
		}
	});

	if (multiple == false) {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				select_value.innerHTML = select_label[i].innerHTML;
				prevValue = i;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				select_value.innerHTML = select_label[i].innerHTML;
				select_label[i].classList.add('active');
				if (prevValue != undefined) {
					select_input[prevValue].checked = false;
					select_label[prevValue].classList.remove('active');
					if (prevValue == i) {
						select_input[prevValue].checked = true;
					}
				}
				prevValue = i;
			});
		}
	} else {
		for(let i = 0, length = select_input.length; i < length; i++) {
			if (select_input[i].checked) {
				select_label[i].classList.add('active');
				if (select_value.innerHTML == '' || select_value.innerHTML == valueText) {
					select_value.innerHTML = select_label[i].innerHTML;
				} else {
					select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
				}
				countValue = countValue + 1;
			}

			select_input[i].addEventListener('change', function(e) {
				select_icon.classList.remove('active');
				select_list.classList.remove('active');
				if (select_input[i].checked == true) {
					select_label[i].classList.add('active');
					if (select_value.innerHTML == '' || select_value.innerHTML == valueText) {
						select_value.innerHTML = select_label[i].innerHTML;
					} else {
						select_value.innerHTML = select_value.innerHTML + ', ' + select_label[i].innerHTML;
					}
					countValue = countValue + 1;
				} else {
					select_label[i].classList.remove('active');
					let prevText = select_value.innerHTML;
					select_value.innerHTML = select_value.innerHTML.replace(', ' + select_label[i].innerHTML, '');
					if (prevText == select_value.innerHTML) {
						select_value.innerHTML = select_value.innerHTML.replace(select_label[i].innerHTML + ', ', '');
					}
					countValue = countValue - 1;
					if (countValue == 0) {
						select_input[i].checked = true;
						select_label[i].classList.add('active');
						countValue = countValue + 1;
					}
				}
			});
		}
	}
}

addSelect(document.getElementById('select-country'));
addSelect(document.getElementById('select-country-2'));

/* Slider */

let slidesHeader = document.querySelectorAll('.header-slide');

for(let i = 0, length = slidesHeader.length; i < length; i++) {
	addSelectMod_1(document.getElementById('select-' + (i + 1) + '-size'), true);
}

$(document).ready(function() {
	$('.header-slider').slick({
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		dots: true,
	});
});

/* Burger */

let check = document.getElementById('burg-check');
let burg_link = document.getElementsByClassName('burg-link');

if (check.checked) {
	burgBodyLock();
} else {
	burgBodyUnLock();
}

for(let i = 0, length = burg_link.length; i < length; i++) {
	burg_link[i].addEventListener('click', function(e) {
		if (check.checked) {
			check.checked = false;
			burgBodyUnLock();
		}
	});
}

check.addEventListener('click', function(e) {
	let popupActive = document.querySelector('.popup.open');

	if (popupActive) {
		closePopup(popupActive, false);
	}

	if (check.checked) {
		burgBodyLock();
	} else {
		burgBodyUnLock();
	}
});

document.documentElement.addEventListener('click', function(e) {
	if ((!e.target.closest('.burger') && check.checked) || (e.target.closest('.black-bg') && check.checked)) {
		check.checked = false;
		burgBodyUnLock();
	}
});

function burgBodyLock() {
	let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (fixed_padding.length > 0) {
		for(let i = 0, length = fixed_padding.length; i < length; i++) {
			fixed_padding[i].style.paddingRight = paddingValue;
		}
	}

	body.style.paddingRight = paddingValue;
	body.classList.add('lock');
}

function burgBodyUnLock() {
	if (fixed_padding.length > 0) {
		for(let i = 0, length = fixed_padding.length; i < length; i++) {
			fixed_padding[i].style.paddingRight = '0px';
		}
	}

	body.style.paddingRight = '0px';
	body.classList.remove('lock');
}

/* Popup */

let popup_btn = document.getElementsByClassName('popup-btn');
let unlock = true;
let timeout = 500;

if (popup_btn.length > 0) {
	for(let i = 0, length = popup_btn.length; i < length; i++) {
		popup_btn[i].addEventListener('click', function(e) {
			if (!check.checked) {
				let class_popup = popup_btn[i].className.split('');
				let popupid = '';

				for(let i = 0, length = class_popup.length; i < length; i++) {
					if (class_popup[i] == 'o' && class_popup[i + 1] == 'p' && class_popup[i + 2] == '-') {
						for(let index = i + 3, length = class_popup.length; index < length; index++) {
							if (class_popup[index] != '' && class_popup[index] != ' ') {
								popupid = popupid + class_popup[index];
							} else {
								break;
							}
						}
					}
				}

				openPopup(document.getElementById(popupid));
			}
		});
	}
}

let close_popup = document.getElementsByClassName('close-popup');

if (close_popup.length > 0) {
	for(let i = 0, length = close_popup.length; i < length; i++) {
		close_popup[i].addEventListener('click', function(e) {
			closePopup(close_popup[i].closest('.popup'));
		});
	}
}

function openPopup(elem) {
	if (elem && unlock && !check.checked) {
		let popupActive = document.querySelector('.popup.open');

		if (popupActive) {
			closePopup(popupActive, false);
		} else {
			bodyLock();
		}

		elem.classList.add('open');
		elem.addEventListener('click', function(e) {
			if (!e.target.closest('.popup-body')) {
				closePopup(e.target.closest('.popup'));
			}
		});
	}
}

function closePopup(elem, doUnlock = true) {
	if (unlock) {
		elem.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (fixed_padding.length > 0) {
		for(let i = 0, length = fixed_padding.length; i < length; i++) {
			fixed_padding[i].style.paddingRight = paddingValue;
		}
	}

	body.style.paddingRight = paddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function() {
		if (fixed_padding.length > 0) {
			for(let i = 0, length = fixed_padding.length; i < length; i++) {
				fixed_padding[i].style.paddingRight = '0px';
			}
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function(e) {
	if (e.which === 27) {
		closePopup(document.querySelector('.popup.open'));
	}
});

/* Aminate Page */

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	function animItemsFunc() {
		for(let i = 0, length = animItems.length; i < length; i++) {
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItems[i].offsetHeight / animStart;

			if (animItems[i].offsetHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > offset(animItems[i]).top - animItemPoint) && pageYOffset < (offset(animItems[i]).top + animItems[i].offsetHeight)) {
				animItems[i].classList.add('active');
			}
		}
	}
	function offset(elem) {
		let rect = elem.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
	}

	window.addEventListener('scroll', animItemsFunc);
	setTimeout(animItemsFunc, 300);
}