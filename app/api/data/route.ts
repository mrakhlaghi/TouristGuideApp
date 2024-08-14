import { businessData } from "@/database";
import { NextApiRequest } from "next";

export function GET (
    req: NextApiRequest,
  ) {
    return Response.json({ message: 'Hello from Next.js!' , data:businessData})
  }