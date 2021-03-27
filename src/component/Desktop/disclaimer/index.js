import styled from "styled-components";

function Disclaimer() {
  return (
    <Container className="Disclaimer" id="Disclaimer">
      <Content>
        We do not guarantee that the Site will be secure or free from bugs or
        viruses. <p />
        You are responsible for configuring your information technology,
        computer programmes and platform in order to access the Site. You should
        use your own virus protection software. <p />
        We cannot promise that the use of the Site, or any content taken from
        the Site, will not infringe the rights of any third party. <p /> The
        content and materials available on the Site are for informational
        purposes only and is not intended to address your particular
        requirements. In particular, the content and materials available on the
        Site does not constitute any form of advice or recommendation by us,
        should not be regarded as an offer, solicitation, invitation or
        recommendation to buy or sell investments, securities or any other
        financial services and is not intended to be relied upon by you in
        making any specific investment or other decisions. We recommend that you
        seek independent advice from financial advisory before making any such
        decision. <p />
        Nothing included in the site constitutes an offer or solicitation to
        sell, or distribution of, investments and related services to anyone in
        any jurisdiction. <p /> From time to time, reference may be made to data
        we have gathered. These references may be selective or, may be partial.
        As markets change continuously, previously published information and
        data may not be current and should not be relied upon.
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
  margin: auto auto;
  margin-left: 33vw;
  width: 724px;
  height: 440px;
  font-family: Times New Roman;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
export default Disclaimer;
