import { TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { login } from "./authApi";
import axios from "../config/AxiosConfig";
import { AxiosError } from "axios";


type LoginProps = {
    email: string;
    password: string;
}

type ErrorResponse = {
    message: string;
}

const Login = () => {
    const { register, handleSubmit, control, reset } = useForm<LoginProps>();
    const navigate = useNavigate();

    const onSubmit = async (data: LoginProps) => {
        try{
            const response = await axios.post(`/auth/login`, {
                email: data.email,
                password: data.password
            });
            reset();
            navigate("/home", {state: {user: response.data}});
  
        } catch (error) {
            const err = error as AxiosError<ErrorResponse>

            const errMessage = err.response?.data.message || err.message || "An unexpected error occurred";
            return (
                alert(errMessage)
            )
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            label="Email"
                            variant="outlined"
                            type="email"
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            margin="normal"
                            {...register("email", { required: true })}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Password is required" }}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={!!error}
                            helperText={error ? error.message : null}
                            fullWidth
                            margin="normal"
                            {...register("password", { required: true })}
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
            <h3>Don't have account? <Link to = "/signup" className="text-blue-400">Sign Up</Link></h3>
        </>
    );
};

export default Login;