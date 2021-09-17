/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_TRADE_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryTradesByType
// ====================================================

export interface QueryTradesByType_trades {
  __typename: "Trade";
  id: string;
  type: ENUM_TRADE_TYPE;
  price: string;
  quantity: string;
  time: string;
}

export interface QueryTradesByType {
  trades: QueryTradesByType_trades[];
}

export interface QueryTradesByTypeVariables {
  type: string;
}
