import { FaAngleUp } from 'react-icons/fa'

const ScrollTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className=" fixed rounded-md w-8 h-8 bottom-4 right-3 flex text-white justify-center items-center bg-secondary text-xl drop-shadow-lg shadow-lg">
      <FaAngleUp />
    </button>
  )
}

export default ScrollTopButton
