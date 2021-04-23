import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter
} from 'react-icons/fa'
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from '../Footer/FooterElements'

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Sobre</FooterLinkTitle>
							<FooterLink to="/signin">Equipe</FooterLink>
							<FooterLink to="/signin">Como Funciona</FooterLink>
							<FooterLink to="/signin">Carreiras</FooterLink>
							<FooterLink to="/signin">Investidores</FooterLink>
							<FooterLink to="/signin">Termos de Serviço</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Fale Conosco</FooterLinkTitle>
							<FooterLink to="/signin">Contato</FooterLink>
							<FooterLink to="/signin">Suporte</FooterLink>
							<FooterLink to="/signin">Destinatários</FooterLink>
							<FooterLink to="/signin">Patrocinadores</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to="/signin">Instagram</FooterLink>
							<FooterLink to="/signin">Facebook</FooterLink>
							<FooterLink to="/signin">LinkedIn</FooterLink>
							<FooterLink to="/signin">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome} >
							Budjet
						</SocialLogo>
							<WebsiteRights>Budjet ® {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
							<SocialIcons>
								<SocialIconLink href="//" target="_blank" aria-label="Facebook">
									<FaFacebook />
								</SocialIconLink>
								<SocialIconLink href="//" target="_blank" aria-label="Instagram">
									<FaInstagram />
								</SocialIconLink>
								<SocialIconLink href="//" target="_blank" aria-label="LinkedIn">
									<FaLinkedin />
								</SocialIconLink>
								<SocialIconLink href="//" target="_blank" aria-label="Twitter">
									<FaTwitter />
								</SocialIconLink>
							</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
