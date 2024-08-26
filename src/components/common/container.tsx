const Container: React.FC<React.HTMLAttributes<HTMLDivElement> & { children: any }> = (props) => {
  const { children, className, ...others } = props

  return (
    <div className={` max-w-[1300px] mx-auto ${className}`} {...others}>
      {children}
    </div>
  )
}

export default Container
