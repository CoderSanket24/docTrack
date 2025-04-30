import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [collapsed, setCollapsed] = useState(false);

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
        <div className={`dashboard-layout ${collapsed ? 'collapsed' : ''}`}>
            <aside className="sidebar">
                <button className="collapse-toggle" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? '➡️' : '⬅️'}
                </button>
                {!collapsed && <h1 className="logo">DocuFlow</h1>}
                {!collapsed && <div className="sidebar-role">{role}</div>}
                {!collapsed && (
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </aside>

            <main className="main-content">
                <h2 className="welcome">Welcome, {role} 👋</h2>
                <div className="card-grid">
                    {cards
                        .filter((card) => card.roles.includes(role))
                        .map((card, index) => (
                            <div className="dashboard-card" key={index}>
                                <div className="card-icon">{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                </div>
            </main>
        </div>
    );
}
