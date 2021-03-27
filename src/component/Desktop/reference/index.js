import styled from "styled-components";

function Reference() {
  return (
    <Container className="Reference" id="Reference">
      <Content>
        <Logos>
          <Logo onClick={() => window.open("./")}>
            <img src="./images/ic-telegram.svg" className="telegram" />
            <span>Telegram</span>
          </Logo>
          <Logo
            onClick={() => window.open("https://twitter.com/OfficialUnilord")}
          >
            <img src="./images/ic-twitter.svg" className="twitter" />
            <span>Twitter</span>
          </Logo>
          <Logo onClick={() => window.open("https://medium.com/@Unilord")}>
            <img src="./images/ic-medium.svg" className="medium" />
            <span>Medium</span>
          </Logo>
          <Logo onClick={() => window.open("https://github.com/Dev-Unilord")}>
            <img src="./images/ic-github.svg" className="github" />
            <span>github</span>
          </Logo>
          <Logo onClick={() => window.open("./UNILORD_whitepaper_2.pdf")}>
            <img src="./images/ic-whitepaper.svg" className="whitepaper" />
            <span>whitepaper</span>
          </Logo>
        </Logos>
        <Line />
        <span className="title">Contact Team</span>
        <span
          className="email"
          onClick={() => window.open("mailto:Support@Unilord.io")}
        >
          Support@Unilord.io
        </span>
        <span
          className="email"
          onClick={() => window.open("mailto:Partnership@Unilord.io")}
        >
          Partnership@Unilord.io
        </span>
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
  width: 710px;
  height: 500px;
  margin: auto auto;
  margin-left: 33vw;
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
    cursor: pointer;
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
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 190px;
  margin: auto auto;
  cursor: pointer;
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
    width: 70px;
    height: 58px;
  }
  .twitter {
    margin: auto auto;
    width: 70px;
    height: 57px;
  }
  .medium {
    margin: auto auto;
    width: 70px;
    height: 56px;
  }
  .github {
    margin: auto auto;
    width: 70px;
    height: 69px;
  }
  .whitepaper {
    margin: auto auto;
    width: 70px;
    height: 71px;
  }
`;
const Line = styled.div`
  width: 710px;
  height: 2px;
  object-fit: contain;
  border-radius: 3px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px 0 #ffffff;
  background-color: #ffffff;
`;

export default Reference;
