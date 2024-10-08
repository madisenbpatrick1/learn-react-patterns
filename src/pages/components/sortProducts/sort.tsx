import { Product } from "@/types/product";

export const sortByPrice = (product: Product[]): Product[] => {
    return [...product].sort((a, b) => a.price - b.price);
}

export const sortByRating = (product: Product[]): Product[] => {
    return [...product].sort((a, b) => b.rating - a.rating);
}

export const sortByName = (product: Product[]): Product[] => {
    return [...product].sort((a, b) => a.name.localeCompare(b.name));
}

export const strategies: Record<string, (product: Product[]) => Product[]> = {
    price: sortByPrice,
    rating: sortByRating,
    name: sortByName,
}