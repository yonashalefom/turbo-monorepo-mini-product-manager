"use server"

import {revalidateTag} from "next/cache";

export default async function createProduct(formData: FormData) {
    const response = await fetch(`${process.env.API_URL}/products`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Object.fromEntries(formData)),
    });

    revalidateTag("products");

    if (!response.ok) {
        throw new Error("Failed to create product");
    }

    return response.json();
}
