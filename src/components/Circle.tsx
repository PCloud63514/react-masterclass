import styled from "styled-components";
import {useState} from "react";

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

interface ContainerProps {
    bgColor: string;
    borderColor: string
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor};
`


function Circle({bgColor, borderColor}: CircleProps) {
    const [counter, setCounter] = useState(0);
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {counter}
        </Container>
    )
}

export default Circle

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old`

sayHello({name: "", age: 12})