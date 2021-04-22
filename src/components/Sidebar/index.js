import React from 'react'
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} >
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						Sobre
					</SidebarLink>
					<SidebarLink to="products" onClick={toggle}>
						Produtos
					</SidebarLink>
					<SidebarLink to="services" onClick={toggle}>
						Serviços
					</SidebarLink>
					<SidebarLink to="payment" onClick={toggle}>
						Pagamento
					</SidebarLink>
					<SidebarLink to="newsletter" onClick={toggle}>
						Novidades
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/signin'>Sign In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
