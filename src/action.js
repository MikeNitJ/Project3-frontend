import { redirect } from 'react-router-dom';
const url = 'waiting on url'

export const signInAction = async ({ request}) => {
    const formData = await request.formData();

    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
    };

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            console.log('user authenticated', user);
        } else {
            console.error('authentication failed');
        }
    } catch (error){
        console.error('error: ', error)
    }
}

export const signUpAction = async ({ request}) => {
    const formData = await request.formData();

    const user = {
        name: formData.get('name'),
        username: formData.get('username'),
        password: formData.get('password'),
    };

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            console.log('user authenticated', user);
        } else {
            console.error('authentication failed');
        }
    } catch (error){
        console.error('error: ', error)
    }
}

