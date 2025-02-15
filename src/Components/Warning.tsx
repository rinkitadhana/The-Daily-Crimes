import { useState } from "react"

const Warning = () => {
  const [vis, setVis] = useState(true)
  return (
    <>
      {vis && (
        <section className=" md:hidden fixed top-10 z-50 w-full m-2 ">
          <div className=" flex flex-col items-center gap-4 bg-zinc-800 text-white p-4 font-sans w-[50%] mx-auto border rounded-xl  border-zinc-800 shadow-2xl">
            <p className=" text-xl text-center ">
              For the best UI experience, please open this website on a desktop.
              The site contains numerous elements that may lose their visual
              appeal if fully optimized for responsiveness.
            </p>
            <button
              onClick={() => setVis((prev) => !prev)}
              className=" text-lg w-fit font-medium border px-3 py-1 rounded-md"
            >
              Okay
            </button>
          </div>
        </section>
      )}
    </>
  )
}

export default Warning
