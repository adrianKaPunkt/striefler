import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className="fixed z-10 flex justify-center w-full pt-8">
      <div className="w-[80%]">
        <img
          src={logo}
          alt="Rechtsanwalt Stefan Striefler"
          className="w-[500px] brightness-200"
        />
      </div>
    </nav>
  )
}
export default Navbar
