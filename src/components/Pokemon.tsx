import React, { ReactElement } from 'react'
import { PkmnConsumer } from '../context/PokemonContext'
import styled, { keyframes } from 'styled-components'
import { AppThemeBase } from '../Theme'
import { getTypeBadge } from '../styled/type-badges'
import pokeball from './pokeball_icon.png'
import {titleCase} from '../utils'

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

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
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

const Details = styled.div`
    display: flex;
`

const Moves = styled.section`
    flex-grow: 1;
    
    table > tbody {
        display: block;
        width: 100%;
        height: 250px;
        overflow-y: scroll;
    }
`

const Pokemon = (): ReactElement => {
	return (
		<PkmnConsumer>
			{ ({currentPokemon, loadingCurrent}) => currentPokemon || loadingCurrent ? (
				currentPokemon && !loadingCurrent ? (
					<PokemonWrapper>
                    	<PokemonSprite src={`https://assets.thesilphroad.com/img/pokemon/icons/96x96/${currentPokemon.id}.png`} alt={`${currentPokemon.name} Sprite`}/>
						<div style={{display: 'flex', marginBottom: '10px'}}>
							<h1>{titleCase(currentPokemon.name)}</h1> <span>&nbsp;{currentPokemon.id}</span>
						</div>
						<TypesWrapper>
							{currentPokemon.types.map(type => getTypeBadge(type))}
						</TypesWrapper>
						<Details>
							{/* <Moves id="moves">
								<ul>
									{currentPokemon.moves.map(move => <li key={move.move.name}>{move.move.url}</li>)}
								</ul>
							</Moves> */}
							<Moves id="moves">
								<table>
									<thead style={{borderBottom: 'solid 1px white'}}>
										<tr>
											<th><strong>Move</strong></th>
											<th><strong>Learn Method</strong></th>
										</tr>
									</thead>
									<tbody>
										{currentPokemon.moves.map(move => {
											return (
												<tr style={{ maxHeight: '50px', borderBottom: '1px solid green', marginTop: '5px', overflowY: 'hidden' }} key={move.move.name}>
													<td>{move.move.name}</td>
													<td>
														<ul style={{overflowY: 'scroll'}}>
															{move.version_group_details.map(v => {
																return v.move_learn_method.name == 'level-up' ? (
																	<li key={move.move.name + '_' + v.version_group.name}>
																		{v.move_learn_method.name}&nbsp;-&nbsp;{v.level_learned_at}
																	</li>
																) : (
																	<li key={move.move.name + '_' + v.version_group.name}>
																		{v.move_learn_method.name}
																	</li>
																)
															})}
														</ul>
													</td>
												</tr>
											)
										})} 
									</tbody> 
								</table>
							</Moves>
						</Details>
				    </PokemonWrapper>
				) : (
					<PokemonWrapper>
                    	<div style={{width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<LoadingPokemonSprite src={pokeball} alt="No Pokemon Selected"/>
						</div>
                        Loading...
				    </PokemonWrapper>
				)
			) : (
				<PokemonWrapper>
					<div style={{width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<NoPokemonSprite src={pokeball} alt="No Pokemon Selected"/>
					</div>
				</PokemonWrapper>
			)}
		</PkmnConsumer>
	)
}

export default Pokemon
