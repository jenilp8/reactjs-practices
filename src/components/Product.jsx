import { useState } from "react";
import { Heart } from "lucide-react";

function Product(props) {
    const [like, setLike] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="bg-white p-4 shadow-xl rounded-2xl">
            <img
                className="mt-4 w-full"
                src="https://picsum.photos/200/300"
                alt={props.name}
            />

            <h2>{props.name}</h2>

            <span>{props.price}</span>

            <button onClick={() => setLike(!like)}>
                <Heart
                    className={like ? "fill-red-600 text-red-600" : ""}
                />
            </button>

            <p>
                {props.inStock ? "Available" : "Out of Stock"}
            </p>

            <button
                onClick={() => setShowDescription(!showDescription)}
                className="text-blue-500 p-1 rounded"
            >
                {showDescription ? "Hide More" : "View More"}
            </button>

            {showDescription && (
                <p>{props.children}</p>
            )}
        </div>
    );
}   

export default Product;