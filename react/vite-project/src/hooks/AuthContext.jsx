// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const login = async (username, password) => {
//         try {
//             const response = await fetch(`${import.meta.env.VITE_LOGIN_API_URL}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });
//             const data = await response.ok;
//             console.log(data)
//             if (data) {
//                 setUser({
//                     username,
//                 });
//             } else {
//                 throw new Error(data.message || 'Login failed');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const logout = () => {
//         setUser(null); 
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //added next line
    const [errorMessage, setErrorMessage] = useState('');
    
    const login = async (username, password) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_LOGIN_API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password}),
            });
            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Login failed'); 
                throw new Error(errorData.message || 'Login failed'); 
            }

            // Changed to response.text and it worked? somehow?
            const user = await response.json();
            console.log(user);

            setUser({
                username: user.name,
                role: user.role
            });
            
            setErrorMessage('');

        } catch (error) {
            console.error('Login error:', error); 
            setErrorMessage(errorMessage);
            throw error; 
        }
    };

    const logout = () => {
        setUser(null); 
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);