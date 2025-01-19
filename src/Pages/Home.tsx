import Head from "../Components/Head"
import News from "../Components/News"
import Top from "../Components/Top"
import Footer from "../Components/Footer"
import Screen from "./../Layouts/Screen"
import Warning from "../Components/Warning"
const Home = () => {
  return (
    <>
      <Warning />
      <Screen>
        <Top />
        <Head />
        <News />
        <Footer />
      </Screen>
    </>
  )
}

export default Home
