const keys = { 37: true, 38: true, 39: true, 40: true };

function preventDefault(e) {
	e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

const supportsPassive = true;
const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent =
	'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

export function disableScroll() {
	window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.addEventListener(wheelEvent, preventDefault, wheelOpt);
	window.addEventListener('touchmove', preventDefault, wheelOpt);
	window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

export function enableScroll() {
	window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
	window.removeEventListener('touchmove', preventDefault, wheelOpt);
	window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
