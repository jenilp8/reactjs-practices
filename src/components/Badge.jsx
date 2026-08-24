function Badge({ text = "New" }) {
    return (
        <>
            <span className="bg-amber-400 font-bold p-2 rounded-lg text-xs">{text}</span>
        </>
    );
}

export default Badge;