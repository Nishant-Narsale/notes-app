import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

function NotePage({ match }) {
  let noteId = match.params.id;
  const [note, setNote] = useState([]);

  useEffect(() => {
    if(noteId!=='new'){
      fetch(`http://127.0.0.1:5000/notes/${noteId}`).then(function (response) {
        response.json().then(function (data) {
          setNote(data)
        });
      });
    }else{
      
    }
  },[]);
  
  const handleUpdate = (note_value) => {
    setNote({ ...note, body: note_value });
    if(note.body===""){
      fetch(`http://127.0.0.1:5000/notes/${noteId}`, {
        method: 'DELETE',
      })
    }
  };

  const pushData = () => {
    if(noteId!=="new"){
      fetch(`http://127.0.0.1:5000/notes/${noteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      })
    }else{
      fetch(`http://127.0.0.1:5000/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      })
    }
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={pushData} />
          </Link>
        </h3>
      </div>

      <textarea
        onChange={(e) => {
          handleUpdate(e.target.value);
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
}

export default NotePage;
