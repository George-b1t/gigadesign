import '../styles/App.css';

import BackGround from '../components/global/BackGorund.jsx';
import Header from '../components/global/Header.jsx';
import HomeContainer from '../components/pageHome/HomeContainer.jsx';

export default function Home() {
  return (
    <>
      <BackGround/>
      <Header/>
      <HomeContainer/>
    </>
  );
};

