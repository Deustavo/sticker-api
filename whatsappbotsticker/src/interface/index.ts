export interface iBase {
    _id: number;
    nameTable: string;
    findOne(id:number): Promise<void>;
}