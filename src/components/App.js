import React from 'react';
import AddNote from './AddNote/AddNote.js';
import Cards from './Cards/Cards.js';
import './App.css';



class App extends React.Component{


    render(){
        return(
            <div className="main-container">
                <AddNote/>
                <Cards/>
            </div>
        )
    }

}



export default App;