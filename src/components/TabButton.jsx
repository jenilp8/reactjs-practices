function TabButton({ children, onSelect, isSelected }) {
    return (
        <li>
            <button className={`${isSelected ? 'active' : ''} cursor-pointer px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors`}
                onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}

export default TabButton;