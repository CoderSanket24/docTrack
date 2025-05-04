import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {
    const navigate = useNavigate();
    const { role, handleLogout } = props;

    const cards = [
        {
            title: '📝 Submit Leave',
            roles: ['Employee'],
            path: '/SubmitLeave',
        },
        {
            title: '📊 Track Requests',
            roles: ['Employee', 'Manager', 'HR', 'Director'],
            path: '/TrackRequests',
        },
        {
            title: '📥 Approvals',
            roles: ['Manager', 'HR', 'Director'],
            path: '/PendingApprovals',
        },
        {
            title: '🔔 Notifications',
            roles: ['Employee', 'Manager', 'HR', 'Director'],
            path: '/Notifications',
        },
        {
            title: '📈 Reports',
            roles: ['Director'],
            path: '/Reports',
        },
    ];

    const navBtn = {
        marginBottom: '12px',
        color: 'white',
        background: 'none',
        border: 'none',
        textAlign: 'left',
        fontSize: '20px',
        cursor: 'pointer',
    };

    return (
        <aside className="w-2xs bg-[#4F46E5] text-[#fff] rounded-2xl mr-2 flex flex-col items-center py-6 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">DocuFlow</h1>
            <div className="bg-[#6366F1] px-3 py-1.5 rounded-full text-[14px] mb-6 capitalize text-center w-fit ">{role}</div>
            <nav className="flex flex-col w-full mt-6 pl-4">
                {cards.filter(card => card.roles.includes(role)).map((card, index) => (
                    <button key={index} onClick={() => navigate(`${card.path}`)} style={navBtn}>
                        {card.title}
                    </button>
                ))}
            </nav>
            <button className="mt-auto py-2.5 px-5 rounded-lg bg-[#EF4444] text-[#fff] border-none font-semibold cursor-pointer hover:bg-[#dc2626]" onClick={handleLogout}>
                Logout
            </button>
        </aside>
    );
}