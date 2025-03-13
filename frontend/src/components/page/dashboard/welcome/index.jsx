import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setUserData } from "../../../../store/slice";
import update from "../../../../services/updater";
import "./styles.css";

function WelcomeMessage() {

  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(user.firstName);
  const [newLastName, setNewLastName] = useState(user.lastName);

  // permet de passer en mode édition
  function handleEdit() {
    setIsEditing(true);
  };

  // permet de sauvegarder les modifications
  async function handleSave() {
    const updateUserInformation = await update(newFirstName, newLastName, token); // Attend la fin d'update

    if (!updateUserInformation) {
      alert("Erreur de modification");
      return;
    }

    dispatch(setUserData(updateUserInformation)); //On met à jour les données dans redux
    setIsEditing(false); // on repasse en mode normal
  }

  return (
    <div className="header">
      {isEditing ? (
        <>
          <h1>Welcome back</h1>
          <div className="inputs">
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </div>
          <div className="editButtons">
            <button className="edit-button" onClick={handleSave}>Save</button>
            <button className="edit-button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>)
        :
        (<>
          <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
          <button className="edit-button" onClick={handleEdit}>Edit Name</button>
        </>)
      }
    </div>
  );
}

export default WelcomeMessage;