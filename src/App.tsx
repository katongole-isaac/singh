import TopNavigationBar from "@/components/topbar/topNavigationBar";
import Cards from '@/components/cardSection'
import StatsBanner from '@/components/stats'
import OnBoard from '@/components/onboard'
import Hero from './components/hero'
import CallRequest from '@/components/callrequest'
import AppFooter from '@/components/footer'
import LastestUpdates from '@/components/lastestUpdates'
import Packages from './components/packages'
import Professional from './components/professional'
import Services from './components/services'
import CompanyOverview from './components/overview'
import ChooseUs from './components/chooseUs'
import Testimonials from './components/testimonials'
import ScrollTopButton from "./components/common/scrollTopButton";

function App() {
  return (
    <>
      <TopNavigationBar />

      <ChooseUs />

      <Cards />

      <Professional />

      <Services />

      <CompanyOverview />

      <OnBoard />

      <StatsBanner />

      <Testimonials />

      <Packages />

      <Hero />

      <LastestUpdates />

      <CallRequest />

      <AppFooter />

      <ScrollTopButton />
    </>
  )
}

export default App;
