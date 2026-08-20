function Card({ image, title, description }) {
  return (
    <div className="bg-blue-50 shadow-md rounded-2xl min-h-96">

      <img src={image} alt={title} />

      <div className='px-4'>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;