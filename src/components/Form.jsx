function Form({ formHeading }) {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted")
    }
    return (
        <>
            <h2>{formHeading}</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium"> Name </label>
                    <input required type="text" id="name" name="name" placeholder="Enter your name" className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium"> Email </label>
                    <input required type="email" id="email" name="email" placeholder="Enter your email" className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium"> Message </label>
                    <textarea required id="message" name="message" placeholder="Enter your message" className="w-full border p-2 rounded" ></textarea>
                </div>
                <button type="submit" className="bg-amber-400 px-4 py-2 rounded cursor-pointer" > Submit </button>
            </form>
        </>
    );
}

export default Form;