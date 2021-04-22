import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './HeroElements'

const HeroSection = () => {
	const [hover, setHover] = useState(false)

	const onHover = () => {
		setHover(!hover)
	}

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='vide0/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Orçar uma obra nunca foi tão simples</HeroH1>
				<HeroP>
					Inscreva-se para o pré-lançamento e receba R$250 em créditos no seu primeiro pedido.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary='true'
						dark='true'
					>
						Quero saber mais {hover ?  <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
