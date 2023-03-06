import { writeFileSync, readdirSync } from 'fs'
import links from '@/components/links'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {

        for (let [key, link] of Object.entries(links)) {
            await fetch(link)
                .then(r => r.json())
                .then(json => {
                    const data = JSON.stringify(json);

                    // write to file in public folder 
                    writeFileSync(`public/${key}.json`, data);
                })
        }

        // log
        writeFileSync("public/META.json", JSON.stringify({
            lastUpdated: new Date().toISOString(),
        }));

        res.status(200).json({ message: 'success' })
    }
    catch {
        res.status(500).json({ message: 'error' })
    }
}