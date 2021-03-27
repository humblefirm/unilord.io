import styled from "styled-components";

function About() {
  return (
    <Container className="About" id="About">
      <Content>
        <span className="title">ABOUT</span>
        <Ic>
          <Info>
            <img src="./images/ic-1.svg" />
            <span>
              Leverage ETH using LORD while <br /> earning yield with PEER
            </span>
          </Info>
        </Ic>
        <Ic>
          <Info>
            <img src="./images/ic-2.svg" />
            <span>
              Incentives on holding LORD and PEER
              <br /> while trading incurs
              <br /> 3% of token burn of PEER
            </span>
          </Info>
        </Ic>
        <Ic>
          <Info>
            <img src="./images/ic-3.svg" />
            <span>
              Lending and Borrowing enabled
              <br /> with negative and positive
              <br />
              Redemption rate applicable <br />
              to Holders and Traders.
            </span>
          </Info>
        </Ic>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  .title {
    font-family: Times New Roman;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
`;

const Ic = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 62px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin: auto auto;
    width: 75px;
    height: 75px;
  }
  span {
    margin: auto auto;
    font-family: Times New Roman;
    font-size: 12px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
  }
`;
export default About;
