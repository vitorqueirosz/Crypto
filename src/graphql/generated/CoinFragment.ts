/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COIN_TYPE } from "./globalTypes";

// ====================================================
// GraphQL fragment: CoinFragment
// ====================================================

export interface CoinFragment_image {
  __typename: "UploadFile";
  url: string;
}

export interface CoinFragment {
  __typename: "Coin";
  id: string;
  title: string;
  image: CoinFragment_image | null;
  publisher: string;
  publishedAt: string;
  viewed: any | null;
  type: ENUM_COIN_TYPE;
}
