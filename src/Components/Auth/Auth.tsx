import { RootState } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { auth } from '../../firebase';
import { useDispatch, useSelector } from "react-redux"
import { loginStart, loginSuccess } from "../store/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login: React.FC = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state: RootState) => state.auth);  

    const [email, setEmail] = useState('');
    const [passwords, setPasswords] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());

    try {
        const userCredit = await signInWithEmailAndPassword(auth, email, passwords);
        dispatch(loginSuccess(userCredit.user));
        
    }
    }
}