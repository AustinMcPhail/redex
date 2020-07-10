import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface LayoutProps {
    children: ReactElement[]
}

const LayoutWrapper = styled.div`
    background-color: ${(props) => props.theme.pokedexRed};
    height: 100%;
    display: grid;
    grid-template-columns: auto calc(100% / 5);
`

function Layout(props: LayoutProps): ReactElement {
	return (
		<LayoutWrapper>
			{props.children}
		</LayoutWrapper>
	)
}

export default Layout
