import Image from "next/image";
import Link from "next/link";

const ProductCard = (props: any) => {
    const { product } = props;
    return (
        <Link href={`products/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h2 className="font-semibold text-slate-800">{product.name}</h2>
            <p className="font-semibold text-slate-500">{product.name}</p>
            <p className="font-semibold text-slate-800 mt-3">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
            <div className="">
                <button className="bg-cyan-700 text-white px-3 py-2 rounded hover:bg-cyan-900 active:bg-cyan-800">Buy</button>
                <div className="mx-1 inline" />
                <button className="bg-cyan-700 text-white px-3 py-2 rounded hover:bg-cyan-900 active:bg-cyan-800">Add To Cart</button>
            </div>
        </Link>
    )
}

export default ProductCard;