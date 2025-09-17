import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginForm } from './components/auth/LoginForm';
import { Dashboard } from './components/dashboard/Dashboard';
const AppContent = () => {
   const [showNew, setShowNew] = useState(false);
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <button
  className="button"
  style={{ padding: "20px", margin:"20px",position: "relative", left: "740px", backgroundColor: "rgb(88, 132, 161)" }}
  onClick={() => setShowNew(true)}
>
  Add New Session
</button>
      {showNew && <New />}
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? <Dashboard /> : <LoginForm />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
   
  );
  
}

export default App;