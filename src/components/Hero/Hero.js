import React from 'react';
import { Container, Content } from './Styles';
import Typical from 'react-typical'

function Hero(props) {
    return (
        <Container>
            <Content>
                <h1>{props.title}</h1>
                <Typical
                    loop={Infinity}
                    wrapper="span"
                    steps={[
                        '<DesenvolvedorMobile/>', 1000,
                        '<DesenvolvedorFront-end/>', 1000
                    ]}
                />
            </Content>
        </Container>
    );
}

export default Hero;