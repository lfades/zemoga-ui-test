import Head from 'next/head';
import Header from './Header';
import HeaderCard from './HeaderCard';
import HeaderBottom from './HeaderBottom';
import Message from './Message';
import Cards from './Cards';
import SubmitName from './SubmitName';
import Footer from './Footer';
import {
  Container,
  BaseStyle,
  HeaderSection,
  Content,
  VotesTitle
} from './styles';

export default () => (
  <Container>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
      />
    </Head>

    <HeaderSection>
      <Header />
      <HeaderCard />
      <HeaderBottom />
    </HeaderSection>

    <Content>
      <Message />
      <VotesTitle>Votes</VotesTitle>
      <Cards />
      <SubmitName />
    </Content>

    <Footer />

    <BaseStyle />
  </Container>
);
