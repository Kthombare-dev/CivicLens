import TopNavbar from './navigation/TopNavbar'
import MainNavbar from './navigation/MainNavbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <MainNavbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout


