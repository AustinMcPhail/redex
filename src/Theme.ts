import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export interface TypeTheme {
	primary: string
	secondary?: string
	text?: string
}

export interface TypeColors {
	bug: TypeTheme
	dark: TypeTheme
	dragon: TypeTheme
	electric: TypeTheme
	fairy: TypeTheme
	fighting: TypeTheme
	fire: TypeTheme
	flying: TypeTheme
	ghost: TypeTheme
	grass: TypeTheme
	ground: TypeTheme
	ice: TypeTheme
	normal: TypeTheme
	poison: TypeTheme
	psychic: TypeTheme
	rock: TypeTheme
	steel: TypeTheme
	water: TypeTheme
}

export interface AppThemeBase {
	pokedexBlue: string
	pokedexRed: string
	pokedexGreen: string
	pokedexWhite: string
	pokedexBlack: string,
	types: TypeColors
}


type AppTheme = AppThemeBase

const types: TypeColors = {
	bug: {
		primary: '#ABBC18',
		secondary: '#889605',
		text: 'white'
	},
	dark: {
		primary: '#4F382A',
		secondary: '#38281E',
		text: 'white'
	},
	dragon: {
		primary: '#745BDE',
		secondary: '#6B53D1',
		text: 'white'
	},
	electric: {
		primary: '#FCC219',
		secondary: '#EFA303',
		text: 'white'
	},
	fairy: {
		primary: '#F6B4F6',
		secondary: '#E18FE1',
		text: 'white'
	},
	fighting: {
		primary: '#7F3016',
		secondary: '#63210A',
		text: 'white'
	},
	fire: {
		primary: '#F14004',
		secondary: '#C81C00',
		text: 'white'
	},
	flying: {
		primary: '#94A7F3',
		secondary: '#5B72D5',
		text: 'white'
	},
	ghost: {
		primary: '#5E5EB4',
		secondary: '#434394',
		text: 'white'
	},
	grass: {
		primary: '#75C534',
		secondary: '#349900',
		text: 'white'
	},
	ground: {
		primary: '#D3B355',
		secondary: '#AF8E2F',
		text: 'white'
	},
	ice: {
		primary: '#C5F1FE',
		secondary: '#6CD4F4',
		text: 'white'
	},
	normal: {
		primary: '#CFCAC4',
		secondary: '#AEA695',
		text: 'white'
	},
	poison: {
		primary: '#964496',
		secondary: '#792B7C',
		text: 'white'
	},
	psychic: {
		primary: '#ED4682',
		secondary: '#DD336A',
		text: 'white'
	},
	rock: {
		primary: '#BBA356',
		secondary: '#9D8539',
		text: 'white'
	},
	steel: {
		primary: '#C1C2CE',
		secondary: '#9292A3',
		text: 'white'
	},
	water: {
		primary: '#339AFC',
		secondary: '#0466C2',
		text: 'white'
	},
}

export const themeBase = {
	pokedexBlue: '#28AAFD',
	pokedexRed: '#DC0A2D',
	pokedexGreen: '#51AE5F',
	pokedexWhite: '#DEDEDE',
	pokedexBlack: '#00312B'
}

export const darkTheme: AppTheme = {
	...themeBase,
	types
}

export const GlobalStyle = createGlobalStyle<{ theme: AppTheme }>`
  	${reset}
  	body {
		height: 100vh;
		font-family: 'Dosis', sans-serif;
  	}

  	h1 { font-size: 2em; }
	h2 { font-size: 1.5em; }
	h3 { font-size: 1.17em; }
	h4 { font-size: 1.12em; }
	h5 { font-size: .83em; }
	h6 { font-size: .75em; }
`