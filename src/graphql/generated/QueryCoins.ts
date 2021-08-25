export interface QueryCoins_bitcoins_image {
  __typename: 'UploadFile';
  url: string;
}

export interface QueryCoins_bitcoins {
  __typename: 'Bitcoin';
  id: string;
  title: string;
  details: string;
  description: string;
  image: QueryCoins_bitcoins_image | null;
}

export interface QueryCoins_ethereums_image {
  __typename: 'UploadFile';
  url: string;
}

export interface QueryCoins_ethereums {
  __typename: 'Ethereum';
  id: string;
  title: string;
  details: string;
  description: string;
  image: QueryCoins_ethereums_image | null;
}

export interface QueryCoins_cardanos_image {
  __typename: 'UploadFile';
  url: string;
}

export interface QueryCoins_cardanos {
  __typename: 'Cardano';
  id: string;
  title: string;
  details: string;
  description: string;
  image: QueryCoins_cardanos_image | null;
}

export interface QueryCoins_others_image {
  __typename: 'UploadFile';
  url: string;
}

export interface QueryCoins_others {
  __typename: 'Others';
  id: string;
  title: string;
  details: string;
  description: string;
  image: QueryCoins_others_image | null;
}

export interface QueryCoins {
  bitcoins: QueryCoins_bitcoins[];
  ethereums: QueryCoins_ethereums[];
  cardanos: QueryCoins_cardanos[];
  others: QueryCoins_others[];
}

export interface QueryCoinsVariables {
  limit?: number | null;
  sort?: string | null;
}
