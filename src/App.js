import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
    display: flex;
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

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation:${rotationAnimation} 1s linear infinite;
`

function App() {
    return (
        <Wrapper>
            <Box/>
        </Wrapper>
    )
}

export default App;
