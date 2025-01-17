const intalTheme={Theme:"Light"};
 const CounterReducer=(state=intalTheme,action)=>
{
    switch(action.type)
    {
         case 'LightTheme':
            return { ...state, Theme: "Light" };  

         case 'DarkTheme':
            return {...state,Theme:"Dark"};
            default  :
            return state;

    } 

};
export default CounterReducer;
