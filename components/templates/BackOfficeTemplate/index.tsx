"use client";

import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import PhoneNumberWithValidation from "@/components/molecules/PhoneNumberWithValidation";
import PlaceAutoCompleteWithValidation from "@/components/molecules/PlaceAutoCompleteWithValidation";
import backOfficeSchema from "@/validationSchemas/backOffice";
import { yupResolver } from "@hookform/resolvers/yup";
import { TAddressPlace } from "@/types/common";
import {
  resolveBackOfficeFormDefaultValues,
  setStreetAddressWithGeometry,
} from "@/utils/place";
import { TBackOfficeForm } from "@/types/backOffice";
import {
  useGetBackOfficeQuery,
  useUpdateBackOfficeMutation,
} from "@/lib/apiModules/backOffice/api";

const BackOfficeTemplate = (): React.JSX.Element => {
  const { data: backOffice } = useGetBackOfficeQuery("");
  const [updateBackOffice] = useUpdateBackOfficeMutation();

  const { handleSubmit, control, setValue, reset } = useForm<TBackOfficeForm>({
    defaultValues: {
      email: "",
      deliveryPrice: "",
      phone: "",
      address: null,
      geometry: {
        lat: null,
        lng: null,
      },
      tax: "",
    },
    resolver: yupResolver(backOfficeSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (backOffice) {
      reset(resolveBackOfficeFormDefaultValues(backOffice));
    }
  }, [backOffice, reset]);

  const handleChangeStreetAddress = useCallback(
    (data: TAddressPlace) => {
      setStreetAddressWithGeometry(data, setValue, control);
    },
    [setValue, control],
  );

  const onSubmit = useCallback(
    (data: TBackOfficeForm) => {
      updateBackOffice({
        ...data,
        address: data.address?.label ?? backOffice.address,
      });
    },
    [updateBackOffice, backOffice],
  );

  return (
    <>
      <div className="pagetitle d-flex justify-content-between">
        <h1>Back Office Details</h1>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body pt-3">
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <InputWithValidation
                      name="email"
                      id="email"
                      control={control}
                      withError={true}
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="deliveryPrice" className="form-label">
                      Delivery Price
                    </label>
                    <InputWithValidation
                      name="deliveryPrice"
                      id="deliveryPrice"
                      type="number"
                      control={control}
                      withError={true}
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <PhoneNumberWithValidation
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      control={control}
                      withError={true}
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="tax" className="form-label">
                      Tax
                    </label>
                    <InputWithValidation
                      type="number"
                      id="tax"
                      name="tax"
                      placeholder="Tax"
                      control={control}
                      withError={true}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <PlaceAutoCompleteWithValidation
                      id="address"
                      name="address"
                      control={control}
                      onChange={handleChangeStreetAddress}
                      withError={true}
                    />
                    <div className="d-flex">
                      <p>Your recently address was:</p>
                      &nbsp;
                      <strong>{backOffice?.address}</strong>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-end gap-5">
                      <div>
                        <button type="submit" className="btn btn-success">
                          Submit Form
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackOfficeTemplate;
