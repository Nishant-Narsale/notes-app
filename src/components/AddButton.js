import React from 'react'
import { ReactComponent as Add } from "../assets/add.svg";
import { Link } from "react-router-dom";

const AddButton = () => {
    return (
        <div className="floating-button">
            <Link to="/note/new">
                <Add />
            </Link>
        </div>
    )
}

export default AddButton

