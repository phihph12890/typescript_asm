export class Category {
    private _id: number;
    private _name: string;

    public constructor(_id: number, _name: string) {
        this._id = _id;
        this._name = _name;
    }

    get id(): number {
        return this._id;
    }
    set id(_id: number) {
        this._id = _id;
    }

    get name(): string {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }

    
}
