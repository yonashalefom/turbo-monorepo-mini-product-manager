import { Injectable } from '@nestjs/common';
import {CreateProductRequest, Product} from "@repo/types";

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [];

    createProduct(createProductRequest: CreateProductRequest): Product {
        const product: Product = {
            id: Math.random().toString(36).substring(7),
            ...createProductRequest
        }

        this.products.push(product)

        return product;
    }

    getProducts(): Product[] {
        return this.products;
    }
}
