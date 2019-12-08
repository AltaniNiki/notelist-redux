import React from 'react';
import './AddNote.css';
import {connect} from 'react-redux';
import {onChangeNote,onAddNote} from '../../actions/index.js';


class AddNote extends React.Component{

    addNoteToList=()=>{
        let oldNoteList = this.props.notes;
        let noteId = (this.props.notes.length)+1;
        let note = {
            userId:1,
            id:noteId,
            title:this.props.noteText
        }

        let newNoteList = [...oldNoteList,note]
        console.log(newNoteList);

        this.props.onAddNote(newNoteList);
        this.props.onChangeNote('');
    }


    render(){
  
        return(
            <div className="note-container">
                <div className="note-title">Please write your note:</div>
        <textarea className="note-content" onChange={(e)=>{this.props.onChangeNote(e.target.value)}} type="text" value={this.props.noteText}> </textarea>
                <button className="note-btn" onClick={this.addNoteToList} > Add Note</button>
            </div>
        )
    }

}


function mapStateToProps(state){
    return{
        noteText:state.noteText,
        notes:state.notes
    }
}

export default connect(mapStateToProps,{onChangeNote,onAddNote})(AddNote);