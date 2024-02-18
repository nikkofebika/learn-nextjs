// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getData, getDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    data: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    console.log('req query',req.query)

    if(req.query.products![1]){
        const data = await getDataById('products', req.query.products![1]);
        res.status(200).json({ data });
    } else{
        const data = await getData('products');
        res.status(200).json({ data });
    }
    
}
