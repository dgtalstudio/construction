'use strict';

import Vivus from 'vivus/dist/vivus.min';
import webFont from 'webfontloader/webfontloader';
import TweenLite from 'TweenLite';
import 'CSSPlugin';
import 'component/svg';

// Webfont
const webFontConfig = {
	google: {
		families: [
			'Roboto+Condensed::latin'
		]
	}
};
webFont.load(webFontConfig);

const els = [
	'.construcao__logotipo',
	'.construcao__titulo > h1',
	'.construcao__info'
];
for (const el of els) {
	TweenLite.set(el, {
		opacity: 0,
		y: -20
	});
}

const fp = new Vivus('fp', {
	animTimingFunction: Vivus.EASE,
	onReady: vivus => {
		vivus.el.style.opacity = 1;
	}
}, () => {
	els.forEach((el, idx) => {
		TweenLite.to(el, 1, {
			opacity: 1,
			y: 0,
			delay: 0.2 * idx,
			ease: 'easeInOut'
			// ease: Power1.easeInOut
		});
	});

	TweenLite.to('#particlesJs', 1, {
		opacity: 0.5,
		delay: 0.5 * els.length
	});
});
fp.play();
