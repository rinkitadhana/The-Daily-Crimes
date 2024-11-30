import Head from "../Components/Head"
import News from "../Components/News"
import Top from "../Components/Top"
import Footer from "../Components/Footer"
import Screen from "./../Layouts/Screen"
const Home = () => {
  return (
    <Screen>
      <Top />
      <Head />
      <News />
      <Footer />
    </Screen>
  )
}

export default Home
