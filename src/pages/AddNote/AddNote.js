import {MdDelete} from 'react-icons/md'
import './AddNote.css';
function AddNote(props){
    return(
        <div className="note">
            <span>{props.title}</span>
            <p>{props.info}</p>
            <div className='note-footer'>
                <small className='note-date'>{props.date}</small>
                <MdDelete className='del-icon'/>
            </div>
        </div>
    );
}
export default AddNote;