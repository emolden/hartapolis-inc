import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext'; 

const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth?.user) {
        // Redirect them to the login page,
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;