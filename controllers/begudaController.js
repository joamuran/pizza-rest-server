import { getBegudes } from '../models/begudaModel.js';

export default class begudesController {

    static getBegudes(req, res) {
        const pageNumber = parseInt(req.query.pageNumber) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const begudesResponse = getBegudes(pageNumber, pageSize);

        res.status(200).json(begudesResponse);
    }

}
