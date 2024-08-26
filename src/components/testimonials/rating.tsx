import { FaStar } from 'react-icons/fa'

const Rating: React.FC<{ stars: number }> = ({ stars }) => {
  return (
    <div className="">
      <ul className="inline-flex gap-1">
        {Array(stars)
          .fill(null)
          .map((star, idx) => (
            <li key={idx ?? star}>
              <FaStar className="text-lg text-amber-400" />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Rating
