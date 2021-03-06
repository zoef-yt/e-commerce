// JS for modal

const openModal = (id) => {
	if (document.getElementById(id).classList.contains('modal')) {
		document.getElementById(id).classList.add('modal-opened');
		document.getElementById(id).classList.remove('modal-display-none');
	}
};

const closeModal = (id) => {
	if (document.getElementById(id)?.classList.contains('modal')) {
		document.getElementById(id)?.classList.remove('modal-opened');
		document.getElementById(id)?.classList.add('modal-display-none');
	}
};

document.querySelectorAll('.modal').forEach((el) => el.addEventListener('click', (e) => closeModal(e.target.id)));

document.querySelector('#login-text')?.addEventListener('click', () => {
	openModal('login-modal');
});

const changeToSignUp = () => {
	document.querySelectorAll('.only-for-sign-in').forEach((el) => (el.style.display = 'none'));
	document.querySelectorAll('.only-for-sign-up').forEach((el) => (el.style.display = 'block'));
	document.querySelector('#login-text').innerHTML = 'Hello, Sign Up';
};

const changeToSignIn = () => {
	document.querySelectorAll('.only-for-sign-in').forEach((el) => (el.style.display = 'block'));
	document.querySelectorAll('.only-for-sign-up').forEach((el) => (el.style.display = 'none'));
	document.querySelector('#login-text').innerHTML = 'Hello, Login';
};

//dropdown scrollbar code here
(function () {
	const scroller = document.querySelector('.filter-items');
	const dropDown = document.querySelectorAll('.dropdown-content');
	scroller?.addEventListener('scroll', checkScroll);
	function checkScroll() {
		for (let i = 0; i < dropDown.length; i++) {
			dropDown[i].style.transform = 'translateX(-' + scroller.scrollLeft + 'px)';
		}
	}
})();

const cartLocation = '/screens/cart/cart.html';
const wishListLocation = '/screens/wishlist/wishlist.html';
document.querySelectorAll('.cart-icon').forEach((e) => e.addEventListener('click', () => (location.href = cartLocation)));

document.querySelectorAll('.wishlist-icon').forEach((e) => e.addEventListener('click', () => (location.href = wishListLocation)));

//* dark mode

let currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
	document.documentElement.setAttribute('data-theme', 'light');
	document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
		item.src = '/assets/svg/moon.svg';
	});
} else {
	document.documentElement.setAttribute('data-theme', 'dark');
	document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
		item.src = '/assets/svg/sun.svg';
	});
}
const switchTheme = () => {
	currentTheme = localStorage.getItem('theme');
	if (currentTheme === 'light') {
		document.documentElement.setAttribute('data-theme', 'dark');
		document.getElementById('showcase-display-iframe')?.contentWindow.location.reload();
		localStorage.setItem('theme', 'dark');
		document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
			item.src = '/assets/svg/sun.svg';
		});
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		document.getElementById('showcase-display-iframe')?.contentWindow.location.reload();
		localStorage.setItem('theme', 'light');
		document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
			item.src = '/assets/svg/moon.svg';
		});
	}
};

document.querySelectorAll('.theme-changer').forEach((e) => e.addEventListener('click', switchTheme));
