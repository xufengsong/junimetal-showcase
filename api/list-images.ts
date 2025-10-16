// api/list-images.ts
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const command = new ListObjectsV2Command({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    // You can add a Prefix here if your images are in a subfolder
    // Prefix: "works-gallery/",
  });
  
  try {
    const { Contents } = await s3Client.send(command);
    
    // Get all file names, filtering out any null/undefined entries
    const allFileNames = Contents?.map(item => item.Key).filter(Boolean) || [];

    // **NEW:** Filter the list to only include files ending with '.webp'
    const webpFileNames = allFileNames.filter(name => 
      name && name.toLowerCase().endsWith('.webp')
    );

    // Remove file extensions for use in your component
    // const baseNames = webpFileNames.map(name => name?.split('.')[0]);

    res.status(200).json(webpFileNames);
  } catch (error) {
    console.error("Error listing S3 objects:", error);
    res.status(500).json({ error: "Failed to list bucket contents." });
  }
}