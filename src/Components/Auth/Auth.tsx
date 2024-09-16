import { RootState } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginStart } from "../store/authSlice";


const Login: React.FC = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state: RootState) => state.auth);  

    const [email, setEmail] = useState('');
    const [passwords, setPasswords] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());
    }
}