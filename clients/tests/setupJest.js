import React from 'react';

global.wp = {
	shortcode: {

	},
	apiRequest: {

	}
};

Object.defineProperty( global.wp, 'element', {
	get: () => React,
} );
