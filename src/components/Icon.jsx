function Icon(props) {
    return (
        <>
            <div className={`bg-blue-900 text-center ${props.width} ${props.height} p-2 rounded-lg`}>{props.children}</div>
        </>
    );
}

export default Icon;