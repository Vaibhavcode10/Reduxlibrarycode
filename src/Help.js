import React from 'react'
import {connect} from 'react-redux'
import { DarkTheme,LightTheme } from "./CounterActions";

  function Help({Theme,DarkTheme,LightTheme}) {
  return (
  <>
    <div  >
    <h3>Help Page</h3>
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
export default connect(mapStateToProps,mapDispatchToProps)(Help);
