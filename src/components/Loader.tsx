import  GridLoader  from "react-spinners/gridLoader"


const Loader:React.FC = () => {
  const loading = true
 
    return (
    <div className="h-100vh w-100vw py-16 flex flex-col justify-center items-center">
        <GridLoader color="rgb(255, 222, 38)" loading={loading} size={50} />
    </div>
  )
}

export default Loader