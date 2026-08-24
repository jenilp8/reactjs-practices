function Warning({isError}) {
    const textStyle = {
        color : isError ? 'red' : 'black',
        fontWeight : isError ? 'bold' : 'normal',
    };
    return <p style={textStyle}>{isError ? 'Error!' : 'All Good'}</p>;
}

export default Warning;