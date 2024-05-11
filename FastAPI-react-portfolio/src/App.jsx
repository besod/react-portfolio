import {Route,BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='bg-slate-300/100'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={"Home"}/>
                <Route path='/about' element={"About"}/>
                <Route path='/projects' element={"Projects"}/>
                <Route path='/contacts' element={"Contacts"}/>

                
            </Routes>
        </Router>



    </main>
    
  )
}

export default App