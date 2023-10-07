import { redirect, useParams } from 'react-router-dom';


export const updateAction = async ({ params, request }) => {
    const formData = await request.formData()
    
    const playlist = {
        name: formData.get('name'),
        imageUrl: formData.get('imageUrl'),
    }
    
    await fetch(`http://localhost:3040/playlists/${playlistId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        'credentials': 'include',
        body: JSON.stringify({}),
    })
    return redirect('/playlists')
};

export const deleteAction = async ({params}) => {
    await fetch(`http://localhost:3040/playlists/${playlistId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        'credentials': 'include',
    })
    return redirect('/playlists')
}

