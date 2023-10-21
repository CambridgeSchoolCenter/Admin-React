import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { APP_URL } from "./config";
function Login({ setAuth }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Credentials True for cookies
    axios.defaults.withCredentials = true;


    // useForm for checking
    const {
        handleSubmit,
        // formState: { errors },
    } = useForm();


    // onSubmit for logging in
    const onSubmit = async () => {
        try {
            //INFO:Connect

            const loginResponse = await axios.post(`${APP_URL}/login`, {
                username: username,
                password: password,
            });

            // console.log(loginResponse.data);

            if (loginResponse.status === 200) {
                console.log("Аутентификация прошла успешно");
                //INFO:Connect
                const response = await axios.get(`${APP_URL}/students`);
                console.log(response.data);
                if (response.status === 200) {
                    setAuth(true);
                }
            } else {
                console.log("Неверные логин или пароль");
            }
        } catch (error) {
            //   setAuthText(true);
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="d-flex justify-content-center m-5 gap-5 text-center">
                    <img src="img/logo.png" width={150} height={"auto"} alt="logo" />
                    <h1>Cambridge School</h1>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center">Войти</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* {errors && <p className="error-message"> Неверное имя пользовотеля или пароль</p>} */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Имя
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Пароль
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;