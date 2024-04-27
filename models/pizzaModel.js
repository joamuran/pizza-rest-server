import { pizzesData } from "./pizzaData.js";

// Funció per obtenir les pizzes amb paginació
export function getPizzes(pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pizzes = pizzesData.slice(startIndex, endIndex);

    return {
        page: pageNumber,
        per_page: pageSize,
        total_count: pizzes.length,
        records: pizzes,
    };
}
