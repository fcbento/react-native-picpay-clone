import React from 'react'
import { Text } from 'react-native'
import { Wrapper, Header, Container, BalanceContainer, BalanceTitle, Balance } from './styles'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Suggestions from '../../components/suggestions'
import Activities from '../../components/activities'
import Tips from '../../components/tips'
import Banner from '../../components/banner'

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons
                        name="qrcode-scan" size={30}
                        color="#10c86e"
                    />
                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>

                <Suggestions />
                <Activities/>
                <Tips/>
                <Banner/>
            </Container>
        </Wrapper>
    );
}