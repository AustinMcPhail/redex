import React, { ReactElement } from 'react'
import { PkmnConsumer } from '../context/PokemonContext'
import styled, { keyframes } from 'styled-components'
import { AppThemeBase } from '../Theme'
import { getTypeBadge } from '../styled/type-badges'
import pokeball from './pokeball_icon.png'
import { titleCase } from '../utils'

const PokemonWrapper = styled.section`
    margin: 25px;
    padding: 1em;

    overflow-y: scroll;

    border-radius: 15px;

    box-shadow: 0px 0px 20px 0px ${({ theme }: { theme: AppThemeBase }) => theme.pokedexGreen}7D inset;
    /* -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75) inset; */

    color: ${({ theme }: { theme: AppThemeBase }) => theme.pokedexGreen};

    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.pokedexBlack};

    display: grid;
	grid-template-areas:
    	'details evolutions'
    	'details moves';
	grid-gap: 10px;
	padding: 10px;
`

const TypesWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const PokemonSprite = styled.img`
    object-fit: cover;

    width: 200px;
    height: 200px;
`

const NoPokemonSprite = styled.img`
    object-fit: cover;

    width: 50px;
    height: 50px;

    opacity: 0.25;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingPokemonSprite = styled(NoPokemonSprite)`
    animation: ${rotate} 2s linear infinite;
`

const Details = styled.section`
	grid-area: details;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Moves = styled.ul`
	grid-area: moves;

	overflow-y: scroll;
`

const Evolutions = styled.section`
	grid-area: evolutions;
`

const Move = styled.li`
	margin-bottom: .5rem;
	padding: .5rem;
	background: ${({ theme }: { theme: AppThemeBase }) => theme.pokedexGreen};
	color: ${({ theme }: { theme: AppThemeBase }) => theme.pokedexBlack};
	border-radius: 10px;
`

const Pokemon = (): ReactElement => {
	return (
		<PkmnConsumer>
			{({ currentPokemon, loadingCurrent }) => currentPokemon || loadingCurrent ? (
				currentPokemon && !loadingCurrent ? (
					<PokemonWrapper>
						<Details>
							<PokemonSprite src={currentPokemon.sprites.front_default} alt={`${currentPokemon.name} Sprite`} />
							<div style={{ display: 'flex', marginBottom: '10px' }}>
								<h1>{titleCase(currentPokemon.name)}</h1> <span>&nbsp;{currentPokemon.id}</span>
							</div>
							<TypesWrapper>
								{currentPokemon.types.map(type => getTypeBadge(type))}
							</TypesWrapper>
						</Details>
						<Moves>
							{currentPokemon.moves.map(move => {
								return (
									<Move key={move.move.name}>
										<span>{move.move.name}</span>
									</Move>
									// <tr style={{ maxHeight: '50px', borderBottom: '1px solid green', marginTop: '5px', overflowY: 'hidden' }} key={move.move.name}>
									// 	<td>{move.move.name}</td>
									// 	<td>
									// 		<ul style={{ overflowY: 'scroll' }}>
									// 			{move.version_group_details.map(v => {
									// 				return v.move_learn_method.name == 'level-up' ? (
									// 					<li key={move.move.name + '_' + v.version_group.name}>
									// 						{v.move_learn_method.name}&nbsp;-&nbsp;{v.level_learned_at}
									// 					</li>
									// 				) : (
									// 						<li key={move.move.name + '_' + v.version_group.name}>
									// 							{v.move_learn_method.name}
									// 						</li>
									// 					)
									// 			})}
									// 		</ul>
									// 	</td>
									// </tr>
								)
							})}
						</Moves>
						<Evolutions>Evolutions</Evolutions>
					</PokemonWrapper>
				) : (
						<PokemonWrapper>
							<Details>
								<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
									<LoadingPokemonSprite src={pokeball} alt="No Pokemon Selected" />
								</div>
							</Details>
						</PokemonWrapper>
					)
			) : (
					<PokemonWrapper>
						<Details>
							<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<NoPokemonSprite src={pokeball} alt="No Pokemon Selected" />
							</div>
						</Details>
					</PokemonWrapper>
				)}
		</PkmnConsumer>
	)
}

export default Pokemon
