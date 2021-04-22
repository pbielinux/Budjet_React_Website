import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<>
		<Nav>
			<NavbarContainer>
				<NavLogo to='/'>Budjet</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLinks to="about">Sobre</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="products">Produtos</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="services">Serviços</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="payment">Pagamento</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="newsletter">Novidades</NavLinks>
					</NavItem>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="Comece agora">Sign In</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
		</>
	)
}

export default Navbar
