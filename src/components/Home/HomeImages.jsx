const HomeImages = ({product}) => {
    return (
        <div className="container mx-auto card w-72 md:w-full shadow-2xl">
          <div className="flex justify-center items-center bg-base-200 py-7 px-3">
            <img className="w-64 md:w-fit h-64 md:h-96" src={product.images[0]} alt={product.title} />
          </div>
        </div>
    );
};

export default HomeImages;