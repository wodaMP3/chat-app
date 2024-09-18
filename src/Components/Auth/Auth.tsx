import { useEffect, useState } from "react";
import { auth } from '../../firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, User } from "firebase/auth";


const Login: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    }, []);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const googleSignOut = () => {
        auth.signOut();
    }

    return (
        <div>
          {user ? (
            <div>
              <h1>Welcome, {user.displayName}</h1>
              <button onClick={googleSignOut}>Sign Out</button>
            </div>
          ) : (
            <button onClick={googleSignIn}>Sign In with Google</button>
          )}
        </div>
      );
}

export default Login;