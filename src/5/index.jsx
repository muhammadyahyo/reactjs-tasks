import React, { Component } from 'react';
import { Title, Image, Container } from './style';
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        background: ${(props) => props.theme.bg};
        color: ${(props)=> props.theme.cl};
    }

`

class Lesson5 extends Component {
    state ={
        light: true,
    }
    render() {
        const theme ={
            bg: this.state.light? "white": "black",
            cl: this.state.light? "black": "white"
        }
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Title large>Style Component</Title>
                <Title>Style Component</Title>
                <Image  />
                <Container size="large"></Container>
                <Container size="medium"></Container>
                <Container size="small"></Container>

            </ThemeProvider>
        );
    }
}

export default Lesson5;