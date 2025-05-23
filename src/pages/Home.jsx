// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-[url(./home.jpg)] bg-cover flex flex-col justify-start pt-8 pl-64">
            <div className="max-w-3xl text-start">
                <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">
                    Welcome to DocuFlow
                </h1>
                <p className="text-lg text-[#34495E] mb-6">
                    DocuFlow is a secure and smart Document Management and Tracking System
                    for managing leave permission workflows.
                </p>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-2 px-6 rounded-2xl transition duration-300 shadow-md hover:translate-[-2px]"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
