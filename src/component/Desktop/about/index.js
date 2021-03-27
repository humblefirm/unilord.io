import styled from "styled-components";

function About() {
  return (
    <Container className="About" id="About">
      <Content>
        <Ic>
          <Info>
            <img src="./images/ic-1.svg" />
            <span className="ic1">
              Leverage ETH using LORD while earning yield with PEER
            </span>
          </Info>
          <Line />
        </Ic>
        <Ic>
          <Info>
            <img src="./images/ic-2.svg" />
            <span>
              Incentives on holding LORD and PEER while trading incurs 3% of
              token burn of PEER
            </span>
          </Info>
          <Line />
        </Ic>
        <Ic>
          <Info>
            <img src="./images/ic-3.svg" />
            <span>
              Lending and Borrowing enabled with negative and positive
              Redemption rate applicable to Holders and Traders.{" "}
            </span>
          </Info>
          <Line />
        </Ic>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100vw;
  min-width: 1280px;
  height: 100vh;
  min-height: 480px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  height: 500px;
  margin: auto auto;
  margin-left: 33vw;
`;

const Ic = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 62px;
  width: 760px;
  height: 70px;
`;
const Info = styled.div`
  display: flex;
  img {
    width: 75px;
    height: 60px;
  }
  span {
    margin: auto auto;
    margin-left: 60px;
    width: 544px;
    height: 57px;
    font-family: Times New Roman;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    color: #ffffff;
  }
  .ic1 {
    height: 27px;
  }
`;
const Line = styled.div`
  margin-top: 7px;
  width: 757px;
  height: 3px;
  object-fit: contain;
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.47);
  border: solid 1px #707070;
  background-color: #ffffff;
`;

export default About;
