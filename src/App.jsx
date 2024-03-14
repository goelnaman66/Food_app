
import Header from './components/header'
import Body from './components/body'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}




export default App
