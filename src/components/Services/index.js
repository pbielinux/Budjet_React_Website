import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServicesElements'

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Nossos Serviços</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Ofertas em Tempo Real</ServicesH2>
					<ServicesP>Nossa plataforma é atualizada constantemente, garantindo o melhor preço para sua obra.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Planeador de Obra</ServicesH2>
					<ServicesP>Planeje suas compras através do serviço de gestão de materiais com calendário integrado.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Automação de Pedidos</ServicesH2>
					<ServicesP>Automatize seu processo de compra definindo ordens de compra baseadas em intervalos de preço</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
