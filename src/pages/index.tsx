import ProductCard from "@/components/fragments/ProductCard";
import Skeleton from "@/components/fragments/ProductCard/Skeleton";
import { fetcher } from "@/lib/swr/fetcher";
import Image from "next/image";
import useSWR from "swr";


export default function Index() {
  const { data, error, isLoading } = useSWR("api/products", fetcher);
  console.log('error', error)
  console.log('isLoading', isLoading)
  console.log('data', data)
  if (isLoading) return <Skeleton />
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10 ">
      {data.data.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
