import { iBase } from "../interface";

export abstract class Base implements iBase{
    _id: number = 0;
    abstract nameTable: string;
    findOne(id:number): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        })
    }
}