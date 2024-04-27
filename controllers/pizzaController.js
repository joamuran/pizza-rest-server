import { getPizzes } from '../models/pizzaModel.js';

export default class pizzesController {

    static getPizzes(req, res) {
        const pageNumber = parseInt(req.query.pageNumber) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const pizzesResponse = getPizzes(pageNumber, pageSize);

        res.status(200).json(pizzesResponse);
    }

}
