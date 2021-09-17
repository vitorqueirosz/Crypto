/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCotations
// ====================================================

export interface QueryCotations_cotations {
  __typename: "Cotation";
  id: string;
  name: string;
  currentValue: string;
  percent: string | null;
}

export interface QueryCotations {
  cotations: QueryCotations_cotations[];
}
