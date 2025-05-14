import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    const { isDarkMode, theme } = useContext(ThemeContext);
    let backgroundColor = {
        active: '#fff',
        inActive: '#F6F8F9'
    }

    if (isDarkMode) {
        backgroundColor = {
            active: '#001121',
            inActive: '#010D19'
        }
    }

    return (
        <div style={{ display: 'flex', gap: '4px', }}>
            {tabs.map(tab => (
                <button
                    key={tab}
                    className={`tab${activeTab === tab ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    style={{
                        zIndex: activeTab === tab ? 2 : 1,
                        backgroundColor: activeTab === tab ? backgroundColor.active : backgroundColor.inActive,
                        border: `1px solid ${theme.colors.border.card}`,
                        borderBottom: activeTab === tab ? `1px solid ${backgroundColor.active}` : `1px solid ${theme.colors.border.card}`
                    }}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;