import { Navigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const ProtectedRoute = ( { children }: Props ) => {
  const {currentUser} = auth;

  return (
    currentUser ? children : <Navigate to="/admin-login" />
  )
}

export default ProtectedRoute;