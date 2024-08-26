const RequestForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sending data...')
  }

  return (
    <form className=" flex flex-wrap md:flex-nowrap justify- gap-5" onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 flex-1">
        <Input placeholder="Name *" />
        <Input placeholder="Phone *" />
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <Input type="email" placeholder="E-mail *" />
        <button type="submit" className="w-full inline-block uppercase bg-secondary rounded-md py-2 text-white font-bold">
          send now
        </button>
      </div>
    </form>
  )
}

export default RequestForm

const Input: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
  return (
    <input
      className="placeholder:text-mute placeholder:font-medium text-black rounded-md py-2 px-3  outline-none ring-secondary focus:ring-2"
      {...props}
    />
  )
}
