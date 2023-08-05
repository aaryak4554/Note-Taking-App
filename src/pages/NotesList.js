import AddNote from './AddNote/AddNote.js';

function NotesList(){
    return (
        <div className='NotesList'>
            <AddNote />
            <AddNote />
            <AddNote />
            <AddNote />
        </div>
    );
}
export default NotesList;