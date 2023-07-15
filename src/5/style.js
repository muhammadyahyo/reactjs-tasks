import {styled, css, keyframes} from 'styled-components'

const Title = styled.h1`
  font-size: ${props => props.large ? "32px" : "24px"};
`

const Image = styled.img`

`
const getSize =(size)=>{
    switch (size) {
        case "large": return "500px";
        case "medium": return "300px";
        case "small" : return "100px"
        default: return "300px"
            
    }
}

const common = css`
    width: 100px;
    height: 100px;   
`;

const rotate = keyframes`
    from{
        transform:rotate(0deg)
    }
    to{
        transform:rotate(360deg)
    }
`

const Container = styled.div`
    width: ${({size}) => getSize(size)};
    height: ${({size}) => getSize(size)};
    border: 1px solid red;

    :active {
        transform: scale(0.97);
        opacity:0.7;
    }
`
const ActiveContainer = styled(Container)`
    height: 50px
    ${common}
    animation: ${rotate}
`


export {Title, Image, Container}