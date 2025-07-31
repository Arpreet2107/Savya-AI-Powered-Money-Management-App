import {useNavigate} from "react-router-dom"
import {assets} from "../assets/assets.js"
import {useState} from "react";

const Login = () =>{
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);

    const navigate= useNavigate();

    return(
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/*Background image with blur*/}
            <img src={assets.login_bg} alt="Background" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
            <div className="relative z-10 w-full max-w-lg px-6">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h3 className="text-2xl font-semibold text-black text-center mb-2">
                        Welcome back! Your financial journey continues. Let's pick up where you left off.
                    </h3>
                    <p className="text-sm text-scale-700 text-center mb-8">
                        Unlock your personalized financial dashboard. Log in to continue your journey!
                    </p>
                    <form className="space-y-4">
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email address"
                                placeholder="abc@gmail.com"
                                type="text"
                            />
                                <Input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    label="Password"
                                    placeholder="********"
                                    type="password"
                                />
                        {error && (
                            <p className="text-red-800 trxt-sm text-center bg-red-50 p-2 rounded">
                                {error}
                            </p>
                        )}
                        <button className="btn-primary w-full py-3 text-lg font-medium" type="submit">
                            LOGIN
                        </button>

                        <p className="text-sm text-slate-800 text-center mt-6">
                            Where have you been? Create your account and dive in!
                            <Link to="/signup" className="font-medium text-purple-600 underline hover:text-purple-600-dark transition-colors">Signup</Link>
                        </p>

                    </form>

                </div>

            </div>
        </div>

    )
}

export default Login;