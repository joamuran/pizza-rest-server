import { pizzesData } from "./pizzaData.js";

// Funció per obtenir les pizzes amb paginació
export function getPizzes(pageNumber, pageSize) {

    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = startIndex + pageSize;

    if(pageNumber ==-1 || pageSize==-1){
        // Si qualsevol dels dos és -1, 
        // Tornem totes les pizzes
        startIndex=0;
        endIndex=pizzesData.length;
    }

    const pizzes = pizzesData.slice(startIndex, endIndex);

    return {
        page: pageNumber,
        per_page: pageSize,
        total_count: pizzes.length,
        records: pizzes,
    };
}
