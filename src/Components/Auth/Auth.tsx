import { useEffect, useState } from "react";
import { auth } from '../../../firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from "firebase/auth";


const Login: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('User signed in', currentUser)
            } else {
                console.log('not signed')
            }
            setUser(currentUser);
            setLoading(false);
        }, (error)=> {
            console.error('Error in onAuthState', error)
        });

        return () => {
            unSubscribe();
        }
    }, []);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch((error) => {
            console.error('error during signWithRedirect', error)
        });
    };

    const googleSignOut = () => {
        auth.signOut();
    }

    if (loading) {
        return <div>loading...</div>
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