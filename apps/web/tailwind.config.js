import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			transitionTimingFunction: {
				faq: 'cubic-bezier(0.785, 0.135, 0.135, 1.015)',
				spring: 'cubic-bezier(.33,.3,.14,1.55)',
				'less-spring': 'cubic-bezier(.06,.34,.21,1.27)',
			},

			aspectRatio: {
				productCover: '345/270',
			},
			boxShadow: {
				homeSearchbar: '10px 0 25px rgba(0,0,0,0.06)',
				homeSearchbarInset: '0 0 8px rgba(0,0,0,0.16) inset',
				collectionGroup: '3px 2px 15px rgba(0,0,0,0.06)',
			},

			dropShadow: {
				menuDropDown: 'drop-shadow(0px 2px 74px rgba(0, 0, 0, 0.15))',
			},

			zIndex: {
				1: 1,
				5: 5,
			},

			borderRadius: {
				ten: '0.63rem',
			},

			screens: {
				xs: '480px',
				...defaultTheme.screens,
				'4xl': '1900px',
			},

			fontFamily: {
				sans: ['Rubik Variable', ...defaultTheme.fontFamily.sans],
			},

			fontSize: {
				13: '0.82rem',
				15: '0.95rem',
			},

			colors: {
				'base-black-text': '#2F2F2F',
				'base-black': '#232323',
				lave: '#5E5CA7',
			},

			spacing: {
				ten: '0.63rem',
			},

			height: {
				13: '3.25rem',
			},
		},
	},
	plugins: [
		plugin(function ({ matchVariant }) {
			matchVariant('nth', value => {
				return `& > :nth-child(${value})`
			})
		}),
	],
}
