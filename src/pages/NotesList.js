import AddNote from './AddNote/AddNote.js';
import './NotesList.css'
import NoteData from './NoteData.js'

function NotesList(){
    return (
        <div className='note-list'>
            {NoteData.map((note) => (
                <AddNote 
                    key={note.id} 
                    title={note.title}
                    info={note.info}
                    date={note.date}
                />
            ))}
        </div>
    );
}
export default NotesList;