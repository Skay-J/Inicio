const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	const scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_items.forEach((item) => {
	item.addEventListener('click', () => {
		// Al hacer clic en un item del menú, el menú siempre debe cerrarse.
		hamburger.classList.remove('active');
		mobile_menu.classList.remove('active');

		// Gestionar la clase 'active' para resaltar el item de menú actual
		menu_items.forEach(link => link.classList.remove('active'));
		item.classList.add('active');
	});
});