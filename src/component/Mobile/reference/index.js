import styled from "styled-components";

function Reference() {
  return (
    <Container className="Reference" id="Reference">
      <span className="title">REFERENCE</span>
      <Content>
        <Logos>
          <Logo>
            <img src="./images/ic-telegram.svg" className="telegram" />
            <span>Telegram</span>
          </Logo>
          <Logo>
            <img src="./images/ic-github.svg" className="github" />
            <span>github</span>
          </Logo>
          <Logo>
            <img src="./images/ic-whitepaper.svg" className="whitepaper" />
            <span>whitepaper</span>
          </Logo>
        </Logos>
        <Line />
        <span className="title">Contact Team</span>
        <span className="email">Support@Unilord.io</span>
        <span className="email">Partnership@Unilord.io</span>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  .title {
    margin-top: 100px;
    font-family: Times New Roman;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  margin: auto auto;
  .title {
    margin-top: 45px;
    margin-bottom: 13px;
    font-family: Times New Roman;
    font-size: 30px;
    font-weight: bold;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
  .email {
    margin-top: 10px;
    font-family: Times New Roman;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
`;
const Logos = styled.div`
  display: flex;
  margin-top: 50px;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  width: 100vw;
  height: 150px;
  span {
    margin: auto auto;
    margin-bottom: 43px;
    font-family: Times New Roman;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
  .telegram {
    margin: auto auto;
    width: 46px;
    height: 38px;
  }
  .github {
    margin: auto auto;
    width: 56px;
    height: 55px;
  }
  .whitepaper {
    margin: auto auto;
    width: 54px;
    height: 55px;
  }
`;
const Line = styled.div`
  margin: auto auto;
  width: 90vw;
  height: 2px;
  object-fit: contain;
  border-radius: 3px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 #ffffff;
  background-color: #ffffff;
`;

export default Reference;
