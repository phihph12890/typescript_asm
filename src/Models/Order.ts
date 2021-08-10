export class Order {
    private _id: number;
    private _userId: number;
    private _name: string;
    private _email: string;
    private _address: string;
    private _phoneNumber: string;
    private _note: string;
    private _totalPrice: number;
    private _cartNumber: number;
    private _cart: object;
    private _status: string;
    private _create_at: string;

    public constructor(_id: number, _userId: number, _name: string, _email: string, _address: string, _phoneNumber: string, 
                        _note: string, _totalPrice: number, _cartNumber: number, _cart: object, _status: string, _create_at: string) {
        this._id = _id;
        this._userId = _userId;
        this._name = _name;
        this._email = _email;
        this._address = _address;
        this._phoneNumber = _phoneNumber;
        this._note = _note;
        this._totalPrice = _totalPrice;
        this._cartNumber = _cartNumber;
        this._cart = _cart;
        this._status = _status;
        this._create_at = _create_at;
    }

    get id(): number {
        return this._id;
    }
    set id(_id: number) {
        this._id = _id;
    }

    get userId(): number {
        return this._userId;
    }
    set userId(_userId: number) {
        this._userId = _userId;
    }

    get name(): string {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }

    get email(): string {
        return this._email;
    }
    set email(_email: string) {
        this._email = _email;
    }

    get address(): string {
        return this._address;
    }
    set address(_address: string) {
        this._address = _address;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }
    set phoneNumber(_phoneNumber: string) {
        this._phoneNumber = _phoneNumber;
    }

    get note(): string {
        return this._note;
    }
    set note(_note: string) {
        this._note = _note;
    }
    
    get totalPrice(): number {
        return this._totalPrice;
    }
    set totalPrice(_totalPrice: number) {
        this._totalPrice = _totalPrice;
    }

    get cartNumber(): number {
        return this._cartNumber;
    }
    set cartNumber(_cartNumber: number) {
        this._cartNumber = _cartNumber;
    }

    get cart(): object {
        return this._cart;
    }
    set cart(_cart: object) {
        this._cart = _cart;
    }
    get status(): string {
        return this._status;
    }
    set status(_status: string) {
        this._status = _status;
    }

    get create_at(): string {
        return this._create_at;
    }
    set create_at(_create_at: string) {
        this._create_at = _create_at;
    }
}
