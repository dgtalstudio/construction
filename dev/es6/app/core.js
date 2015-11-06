'use strict';

// import Vivus from 'vivus/dist/vivus.min';
import webFont from 'webfontloader/webfontloader';
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

// const dgtal = new Vivus('animaDGtal', {
// 	type: 'oneByOne',
// 	duration: 1000
// });
// dgtal.play(0.5);
