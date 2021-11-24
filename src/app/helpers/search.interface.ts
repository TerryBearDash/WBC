
export interface SearchModel {
    to: number | 0;
    size: number | 24;
    type: string | "Vehicle";
    filter_type: string | "all";
    subcategory: any;
    q: string | "";
    Make: any;
    Model: any;
    Variant: any;
    DealerKey: any;
    FuelType: any;
    BodyType: any;
    Gearbox: any;
    AxleConfiguration: any;
    Colour: any;
    FinanceGrade: any;
    Priced_Amount_Gte: number | 0;
    Priced_Amount_Lte: number | 0;
    MonthlyInstallment_Amount_Gte: number | 0;
    MonthlyInstallment_Amount_Lte: number | 0;
    auctionDate: any;
    auctionEndDate: any;
    auctionDurationInSeconds: any;
    Kilometers_Gte: any;
    Kilometers_Lte: any;
    Priced_Amount_Sort: any;
    Bid_Amount_Sort: any;
    Kilometers_Sort: any;
    Year_Sort: string | "desc";
    Auction_Date_Sort: any;
    Auction_Lot_Sort: any;
    Year: any[] | [];
    Price_Update_Date_Sort: any;
    Online_Auction_Date_Sort: any;
    Online_Auction_In_Progress: any;
}

export class Search {
    constructor(t: SearchModel) {
        Object.assign(this, t);
    }
}
