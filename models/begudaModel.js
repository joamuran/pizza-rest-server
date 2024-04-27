import { begudaData } from "./begudesData.js";

// Funció per obtenir les begudes amb paginació
export function getBegudes(pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const begudes = begudaData.slice(startIndex, endIndex);

    return {
        page: pageNumber,
        per_page: pageSize,
        total_count: begudes.length,
        records: begudes,
    };
}
