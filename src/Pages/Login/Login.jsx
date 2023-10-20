import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [loading,setLoading]= useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handGoogleLogin = () => {
      setLoading(true);
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          swal("Good job!", "successful login By Google", "success");
          navigate(location?.state? location.state : '/')
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    const [loginError, setLoginError] = useState("");
     const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!emailCheck.test(email)) {
            setLoginError("Invalid email format");
            return;
        }
        if (!passwordCheck.test(password)) {
            setLoginError("Invalid password format");
            return;
        }
        setLoginError("");


        signIn(email,password)

        .then(result=>{
          console.log(result.user);
          swal("Good job!", "successful login", "success");
          navigate(location?.state? location.state : '/')
         })
         .catch(error => {
          console.log(error);
          
              setLoginError("The email or password you entered is incorrect.");
          
      });
     }



    return (
        <div>
          <div className="min-h-screen">
            <p className=" text-[40px] font-semibold text-center">Login</p>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        {loginError && (
                            <p className="text-red-500 mt-2">{loginError}</p>
                        )}
        <div className="form-control mt-6">
        <input className="btn btn-accent" type="submit" value="Login" />
        </div>
        <div className="form-control mt-6">
            <button onClick={handGoogleLogin} className="btn btn-accent"><img className="h-[30px]" src="https://i.ibb.co/zSC5sQX/7611770-1.png" alt="" /> Google login</button>
        </div>
      </form>
            <p className=" text-center mb-4">Do not have an account? <Link to="/registration"><span className=" hover:text-blue-400 text-green-700 text-[20px] cursor-pointer">Register</span> </Link> </p>
          
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;