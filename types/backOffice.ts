import { TAddressPlace, TGeometry } from "@/types/common";

export type TBackOfficeForm = {
  email: string;
  deliveryPrice: string;
  phone: string;
  tax: string;
  address: null | TAddressPlace;
  geometry: { lat: null; lng: null } | TGeometry;
};

export type TBackOfficeData = {
  address: string;
  email: string;
  deliveryPrice: string;
  phone: string;
  tax: string;
  geometry: TGeometry;
  createdAt: string;
  updatedAt: string;
};
