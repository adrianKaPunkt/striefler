import heroImg from '../assets/hero-1.jpg'

const Hero = () => {
  return (
    <section id="hero" className="w-full ">
      <div
        className="flex justify-center w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="w-[80%] flex pt-60 relative">
          <h1 className="text-pink-700 text-8xl">0177 657889</h1>
        </div>
      </div>
    </section>
  )
}
export default Hero
