/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COIN_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryCoins
// ====================================================

export interface QueryCoins_coins_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCoins_coins {
  __typename: "Coin";
  id: string;
  title: string;
  image: QueryCoins_coins_image | null;
  publisher: string;
  publishedAt: string;
  type: ENUM_COIN_TYPE | null;
  viewed: any | null;
}

export interface QueryCoins {
  coins: QueryCoins_coins[];
}

export interface QueryCoinsVariables {
  limit: number;
  sort?: string | null;
  type?: string | null;
}
