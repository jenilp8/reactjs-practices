function Avatar({ image, alt, buttonName }) {
    return (
        <div>
            <div className="relative w-max">
                <img className="w-20 h-20 rounded-full border" src="https://picsum.photos/200/300
" alt={alt} />
                <button className="bg-blue-700 text-white cursor-pointer absolute right-0 top-0 rounded font-bold text-xs px-2 py-2">{buttonName}</button>
            </div>
        </div>
    );
}

export default Avatar;