import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../pages/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default MainLayout
