// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Employee');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('role', role);
        navigate('/dashboard');
    };

    return (
        <div className="bg-[#F9FAFB]">
            <div className="bg-[#fff] py-[40px] px-[30px] rounded-2xl w-full max-w-[400px] text-center shadow-[0px_10px_20px_rgba(0,0,0,0.1)]">
                <h2 className='mb-6 text-[#4F46E5]'>Login to DocuFlow</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full p-3 mb-4 rounded-lg text-[16px] border-[#D1D5DB] border-solid border-[1px]'
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full p-3 mb-4 rounded-lg text-[16px] border-[#D1D5DB] border-solid border-[1px]'
                    />
                    <select value={role} onChange={(e) => setRole(e.target.value)} className='w-full p-3 mb-4 rounded-lg text-[16px] border-[#D1D5DB] border-solid border-[1px]'>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="HR">HR</option>
                        <option value="Director">Director</option>
                    </select>
                    <button type="submit" className='w-full p-3 rounded-b-lg'>Login</button>
                </form>
            </div>
        </div>
    );
}
