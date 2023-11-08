import Navigation from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
    <Navigation />
    <div>{children}</div>
    </>
  )
}

export default Layout