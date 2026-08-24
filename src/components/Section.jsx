function Section(props) {
    return (
        <>
            <h2>{props.heading}</h2>
            <span>{props.children}</span>
        </>
    );
}

export default Section;