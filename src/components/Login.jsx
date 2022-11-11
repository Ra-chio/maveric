import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import EmpDB from "../empinfo.json";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ username: "", password: "" });
    const [errorMsg, setErrorMsg] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const currentValues = { ...values, [e.target.name]: e.target.value };
        setValues(currentValues);
    };

    const validateCreds = (input) => {
        const error = {};
        const userData = EmpDB.find((user) => {
            return (
                user.username === input.username &&
                user.password === input.password
            );
        });
        if (userData == null) {
            if (input.username === "" && input.password === "") {
                error.username = "required field";
                error.password = "required field";
            } else if (input.username === "") {
                error.username = "this field is required";
            } else if (input.password === "") {
                error.password = "this field is required";
            } else {
                error.username = "invalid credentials";
                error.password = "invalid credentials";
            }
        } else {
            return true;
        }
        return error;
    };

    useEffect(() => {
        if (Object.keys(errorMsg).length === 0 && isSubmit) {
            navigate("/employee-directory");
        }
    }, [errorMsg, isSubmit, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMsg(validateCreds(values));
        setIsSubmit(true);
        //   setValues({ username: "", password: "" });
    };

    return (
        <>
            <Header />

            <Container>
                <div className="container p-5 d-flex flex-column">
                    <form
                        className="mx-auto p-5"
                        onSubmit={(event) => {
                            handleSubmit(event);
                        }}
                    >
                        <div className="mb-3">
                            <input
                                onChange={(e) => handleChange(e)}
                                name="username"
                                value={values.username}
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                autoComplete="off"
                                autoFocus
                            />
                            <p className="text-danger">{errorMsg.username}</p>
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={(e) => handleChange(e)}
                                name="password"
                                value={values.password}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                autoComplete="off"
                            />
                            <p className="text-danger">{errorMsg.password}</p>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-md d-block p-2"
                            onClick={(event) => handleSubmit(event)}
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </Container>

            <Footer />
        </>
    );
}

const Container = styled.div`
    .container {
        min-height: 54vh;
        justify-content: center;
        form {
            min-width: 250px;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0px 0px 7px -3px #000000;
            input {
                border: 1px solid #214e8f;
                border-radius: 5px;
                &:focus {
                    box-shadow: 0px 0px 4px 0px #214e8f;
                    border: 1px solid navy;
                }
            }
            p {
                font-size: 15px;
                font-weight: bold;
            }
            button {
                background: #214e8f;
                width: 100%;
                color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 7px -3px #000000;
                &:hover {
                    background-color: #1c4279;
                }
            }
        }
    }
    @media (max-width: 300px) {
        .container {
            padding: 30px 10px !important;
            form {
                padding: 30px !important;
            }
        }
    }
`;
