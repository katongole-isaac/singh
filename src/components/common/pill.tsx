interface Props {
  label: string
}

const Pill: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = (props) => {
  const { label, className, ...other } = props
  return (
    <div className={`rounded-2xl px-4 py-1  max-w-max  ${className}`} {...other}>
      <p className="uppercase font-semibold text-xs md:text-sm">{label}</p>
    </div>
  )
}

export default Pill
