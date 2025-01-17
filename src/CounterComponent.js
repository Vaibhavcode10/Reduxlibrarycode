import React from "react";
import {connect} from 'react-redux'
import { DarkTheme,LightTheme } from "./CounterActions";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Home from "./Home";
const CounterComponent=({Theme,DarkTheme,LightTheme})=>
{
    
    const headerstyle={
        backgroundColor:Theme=="Dark"?"black":"white",
        color:Theme=="Dark"?"white":"Black",
       
        height:'auto'
    }
    return(
        <>
        <div style={headerstyle}  className="border">
           
        
            <div className='row'>

        
        <div className='col-md-6 border' style={{height:'22rem'}} >
         <About />
        </div >
     
        <div  className='col-md-6  border' style={{height:'22rem'}}>
          <Home />
          </div>
          
          <div className='col-md-6  border' style={{height:'22rem'}}>
          <Contact />
          </div>
     
          <div className='col-md-6  border' style={{height:'22rem'}}>
          <Help />
          </div>

      </div>
        </div>
        
      
        </>
    );
};
const mapStateToProps=state=>({
    Theme:state.Theme
})


const mapDispatchToProps={
    LightTheme,DarkTheme
};
export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);
