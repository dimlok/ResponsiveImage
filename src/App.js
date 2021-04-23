import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
const Page = styled.div``;

export default function App() {
  return (
    <Page>
      <Header />
      <Content />
      <Footer />
    </Page>
  );
}
