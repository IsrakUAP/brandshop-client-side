import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const passwordCheck = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        if (!passwordCheck.test(password)) {
            setPasswordError(
                "The password needs to have at least 6 letters and include at least one capital letter and one special character."
            );
        } else {
            setPasswordError("");
        }
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const picture = form.get('picture');
        const email = form.get('email');
        const password = form.get('password');
        createUser(name, picture, email, password)
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Registration Done!", "success");
            })
            .catch(error =>{
                console.log(error);
                swal("Good job!", "Registration Done!", "success");
            })
    }


    return (
        <div>
            <div className="min-h-screen">
                <p className=" text-[40px] font-semibold text-center">Register</p>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Picture</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="picture" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handlePasswordChange} type="password" placeholder="password" name="password" className="input input-bordered" required />
                                {passwordError && (
                                    <p className="text-red-500 mt-2">{passwordError}</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-accent" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className=" text-center mb-4">Have an account? <Link to="/login"><span className=" hover:text-blue-400 text-green-700 text-[20px] cursor-pointer">Login</span> </Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;