import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from '../components/AddButton'


const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/notes").then(function (response) {
        response.json().then(function (data) {
            setNotes(data)
        });
    });
  }, [])

  return (
    <div className="notes">

      <div className="notes-header">

        <h2 className="notes-title">&#9782;Notes</h2>
        <p className="notes-count">{notes.length}</p>

      </div>

      <div>

        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}

      </div>

      <AddButton />
    </div>
  );
};

export default NotesPage;
