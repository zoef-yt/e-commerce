// JS for modal

const openModal = (id) => {
	if (document.getElementById(id).classList.contains('modal')) {
		document.getElementById(id).classList.add('modal-opened');
		document.getElementById(id).classList.remove('modal-display-none');
	}
};

const closeModal = (id) => {
	if (document.getElementById(id).classList.contains('modal')) {
		document.getElementById(id).classList.remove('modal-opened');
		document.getElementById(id).classList.add('modal-display-none');
	}
};

document.querySelectorAll('.modal').forEach((el) => el.addEventListener('click', (e) => closeModal(e.target.id)));

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
