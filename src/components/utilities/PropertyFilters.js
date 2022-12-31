import React, { useState } from "react";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  PROPERTY_DATA,
  PROPERTY_FILTERS_OPTIONS,
} from "../../constants/filters";

function PropertyFilters({ setPropertyList }) {
  const [filters, setFilters] = useState({
    location: "",
    date: "",
    price: "",
    type: "",
  });

  const handleInputChange = (e) => {
    if (e?.target?.name === undefined || e?.target?.value === undefined) return;

    const name = e.target.name;
    const value = e.target.value;

    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filterProperties = () => {
    let list = PROPERTY_DATA;

    if (filters.price)
      list = list?.filter(
        (property) => property.PROPERTY_RENT_TAG === filters.price
      );

    if (filters.type)
      list = list?.filter(
        (property) => property.PROPERTY_TYPE === filters.type
      );

    if (filters.location)
      list = list?.filter(
        (property) => property.PROPERTY_LOCATION === filters.location
      );

    setPropertyList(list);
  };

  return (
    <div className="property-filter-containers">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filters.location}
          label="Location"
          name="location"
          onChange={handleInputChange}
        >
          {PROPERTY_FILTERS_OPTIONS.LOCATION_OPTIONS.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filters.price}
          label="Price"
          name="price"
          onChange={handleInputChange}
        >
          {PROPERTY_FILTERS_OPTIONS.PRICE_OPTIONS.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="When"
          inputFormat="MM/DD/YYYY"
          value={filters.date}
          onChange={(e) =>
            handleInputChange({ target: { name: "date", value: e } })
          }
          renderInput={(params) => (
            <TextField {...params} sx={{ borderColor: "black" }} />
          )}
        />
      </LocalizationProvider>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filters.type}
          label="Type"
          name="type"
          onChange={handleInputChange}
        >
          {PROPERTY_FILTERS_OPTIONS.PROPERTY_TYPE_OPTIONS.map(
            (option, index) => (
              <MenuItem key={option + index} value={option}>
                {option}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

      <Button
        sx={{
          backgroundColor: "#6f64f0",
          textTransform: "capitalize",
          color: "#FFF",
          padding: "10px 20px",
          fontSize: "18px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#6f64f0",
          },
        }}
        onClick={filterProperties}
      >
        Search
      </Button>
    </div>
  );
}

export default PropertyFilters;
