/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COIN_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryCoinById
// ====================================================

export interface QueryCoinById_coins_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCoinById_coins {
  __typename: "Coin";
  id: string;
  title: string;
  image: QueryCoinById_coins_image | null;
  publisher: string;
  publishedAt: string;
  viewed: any | null;
  type: ENUM_COIN_TYPE;
  short_description: string;
  large_description: string;
}

export interface QueryCoinById {
  coins: QueryCoinById_coins[];
}

export interface QueryCoinByIdVariables {
  id: number;
}
