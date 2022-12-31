import React from "react";

import { Grid } from "@mui/material";

import Card from "../utilities/Card";

function PropertyCards({ propertyList }) {
  return (
    <Grid container spacing={2}>
      {propertyList.map((property, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            PROPERTY_NAME={property.PROPERTY_NAME}
            PROPERTY_RENT={property.PROPERTY_RENT}
            PROPERTY_IMG={property.PROPERTY_IMG}
            PROPERTY_ADDRESS={property.PROPERTY_ADDRESS}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PropertyCards;
