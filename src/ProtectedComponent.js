import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

const ProtectedComponent = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Make an API request to check if the user is authenticated
        // You can implement this logic based on your authentication flow

        // For demonstration purposes, let's assume a successful response indicates the user is authenticated.
        const isAuthenticated = true;

        if (!isAuthenticated) {
            // If the user is not authenticated, redirect to the home page
            navigate("/");
        }

        setIsLoading(false);
    }, [navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Your protected content */}
            <h1>You Need More Dota2</h1>
            <p></p>
        </div>
    );
};

export default ProtectedComponent;
