/* tslint:disable */
/* eslint-disable */
export interface Address {
  city: string;

  /**
   * ISO 3166 ALPHA-3
   */
  country: string;
  postalCode?: string;
  streetAndNumber?: string;
}
