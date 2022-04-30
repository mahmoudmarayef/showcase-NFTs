import { Download, Features, SeactionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SeactionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing."
        description="Buy, store, collect NFTs, exchange & earn Crypto. Join +25M people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SeactionWrapper
        title="Smart User Interface Marketplace"
        description="Exprience a buttery UI of ProNef NFT Marketplace."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SeactionWrapper
        title="Deployment"
        description="ProNef is build using Expo which runs natively on all user's devices"
        mockupImg={assets.feature}
        reverse
      />
      <SeactionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs While the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "} <span className="bold">mmarayef</span></p>
      </div>
    </>
  );
}

export default App;
