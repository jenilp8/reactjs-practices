function Bio({name, description, occupation}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>Description : {description}</p>
            <p>Ocuppation: {occupation}</p>
        </div>
    );
}

export default Bio;