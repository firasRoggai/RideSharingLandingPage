import './assets'
import Header from './Container/Header/Header'
import Navbar from './Container/Navbar/Navbar'
import Searchbar from './Container/Searchbar/Searchbar'
import Section1 from './Container/Section1/Section1'
import Section2 from './Container/Section2/Section2'
import Footer from './Container/Footer/Footer'
function App() {

  return (
    <div className='bg-gray-100'>
    <Navbar />
    <Header />
    <Searchbar />
    <Section1 />
    <Section2 />
    <Footer />

    </div>
  )
}

export default App
