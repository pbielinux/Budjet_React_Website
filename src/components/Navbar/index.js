import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavBtn,
	NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle, active }) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = ()=> {
		if(window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect (() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	return (
		<>
		<IconContext.Provider value={{ color: '#fff' }}>
		<Nav scrollNav={scrollNav}>s
			<NavbarContainer>
				<NavLogo to='/' onClick={toggleHome}>Budjet</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sobre</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="products" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Produtos</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Serviços</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="payment" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Pagamento</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="newsletter" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Novidades</NavLink>
					</NavItem>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="Comece agora" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
		</IconContext.Provider>
		</>
	)
}

export default Navbar
