import styled from "styled-components";

function Reference() {
  return (
    <Container className="Reference" id="Reference">
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
  .title {
    margin-top: 45px;
    margin-bottom: 13px;
    font-family: NotoSerif;
    font-size: 30px;
    font-weight: bold;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
  .email {
    margin-top: 10px;
    font-family: NotoSerif;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
`;
const Logos = styled.div`
  display: flex;
  margin-left: 70px;
  margin-right: 70px;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 190px;
  margin: auto auto;
  span {
    margin: auto auto;
    margin-bottom: 43px;
    font-family: NotoSerif;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
  .telegram {
    margin: auto auto;
    width: 99px;
    height: 82px;
  }
  .github {
    margin: auto auto;
    width: 120px;
    height: 117px;
  }
  .whitepaper {
    margin: auto auto;
    width: 114px;
    height: 116px;
  }
`;
const Line = styled.div`
  width: 714px;
  height: 2px;
  object-fit: contain;
  border-radius: 3px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 #ffffff;
  background-color: #ffffff;
`;

export default Reference;
