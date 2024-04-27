import { useState } from "react";
import { Link } from "react-router-dom";
import { loginuserAsync } from "../features/authSlice";
import { useDispatch } from "react-redux";
import "./auth.css";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(loginuserAsync(formData));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <section className="bg">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-4xl font-semibold tracking-wider text-gray-100 dark:text-white">
                        NAILA ARTS
                    </div>

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Reset Password
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">


                                {/* OLD PASSWORD */}
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="password"
                                    >
                                        Old Password:
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        value={formData.oldPassword}
                                        onChange={(e) =>
                                            setFormData({ ...formData, oldPassword: e.target.value })
                                        }
                                        required
                                    />
                                </div>


                                {/* New PASSWORD */}
                                <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="password"
                                    >
                                        New Password:
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        value={formData.newPassword}
                                        onChange={(e) =>
                                            setFormData({ ...formData, newPassword: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                {/* TOGGLE PASSWORD VISIBILITY */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                aria-describedby="remember"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                                                id="remember"
                                                type="checkbox"
                                                onChange={togglePasswordVisibility}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                className="text-gray-500 dark:text-gray-300 select-none cursor-pointer"
                                                htmlFor="remember"
                                            >
                                                show password
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Submit
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResetPassword;