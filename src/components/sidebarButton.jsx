export default function sidebarbutton(){
    const [collapsed, setCollapsed] = useState(false);
    return(
        <button className="collapse-toggle" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? '➡️' : '⬅️'}
        </button>
    );
}