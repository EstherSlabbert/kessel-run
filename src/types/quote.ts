export type Quote = {
    id: string;
    name: string;
    surname: string;
    email: string;
    cell: string;
    service: string;
}

export type QuoteInput = Omit<Quote, 'id'>;