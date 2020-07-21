import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import PokemonList from './components/PokemonList'
import { PkmnProvider } from './context/PokemonContext'
import Pokemon from './components/Pokemon'
import { darkTheme, GlobalStyle } from './Theme'

interface IAppProps { }

const App: React.SFC<IAppProps> = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<PkmnProvider>
				<GlobalStyle />
				<Layout>
					<Pokemon></Pokemon>
					<PokemonList></PokemonList>
				</Layout>
			</PkmnProvider>
		</ThemeProvider>
	)
}

export default App