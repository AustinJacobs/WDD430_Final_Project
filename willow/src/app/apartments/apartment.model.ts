export class Apartment {
  // public _id: string;
  // public id: string;

  constructor(
    public price: string,
    public listDate: string,
    public address: string,
    public residenceType: string,
    public yearBuilt: string,
    public sqFeet: string,
    public pricePerSqFeet: string,
    public availability: string,
    public propertyDescription: string,
    public lengthTimeListed: string,
    public url: string,
    public children?: Apartment[]
  ) {}
}
