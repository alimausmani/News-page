
import Navbar from './navbar'
import Detail from './details'
import Search from "./Search";
import Footer from './footer';
import './details.css'
import './navbar.css'
 
const Home=()=>{
  return (
    <div>
      <Navbar/>
      <Search/>
      <Detail/>
      <Detail/>
      <Detail/>
      <Footer/>
    </div>
  )
}
export default Home;