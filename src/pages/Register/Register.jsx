import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import {AuthContext} from '../Provider/AuthProvider'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaEye, FaEyeSlash} from 'react-icons/fa'

const Register = () => {
    const[registererror,setregistererror]=useState('');//by defaultthere is no error
    const [success,setsuccess]=useState("");
    const[showpassword ,setshowpassword]=useState(false);//by default the password will not be shown
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email, password);
        if(password.length<6){
            setregistererror('Password should be at least 6  character or more');
            return;// be carefulto give return else it will go down and continue
        }
        else if(!/[A-Z]/.test(password)){
            setregistererror('Your password should  have atleast one upper case character');
            return;
        }
        //reset error,if there is an error and the user reloads the page again ,the error should go away
        setregistererror(''); 
        //reset success after reload
        setsuccess("");

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setsuccess(toast('user created successfully'));
            })
            .catch(error => {
                console.error(error)
                setregistererror(error.message);
            })

    }

    return (
        <div className='bg-white font-serif '>
            <Navbar></Navbar>
            
                <h2 className="text-3xl my-10 text-center text-black">Please Register</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto bg-white">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered bg-white border-amber-800 text-black" />
                    </div>
                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered bg-white border-amber-800 text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <div className='relative border'>
                         {/*if type is text than it will show,else password type will not show*/}
                        <input type={showpassword?"text":"password"}
                        required name="password"
                         placeholder="Password" 
                         className="input input-bordered bg-white border-amber-800  text-black" />

                         <span className='absolute top-3 right-2' onClick={()=>setshowpassword(!showpassword)}>
                            {showpassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>

                            }</span>
                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className=" btn text-white bg-amber-800 hover:bg-amber-800">Register</button>
                    </div>
                </form>
                {
                    registererror && <p className='text-red-700'>{registererror}</p>//show the error
                }
                {
                    success && <p className=''>{success}</p>
                }<ToastContainer />
                <p className="text-center mt-4 pb-10">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
    
    );
};

export default Register;