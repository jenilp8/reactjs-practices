function Modal(props) {
    return (
        <>
            <div className="bg-white shadow-2xl rounded-xl">
                <div className="flex items-center justify-between p-3 border-b">
                    <h3>{props.modalHeading}</h3>
                    <button>❌</button>
                </div>
                <div className="p-3">
                    <h4>{props.modalTitle}</h4>
                    <h4>{props.children}</h4>
                </div>
            </div>
        </>
    );
}

export default Modal;