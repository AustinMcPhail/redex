import React, { Component, ReactNode, useState, useEffect, ReactElement } from 'react'
import { IPokemon } from '../api'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pokedex = require('pokeapi-js-wrapper')

interface Props {
    children: ReactNode
}

export interface IPokemonListItemDto {
	name: string
	url: string
	sprite?: string
}

export interface IPokemonState {
	loadingList?: boolean
	loadingCurrent?: boolean
	pokemonList?: IPokemonListItemDto[] | null
    currentPokemon?: IPokemon | null
    selectPokemon: any
}

const Context = React.createContext<IPokemonState>({
	selectPokemon: null
})

export class PkmnProvider extends Component<Props, IPokemonState> {
    state: IPokemonState = {
    	pokemonList: null,
    	selectPokemon: null
    }

    selectPokemon = (selected: IPokemonListItemDto): void => {
    	this.setState({
    		loadingCurrent: true,
    		currentPokemon: null
    	})
    	const P = new Pokedex.Pokedex()
    	Promise.all([
    		P.getPokemonByName(selected.name),
			P.getPokemonSpeciesByName(selected.name),
    	]).then(([pokemon, species_details]: [IPokemon, any]) => {
    		pokemon.species_details = species_details
    		this.setState({
    			loadingCurrent: false,
    			currentPokemon: pokemon
    		})
    	})
    }

    componentDidMount(): void {
    	const P = new Pokedex.Pokedex()
    	P.resource('/api/v2/pokemon?limit=50').then(({results}: {results: IPokemonListItemDto[]}) => {
    		this.setState({
    			pokemonList: results
			})
			results.forEach((p, i) => {
				P.getPokemonByName(p.name).then((res: any) => {
					this.setState({
						...this.state,
						pokemonList: this.state.pokemonList?.map(pokemon => {
							if (pokemon.name !== p.name) {
								return pokemon
							}

							pokemon.sprite = res.sprites.front_default
							return pokemon
						})
					})
				})
			})
    	})
    }

    render(): ReactNode {
    	return (
    		<Context.Provider value={{ 
    			...this.state,
    			selectPokemon: this.selectPokemon
    		}}>
    			{this.props.children}
    		</Context.Provider>
    	)
    }
}

export const PkmnConsumer = Context.Consumer
