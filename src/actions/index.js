export const ADDNOTE='ADDNOTE';
export const CHANGENOTE='CHANGENOTE';

export function onChangeNote(note){
  
    const action={
        type:CHANGENOTE,
        payload:note
    }

    return action;
}


export function onAddNote(notes){
  
    const action={
        type:ADDNOTE,
        payload:notes
    }

    return action;
}