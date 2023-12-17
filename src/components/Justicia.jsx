import justicia from '../assets/justicia.png'

const Justicia = () => {
  return (
    <div>
      <img
        src={justicia}
        alt="justicia"
        className="z-9 fixed invisible xl:visible top-40 right-[-100px] blur-[1px] drop-shadow-2xl sepia hover:sepia-0 hover:hue-rotate-60"
      />
    </div>
  )
}
export default Justicia
