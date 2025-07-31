import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { validateEmail } from "../util/validation.js";
import axiosConfig from "../util/axiosConfig.js";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import toast from "react-hot-toast";

import Input from "../components/Input.jsx";
import LoaderCircle from "lucide-react";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Basic validation
        if (!fullName.trim()) {
            setError("Please enter your fullname");
            setIsLoading(false);
            return;
        }
        // FIXED: use !validateEmail(email) to check if email is invalid
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            setIsLoading(false);
            return;
        }
        if (!password.trim()) {
            setError("Please enter your password");
            setIsLoading(false);
            return;
        }
        setError(null);

        // Signup API call
        try {
            const response = await axiosConfig.post(API_ENDPOINTS.REGISTER, {
                fullName,
                email,
                password,
            });
            if (response.status === 201) {
                toast.success("Profile created successfully");
                navigate("/login");
            }
        } catch (err) {
            console.error("Something went wrong", err);
            setError(
                err.response?.data?.message ||
                err.message ||
                "Failed to create profile, please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background image with blur */}
            <img
                src={assets.login_bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover filter blur-sm"
            />
            <div className="relative z-10 w-full max-w-lg px-6">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h3 className="text-2xl font-semibold text-black text-center mb-2">
                        Create An Account
                    </h3>
                    <p className="text-sm text-scale-700 text-center mb-8">
                        Ready for financial peace of mind? Join our app and start tracking
                        your way to smarter spending.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex justify-center mb-6">{/* Profile Image (optional) */}</div>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            <Input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                label="Fullname"
                                placeholder="Enter full name"
                                type="text"
                            />
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email address"
                                placeholder="abc@gmail.com"
                                type="text"
                            />
                            <div className="col-span-2">
                                <Input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    label="Password"
                                    placeholder="********"
                                    type="password"
                                />
                            </div>
                        </div>
                        {error && (
                            <p className="text-red-800 text-sm text-center bg-red-50 p-2 rounded">
                                {error}
                            </p>
                        )}
                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`btn-primary w-full py-3 text-lg font-medium flex items-center justify-center gap-2 ${
                                isLoading ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <LoaderCircle className="animate-spin w-5 h-5" />
                                    Signing Up....
                                </>
                            ) : (
                                "SIGN UP"
                            )}
                        </button>

                        <p className="text-sm text-slate-800 text-center mt-6">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-purple-600 underline hover:text-purple-600-dark transition-colors"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
