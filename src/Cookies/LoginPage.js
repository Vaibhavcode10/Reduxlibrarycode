import React, { useState } from "react";
import Cookies from "js-cookie";
import { useCookie } from "./Cookiedataprovider";

export default function LoginPage() {
  const [cookieName, setCookieName] = useState("");
  const [cookieValue, setCookieValue] = useState("");
  const [language,setLanguage]=useState('');
  const { setEmail } = useCookie();

  const handleCookie = (e) => {
    e.preventDefault();  
    setEmail(cookieName);  
    Cookies.set(cookieName, cookieValue,language, { expires: 7 });
    alert(`Cookie created for ${cookieName}`);
  };

  return (
    <div className="container mt-5 border">
      <h1 className="display-5 m-2" style={{ textAlign: "center" }}>
      Login page
      </h1>
      <form className="form-group">
        <label className="w-100">
          Email:
          <input
            value={cookieName}
            onChange={(e) => setCookieName(e.target.value)}
            className="form-control w-100"
          />
        </label>
        <br />
        <label className="w-100 mt-2">
          password
          <input
            value={cookieValue}
            onChange={(e) => setCookieValue(e.target.value)}
            className="form-control w-100"
          />
        </label>
        <label className="w-100 mt-2">
          Language prefrence
          <input value={language} onChange={(e)=>setLanguage(e.target.value)} className="form-control w-100"/>

        </label>
        <br />
        <button
          onClick={handleCookie}
          className="btn btn-primary mt-3 w-100 mb-4"
        >
          Create Cookie
        </button>
      </form>
    </div>
  );
}
