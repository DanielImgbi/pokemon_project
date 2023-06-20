import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

interface LoginProps {
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}


const Login = ({setReload}: LoginProps) => {

  const login: () => void = useGoogleLogin({
    onSuccess: async (response) => {
      try{
        const data = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            'Authorization': `Bearer ${response.access_token}`
          }

        });
        localStorage.setItem('user', JSON.stringify(data));
        setReload(true);

      } catch(err){
        console.log(err);
      }
    }
  });


  return (

    <main className='h-100vh w-100vw bg-white flex justify-center items-center'>

      <div className=" h-100% lg:h-90% w-100% lg:w-50%  pb-4 my-10 shadow-lg rounded-lg">
      
        <img 
          src="/GIF's/pokemon-logo-png-0.png" 
          alt="logo" 
          className='h-250px w-60% m-auto '
        />

        <div className=" px-12 my-3 rounded-lg">
          <h3 
            className='text-2xl text-black font-bold '
          >
            Ready to take the next step?
          </h3>

          <p 
            className='my-3 text-gray-700 '
          >
            create an account or sign in with any of the providers
          </p>
          <p 
            className='text-gray-700 my-4'
            >
              By creating an account or logging in, you understand and agree to our 
              <a href='#' 
                className='text-blue-700'
              >
                Terms
              </a>. 
              You also acknowledge our 
              <a 
                href='#' 
                className='text-blue-700'
              >
                Cookies
              </a> and <a href='#' className='text-blue-700'>Privacy</a> policies.</p>
        </div>

        <button 
          className='w-60% 
          md:w-50% 
          lg:w-50%  
          md:text-2xl 
          m-auto p-3 
          font-bold 
          flex 
          justify-evenly 
          items-center 
          rounded-lg border 
          border-gray-700'
          
          onClick={login}
        >
          <FcGoogle /> 
          Continue with Google 
        </button>
          
        <button 
          className='w-60% 
          md:w-50% 
          lg:w-50%  
          md:text-2xl 
          m-auto 
          my-3 p-3 
          font-bold 
          flex 
          justify-evenly 
          items-center 
          rounded-lg border 
          border-gray-700'
          disabled
        >
          <AiFillFacebook 
            className='text-blue-600' 
          /> 
          Continue with Facebook 
        </button> 
  

      </div>  
    </main>
  )
}

export default Login