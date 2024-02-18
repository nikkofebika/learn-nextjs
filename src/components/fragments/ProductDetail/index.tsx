export default function ProductDetail({ product }: { product: any }) {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 flex justify-center max-h-[650px]">
                <img src={product.image} alt={product.image} className="object-contain" />
            </div>
            <div className="">
                <h1 className="font-bold text-3xl">{product.name}</h1>
                <p className="font-semibold text-xl">{product.name}</p>
                <p className="font-semibold text-xl mt-3">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                <p className="mt-5">{product.description}</p>
                <div className="mt-5">
                    <button className="bg-slate-800 text-white px-3 py-2 rounded-full hover:bg-cyan-900 active:bg-cyan-800 w-full">Buy</button>
                    <div className="my-3" />
                    <button className="bg-white border border-slate-400 text-black px-3 py-2 rounded-full hover:border-slate-600 active:bg-slate-100 w-full">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}