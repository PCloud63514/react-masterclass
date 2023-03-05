import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CoinList = styled.ul``
const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }

  &:hover {
    color: ${props => props.theme.accentColor}
  }
`
const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor}
`
const Loader = styled.div`
  text-align: center;
  display: block;
`
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`
interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins")
            const json = await response.json();
            console.log(json)
            setCoins(json.slice(0, 100))
            setLoading(false);
        })();
    }, []);

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? (<Loader>Loading ...</Loader>) : (
                <CoinList>
                    {coins.map(coin =>
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>
                                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>)
                    }
                </CoinList>
            )}
        </Container>
    )
}

export default Coins