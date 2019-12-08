import React from 'react';
import Card from '../Card/Card.js'
import './Cards.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {onAddNote} from '../../actions/index';

class Cards extends React.Component{

    componentDidMount(){
     //first option
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(results=>{
    //         return results.json();
    //     }).then(data=>{
    //         let toDos = data.filter(function(toDo){
    //             return toDo.userId === 1 & toDo.id <=5;
    //         }) 

    //    //    console.log(toDos);
    //        this.props.onAddNote(toDos);
    //     })


        // fetch('/', {
        //     method: 'post',
        //     headers: {'Content-Type':'application/json'},
        //     body: {
        //      "first_name": this.firstName.value
        //     }
        //    });
        //   };



        //https://alligator.io/react/axios-react/
       //second option 

       axios.get(`https://jsonplaceholder.typicode.com/todos`)
       .then(res => {
         const result = res.data;
         let toDos = result.filter(function(toDo){
                      return toDo.userId === 1 & toDo.id <=5;
         })
         this.props.onAddNote(toDos);
       })
    // why axios  
    //  https://blog.logrocket.com/axios-or-fetch-api/

    }


    render(){
        return(
            <div className="cards-container">
                {
                this.props.notes.map((note,i)=>(
                    <Card
                        title={note.title}
                        key={i}
                    />
                ))
                
                }
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        notes:state.notes
    }
}

export default connect(mapStateToProps,{onAddNote})(Cards);