import { IRequest } from "interfaces/IRequest";
import { Model, model } from "mongoose";
import requestSchema from "../schema/request";

class Requests {
    Request: Model<IRequest, {}, {}, {}, any>;
    
    constructor() {
        this.Request = model<IRequest>('Request', requestSchema);
    }

    async getAll() {
        return await this.Request.find({
            hidden: null
        }, {
            _id: 1,
            name: 1,
            project: 1,
            email: 1
        });
    }

    async getFull(id: string) {
        return await this.Request.findById(id);
    }

    async getHidden() {
        return await this.Request.find({
            hidden: {$ne: null}
        }, {
            _id: 1,
            name: 1,
            project: 1,
            email: 1
        })
    }

    async setHidden(requestId: string, hidden: boolean = true) {
        return await this.Request.findByIdAndUpdate(requestId, {
            hidden: hidden ? Date.now() : null
        });
    }

    async addRequest(data: IRequest) {
        const request = await this.Request.create(data);
        return request;
    }
}

export default new Requests();