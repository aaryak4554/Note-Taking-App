import {MdDelete} from 'react-icons/md'
import './AddNote.css';
function AddNote(){
    return(
        <div className="note">
            <span>this is my first note hurray</span>
            <div className="not-footer">
                <small> 12.04.23 </small>
                <MdDelete />
            </div>
        </div>
    );
}
export default AddNote;