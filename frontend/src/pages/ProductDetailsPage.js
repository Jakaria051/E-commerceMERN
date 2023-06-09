import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { id } = useParams()


    return (
        <p>ProductDetailsPage { id && id} </p>
    );
}

export default ProductDetailsPage;