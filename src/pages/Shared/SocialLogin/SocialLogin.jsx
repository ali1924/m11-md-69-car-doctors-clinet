import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => {
                const errorMessage = error.message; 
                console.log(errorMessage);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    G
                </button>
                <button className="btn btn-circle btn-outline">
                    Git
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;