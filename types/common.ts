export type TSelectOptions = {
  value: number;
  label: string;
};

export type TAddressComponents = Array<{
  [key in string]: { long_name: string; short_name: string; types: string[] };
}>;

export type TAddressPlace = {
  label: string;
  value: {
    description: string;
    place_id: string;
    reference: string;
    matched_substrings?: object;
    structured_formatting?: object;
    terms?: Array<{ [key in string]: string }>;
    types?: Array<string>;
  };
};

export type TGeometry = {
  lat: number;
  lng: number;
};
