import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { AppThemeBase } from '../Theme'
import { Type } from '../api'

export const TypeBadge = styled.span`
    font-weight: bold;
    font-size: 1em;
    font-family: 'Dosis', sans-serif;

    background-color: white;
    color: black;
    border: .5px solid gray;

    padding: .25em 1em;
    margin-right: .5em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 25px;
`
export const BugBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.bug.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.bug.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.bug.secondary};
`

export const DarkBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.dark.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.dark.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.dark.secondary};
`

export const DragonBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.dragon.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.dragon.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.dragon.secondary};
`

export const ElectricBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.electric.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.electric.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.electric.secondary};
`

export const FairyBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.fairy.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.fairy.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.fairy.secondary};
`

export const FightingBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.fighting.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.fighting.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.fighting.secondary};
`

export const FireBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.fire.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.fire.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.fire.secondary};
`

export const FlyingBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.flying.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.flying.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.flying.secondary};
`

export const GhostBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.ghost.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.ghost.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.ghost.secondary};
`

export const GrassBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.grass.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.grass.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.grass.secondary};
`

export const GroundBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.ground.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.ground.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.ground.secondary};
`

export const IceBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.ice.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.ice.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.ice.secondary};
`

export const NormalBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.normal.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.normal.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.normal.secondary};
`

export const PoisonBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.poison.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.poison.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.poison.secondary};
`

export const PsychicBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.psychic.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.psychic.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.psychic.secondary};
`

export const RockBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.rock.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.rock.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.rock.secondary};
`

export const SteelBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.steel.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.steel.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.steel.secondary};
`

export const WaterBadge = styled(TypeBadge)`
    background-color: ${({ theme }: { theme: AppThemeBase }) => theme.types.water.primary};
    color: ${({ theme }: { theme: AppThemeBase }) => theme.types.water.text};
    border: .5px solid ${({ theme }: { theme: AppThemeBase }) => theme.types.water.secondary};
`

export const getTypeBadge = (type: Type): ReactElement => {
	switch (type.type.name) {
		case 'bug':
			return <BugBadge key='bug'>Bug</BugBadge>
		case 'dark':
			return <DarkBadge key='dark'>Dark</DarkBadge>
		case 'dragon':
			return <DragonBadge key='dragon'>Dragon</DragonBadge>
		case 'electric':
			return <ElectricBadge key='electric'>Electric</ElectricBadge>
		case 'fairy':
			return <FairyBadge key='fairy'>Fairy</FairyBadge>
		case 'fighting':
			return <FightingBadge key='fighting'>Fighting</FightingBadge>
		case 'fire':
			return <FireBadge key='fire'>Fire</FireBadge>
		case 'flying':
			return <FlyingBadge key='flying'>Flying</FlyingBadge>
		case 'ghost':
			return <GhostBadge key='ghost'>Ghost</GhostBadge>
		case 'grass':
			return <GrassBadge key='grass'>Grass</GrassBadge>
		case 'ground':
			return <GroundBadge key='ground'>Ground</GroundBadge>
		case 'ice':
			return <IceBadge key='ice'>Ice</IceBadge>
		case 'normal':
			return <NormalBadge key='normal'>Normal</NormalBadge>
		case 'poison':
			return <PoisonBadge key='poison'>Poison</PoisonBadge>
		case 'psychic':
			return <PsychicBadge key='psychic'>Psychic</PsychicBadge>
		case 'rock':
			return <RockBadge key='rock'>Rock</RockBadge>
		case 'steel':
			return <SteelBadge key='steel'>Steel</SteelBadge>
		case 'water':
			return <WaterBadge key='water'>Water</WaterBadge>
		default:
			return <TypeBadge>TypeName</TypeBadge>
	}
}