const Head = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex-grow space-y-0.5">
          <hr className="border-t-[5px] border-black/85" />
          <hr className="border-t-[2px] border-black/90" />
        </div>
        <span className="mx-2 text-5xl font-OldLondon  text-themeOrange">
          the
        </span>

        <div className="flex-grow space-y-0.5">
          <hr className="border-t-[5px] border-black/85" />
          <hr className="border-t-[2px] border-black/90" />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center pb-6">
        <div className=" text-8xl font-semibold font-OldLondon text-black/90">
          Daily Crimes
        </div>
        <div className=" font-EditorialNew  ">
          Unfolding the Stories & Showcasing the Reality of this Country
        </div>
      </div>

      <div className="flex flex-col space-y-0.5">
        <hr className="border-t-[2px] border-black/90" />
        <hr className="border-t-[5px] border-black/85" />
      </div>
    </>
  )
}

export default Head
