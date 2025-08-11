import { Icon } from "@iconify/react/dist/iconify.js"


const Error = () => {
  return (
    <div>
        <div className="text-theme-primary text-center flex flex-col justify-center items-center ">
          <Icon icon={`line-md:brake-alert`} className="text-xl mb-6 w-40 h-40" />
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
          {/* <p className="text-lg text-gray-600 mb-6">
            The page you're looking for doesn't exist or an error occurred.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Go Home
          </a> */}
        </div>
    </div>
  )
}

export default Error
