import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { PkmnConsumer, IPokemonListItemDto } from '../context/PokemonContext'
import { titleCase } from '../utils'
import { AppThemeBase } from '../Theme'
import pokeball from './pokeball_icon.png'

const PokemonListContainer = styled.section`
    margin-bottom: 25px;
    margin-top: 25px;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;

    padding-right: 1em;
`

const PokemonListWrapper = styled.ul`
    overflow-y: scroll;
`

const PokemonListItemWrapper = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: .25em;
    margin-bottom: .25em;

    color: ${(props) => props.theme.pokedexWhite};
    font-weight: bold;

    transition: font-size 0.25s;

    img {
        height: 50px;
        transition: height 0.25s;
    }

    :hover {
        font-size: 1.1em;
        img {
            height: 75px;
        }
    }
`

const Search = styled.input`
    border: none;
    border-bottom: 2px solid ${({ theme }: { theme: AppThemeBase }) => theme.pokedexWhite};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.pokedexWhite};
    background: none;
    outline: none;

    ::placeholder {
        color: ${({ theme }: { theme: AppThemeBase }) => theme.pokedexWhite};
    }
`


const PokemonList = (): ReactElement => {
    const [search, setSearch] = useState('')

    const searchFunc = (p: IPokemonListItemDto) => {
        return p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    }

    return (
        <PkmnConsumer>
            {({ pokemonList, selectPokemon }) => pokemonList ? (
                <PokemonListContainer>
                    <Search type="text" placeholder="Search for a Pokemon..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <PokemonListWrapper id='pkmnList'>
                        {pokemonList.filter(searchFunc).map((p, i: number) => {
                            return <PokemonListItemWrapper key={p.name} onClick={() => selectPokemon(p)}>
                                <h3>{titleCase(p.name)}</h3> <img src={p.sprite || pokeball} alt={`${p.name} Sprite`} />
                            </PokemonListItemWrapper>
                        })}
                    </PokemonListWrapper>
                </PokemonListContainer>
            ) : (
                    <PokemonListContainer>
                        <PokemonListWrapper id='pkmnList'>
                            <PokemonListItemWrapper>
                                <h2>Loading...</h2>
                            </PokemonListItemWrapper>
                        </PokemonListWrapper>
                    </PokemonListContainer>
                )}
        </PkmnConsumer>
    )
}
export default PokemonList
