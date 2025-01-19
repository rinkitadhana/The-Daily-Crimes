import Slider from "./Slider"

const Footer = () => {
  return (
    <div className="  select-none">
      <Slider />
      <div className="py-7 font-Canopee text-2xl  flex flex-row justify-between px-6 ">
        <a
          className=" hover:opacity-75 transition-colors duration-300"
          target="_blank"
          href="https://therinkit.online"
        >
          The Daily Crimes ©
        </a>

        <div className=" flex gap-2 ">
          <a
            className=" hover:opacity-75 transition-colors duration-300"
            target="_blank"
            href="https://x.com/damnGruz"
          >
            Twitter
          </a>
          <span>•</span>
          <a
            className=" hover:opacity-75 transition-colors duration-300"
            target="_blank"
            href="https://github.com/rinkitadhana"
          >
            Github
          </a>
          <span>•</span>
          <a
            className=" hover:opacity-75 transition-colors duration-300"
            target="_blank"
            href="https://www.linkedin.com/in/rinkitadhana"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
