import striefler from '../assets/striefler.png'
const About = () => {
  return (
    <section id="about" className="h-[2000px] bg-orange-950 pt-10 w-full">
      <h1 className="text-pink-600 text-9xl">ABOUT</h1>
      <div className="overflow-hidden rounded-full w-96">
        <img src={striefler} alt="Striefler" />
      </div>
    </section>
  )
}
export default About
