import { BsX } from "react-icons/bs"

interface Props{
  handleSearchToggle: () => void
}


const Search = ({handleSearchToggle}: Props) => {

    return (
    <main className="w-screen h-screen pt-3 top-0 bg-black bg-opacity-90 z-40 fixed ">
      
      <section className="w-screen flex flex-col items-center space-y-5 fixed">
        <span className="flex w-[98%] pl-4 justify-end">
          <BsX fill='white' 
          className='text-5xl' 
          onClick={handleSearchToggle}/>
        </span>

        <div 
          className=" w-5/6 xl:w-3/6 h-14 bg-white flex justify-evenly items-center rounded "
        >
          <input type="text" 
            placeholder="Search Something...." 
            name="search" 
            className="h-6/6 w-6/6 outline-none "
          />
        </div>

        // Search functionality comes later

      </section>
    </main>
  )
}

export default Search 