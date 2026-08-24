function Category({categories}) {
    return (
        <>
            {categories.map((category) => <li className="bg-blue-50 p-3 my-3" key={category}>{category}</li>)}
        </>
    );
}

export default Category;