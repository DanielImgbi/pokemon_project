import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import RootLayout from "../components/layouts/RootLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId = '1089195485936-5qimadg7tq24rp9bl3bkqs5ssp9vihu7.apps.googleusercontent.com';

const HomeLayout = lazy(() => import( "../components/layouts/HomeLayout"))
const PokemonDetail = lazy(() => import('./PokemonDetail'))

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={< RootLayout />}>
          <Route index element={<HomeLayout/> }/>
          <Route path="pokemonDetail/:id" element={< PokemonDetail/>}/>
        </Route>
    )
)

const Components:React.FC = () =>{   
      
  return (
    <Suspense fallback={<Loader />}>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider router={route} />
      </GoogleOAuthProvider>
    </Suspense>
  )
}

export default Components

