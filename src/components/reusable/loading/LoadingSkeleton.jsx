

const LoadingSkeleton = ({ children }) => {
  return (
    <div
        className='h-[50vh] w-full flex justify-center items-center'
    >
        {children}
    </div>
  )
}

export default LoadingSkeleton
