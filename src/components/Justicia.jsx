import justicia from '../assets/justicia.png'
import moan1 from '../assets/moan1.mp3'
import moan2 from '../assets/moan2.mp3'
import moan3 from '../assets/moan3.mp3'
import moan4 from '../assets/moan4.mp3'
import moan5 from '../assets/moan5.mp3'

const Justicia = () => {
  const moan = () => {
    document.getElementById('justicia')
    let rand = Math.floor(Math.random() * 5) + 1
    document.getElementById('moan' + rand).play()
  }

  return (
    <div>
      <audio src={moan1} id="moan1"></audio>
      <audio src={moan2} id="moan2"></audio>
      <audio src={moan3} id="moan3"></audio>
      <audio src={moan4} id="moan4"></audio>
      <audio src={moan5} id="moan5"></audio>
      <img
        onClick={moan}
        id="justicia"
        src={justicia}
        alt="justicia"
        className="z-9 fixed w-2/3 top-40 right-0 blur-[1px] drop-shadow-2xl sepia hover:sepia-0 hover:hue-rotate-60"
      />
    </div>
  )
}
export default Justicia
