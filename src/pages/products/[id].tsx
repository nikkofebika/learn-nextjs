import ProductDetail from "@/components/fragments/ProductDetail";
import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router"
import useSWR from "swr";

export default function productDetail(props) {
    const { product } = props
    // const { query } = useRouter();

    // const { data, isLoading } = useSWR(`/api/products/${query.id}`, fetcher);
    // console.log('data', data)

    // if (isLoading) return <h1>Loading...</h1>
    return (
        <ProductDetail product={product} />
    )
}

export async function getServerSideProps({ params }: { params: any }) {
    console.log('params', params)
    const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
    const data = await res.json();
    console.log('data', data)

    return {
        props: {
            product: data.data
        }
    }

}