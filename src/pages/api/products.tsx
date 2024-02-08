// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    data: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const data = await getData('products');
    res.status(200).json({ data });
}
