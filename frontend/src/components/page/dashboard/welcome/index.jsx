import { useSelector } from "react-redux";
import { useState } from "react";
import "./styles.css";

function WelcomeMessage() {

  const user = useSelector((state) => state.user.user);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="header">
      {isEditing ? (
        <>
          <h1>Welcome back</h1>
          <div className="inputs">
            <input
              type="text"
              placeholder= {user.firstName}
            />
            <input
              type="text"
              placeholder= {user.lastName}
            />
          </div>
          <div className="editButtons">
            <button className="edit-button" onClick={() => setIsEditing(false)}>Save</button>
            <button className="edit-button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>) :
        (<>
          <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
          <button className="edit-button" onClick={handleEdit}>Edit Name</button>
        </>)
      }
    </div>
  );
}

export default WelcomeMessage;