import React from 'react'
import {connect} from 'react-redux'
import { DarkTheme,LightTheme } from "./CounterActions";

 function About({Theme,DarkTheme,LightTheme}) {
  const headerstyle={
    backgroundColor:Theme=="Dark"?"black":"white",
    color:Theme=="Dark"?"white":"Black",
    marginBottom:'100px',
    height:'auto'
}
  return (
    <>
    <div  >
    <h1>About Page</h1>
    <p>{Theme}</p>
            <button onClick={DarkTheme} className="btn btn-primary ms-2">
            LightTheme
            </button>
            <button onClick={LightTheme} className="btn btn-primary ms-2">
             
             DarkTheme
            </button>
        
    </div>
    </>
  )
}
const mapStateToProps=state=>({
  Theme:state.Theme
})
const mapDispatchToProps={
  LightTheme,DarkTheme
};
export default connect(mapStateToProps,mapDispatchToProps)(About);