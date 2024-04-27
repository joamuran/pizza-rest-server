import { getEntrants } from '../models/entrantsModel.js';

export default class entrantsController {

    static getEntrants(req, res) {
        const pageNumber = parseInt(req.query.pageNumber) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const entrantsResponse = getEntrants(pageNumber, pageSize);

        res.status(200).json(entrantsResponse);
    }

}
