import { entrantsData } from "./entrantsData.js";

// Funció per obtenir els entrants amb paginació
export function getEntrants(pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const entrants = entrantsData.slice(startIndex, endIndex);

    return {
        page: pageNumber,
        per_page: pageSize,
        total_count: entrants.length,
        records: entrants,
    };
}
