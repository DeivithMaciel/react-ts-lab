import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { Navigate } from "react-router-dom"

type ProtectedRouteProps = {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const auth = useSelector((state:RootState) => state.auth)
    
    return auth.isAuthenticated ? children : <Navigate to="/auth" />;
}

export default ProtectedRoute