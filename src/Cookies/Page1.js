import React, { useState } from "react";
import Cookies from "js-cookie";
import { useCookie } from "./Cookiedataprovider";

export default function Getcookievalue() {
  const [cookieValue, setCookieValue] = useState("");
  const { email } = useCookie();
const [langauge,setLanguage]=useState('');
  const handleGetCookie = () => {
    const value = Cookies.get("va");
    if (value) {
        setLanguage(value);
      console.log("Cookie value retrieved:", value);
    } else {
      console.log("No cookie found for email:", email);
    }
  };

  return (
    <div className="container mt-5 border">
      <h1 className="display-5 m-2" style={{ textAlign: "center" }}>
        Retrieve details
      </h1>
      hello  
      <p>Cookie Key: {email}</p>
      <p>Cookie Value: {langauge || "Not Found"}</p>
      <button
        onClick={handleGetCookie}
        className="btn btn-primary mt-3 w-100 mb-4"
      >
        Retrieve Deatails
      </button>
    </div>
  );
}
