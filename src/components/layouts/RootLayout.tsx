import { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../auth/Login";

export interface ResponseDataType {
  "sub"?: string,
  "name"?: string,
  "given_name"?: string,
  "family_name": string,
  "picture": string,
  "email"?: string,
  "email_verified"?: true,
  "locale"?: string
}

const RootLayout:React.FC = () => {
  const [userData, setUserData] = useState<ResponseDataType>()
  const [reload, setReload] = useState(false);

  useLayoutEffect(() => {
    const data = (): string => {
      const storedData = localStorage.getItem('user');
      return storedData ? storedData : '';
    }; 
    setUserData(data()? JSON.parse(data()): null );
  }, [reload]);

  return (
    <div>
      {userData? < Outlet /> : <Login setReload={setReload}/>}
    </div>
  )
}

export default RootLayout