import styled from "styled-components";

const Father = styled.div`
  display: flex;
`

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`

const Circle = styled(Box)`
  border-radius: 50px;
`

const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: aqua;
`;

const Btn = styled.button`
  border: 0;
  border-radius: 15px;
`

function App() {
    return (
        <Father as="header">
            <Box bgColor="teal"/>
            <Circle bgColor="tomato"/>
            <Btn>Log in</Btn>
            <Btn as="a">Log in</Btn>
            <Input/>
        </Father>
    )
}

export default App;
