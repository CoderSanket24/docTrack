import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    useEffect(() => {
        const userRole = localStorage.getItem('role');
        if (!userRole) {
            alert('No role found. Redirecting to login.');
            navigate('/login');
        } else {
            setRole(userRole);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('role');
        navigate('/login');
    };

    const cards = [
        {
            title: 'Submit Leave Application',
            description: 'Fill and submit your leave request with digital signature.',
            icon: '📝',
            roles: ['Employee'],
        },
        {
            title: 'Track Your Requests',
            description: 'Check real-time status of your submitted applications.',
            icon: '📊',
            roles: ['Employee', 'Manager', 'HR', 'Director'],
        },
        {
            title: 'Pending Approvals',
            description: 'View and take action on pending requests.',
            icon: '📥',
            roles: ['Manager', 'HR', 'Director'],
        },
        {
            title: 'Team Requests',
            description: 'View leave history and status of your team members.',
            icon: '👥',
            roles: ['Manager'],
        },
        {
            title: 'All Requests Archive',
            description: 'Search and filter past documents for compliance.',
            icon: '📁',
            roles: ['HR'],
        },
        {
            title: 'Notifications',
            description: 'Alerts about pending approvals or status changes.',
            icon: '🔔',
            roles: ['Employee', 'Manager', 'HR', 'Director'],
        },
        {
            title: 'Reports & Insights',
            description: 'Download org-level reports & stats.',
            icon: '📈',
            roles: ['Director'],
        },
    ];

    return (
        <div className={`flex h-screen p-2`}>
            <Sidebar role={role} handleLogout={handleLogout} />

            <main className="flex-1 p-8 bg-[#F9FAFB] overflow-auto">
                <h2 className="text-2xl text-[#111827] mb-5">Welcome, {role} 👋</h2>
                {/* <div className="grid grid-cols-[auto-fill_minmax(260px,1fr)] gap-5">
                    {cards
                        .filter((card) => card.roles.includes(role))
                        .map((card, index) => (
                            <div className="bg-[#fff] p-6 rounded-[12px] shadow-[0_8px_12px_rgba(0,0,0,0.04)] transition-transform duration-200 ease-in hover:translate-y-[-4px]" key={index}>
                                <div className="text-4xl">{card.icon}</div>
                                <h3 className='text-[18px] mt-3 text-[#4F46E5]'>{card.title}</h3>
                                <p className='text-[14px] mt-2 text-[#6B7280]'>{card.description}</p>
                            </div>
                        ))}
                </div> */}
            </main>
        </div>
    );
}
