import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    // console.log(signIn);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // login
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                alert('sign in successfully')
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name='email'
                                    placeholder="Your email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    name='password'
                                    placeholder="Your password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="btn hover:bg-orange-400 bg-[#FF3811]"
                                />
                            </div>
                        </form>
                        <p className='text-xl my-4 text-center'>New to Car Doctor?
                            <span className='text-orange-600 font-bold'>
                                <Link to='/sign-up'> Sign Up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;