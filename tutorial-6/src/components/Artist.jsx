import { useState } from "react"
import initialArtists from "./artistsData"
function Artists() {

    const [artists, setArtists] = useState(initialArtists);
    const [editingId, setEditingId] = useState(null); // Track which artist is being edited
    const [editName, setEditName] = useState(""); // Store the edited name
     
    const deleteBtn = (id) => {
        const filteredArry = artists.filter(artist => artist.id !== id)
        setArtists(filteredArry)
        console.log(id);
        
    }

    const addSumit = () => {
        const sumit = {id : artists.length, name : "Summit Shaha"}
        const newArray = [...artists, sumit]
        setArtists(newArray)
    }

    const startEditing = (id) => {
        const artistToEdit  = artists.find(artist => artist.id ===id)
        console.log(artistToEdit );
        setEditingId(id)
        
        
    }

    const saveEdit = (id) => {
        const updatedArtists = artists.map(artist =>
            artist.id === id ? { ...artist, name: editName } : artist
        );
        setArtists(updatedArtists);
        setEditingId(null); // Exit editing mode
        // editName = null;
    };

    const cancelEdit = () => {
        setEditingId(null); // Exit editing mode without saving
    };

    return(
        <>
        <div>
            <button onClick={addSumit}>Add Sumit</button>
        </div>
        <ul>
        {artists.map(artist => (
                    <li key={artist.id}>
                        {editingId === artist.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                                <button onClick={() => saveEdit(artist.id)}>Save</button>
                                <button onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {artist.name} 
                                <button onClick={() => deleteBtn(artist.id)}>Delete</button>
                                <button onClick={() => startEditing(artist.id)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
        </ul>
        </>
    )
}

export default Artists;