import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`

const Emoji = styled.span`
  font-size: 36px;
`

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}: hover {
      font-size: 150px;
    }
  // ${Emoji} {
  //   &:hover {
  //     font-size: 150px;
  //   }
  //
  //   &:active {
  //     opacity: 0;
  //   }
  }
`

function App() {
    return (
        <Wrapper>
            <Box>
                <Emoji>🚀</Emoji>
            </Box>
        </Wrapper>
    )
}

export default App;
