const RENT_TAGS = {
  "5_20": "5k - 20k",
  "21_50": "21k - 50k",
  "51_100": "51k - 100k",
};

const PROPERTY_LOCATIONS = {
  BLR: "Bangalore",
  JBP: "Jabalpur",
  IDR: "Indore",
  DLI: "Delhi",
};

const PROPERTY_TYPE = {
  HOUSE: "House",
  APARTMENTS: "Apartments",
  BUNGALOW: "Bungalow",
};

export const PROPERTY_FILTERS_OPTIONS = {
  LOCATION_OPTIONS: Object.values(PROPERTY_LOCATIONS),
  PRICE_OPTIONS: Object.values(RENT_TAGS),
  PROPERTY_TYPE_OPTIONS: Object.values(PROPERTY_TYPE),
};

export const PROPERTY_DATA = [
  {
    PROPERTY_NAME: "Indiranagar",
    PROPERTY_RENT: "60,000",
    PROPERTY_RENT_TAG: RENT_TAGS["51_100"],
    PROPERTY_IMG:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    PROPERTY_ADDRESS: "13th Cross, Indiranagar, Bangalore",
    PROPERTY_TYPE: PROPERTY_TYPE.APARTMENTS,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.BLR,
  },
  {
    PROPERTY_NAME: "Kormangla",
    PROPERTY_RENT: "8,000",
    PROPERTY_RENT_TAG: RENT_TAGS["5_20"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.BLR,
  },
  {
    PROPERTY_NAME: "Indiranagar",
    PROPERTY_RENT: "30,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
    PROPERTY_ADDRESS: "4th Cross, Indiranagar, Bangalore",
    PROPERTY_TYPE: PROPERTY_TYPE.BUNGALOW,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.BLR,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "10,000",
    PROPERTY_RENT_TAG: RENT_TAGS["5_20"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.IDR,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "70,000",
    PROPERTY_RENT_TAG: RENT_TAGS["51_100"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.BUNGALOW,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.DLI,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "30,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.BUNGALOW,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.IDR,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "60,000",
    PROPERTY_RENT_TAG: RENT_TAGS["51_100"],
    PROPERTY_IMG:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.APARTMENTS,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.JBP,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "8,000",
    PROPERTY_RENT_TAG: RENT_TAGS["5_20"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.JBP,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "20,000",
    PROPERTY_RENT_TAG: RENT_TAGS["5_20"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.IDR,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "25,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.DLI,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "30,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.BLR,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "40,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.BUNGALOW,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.JBP,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "8,000",
    PROPERTY_RENT_TAG: RENT_TAGS["5_20"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.JBP,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "10,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.APARTMENTS,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.IDR,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "40,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.APARTMENTS,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.DLI,
  },
  {
    PROPERTY_NAME: "Palm Harbor",
    PROPERTY_RENT: "30,000",
    PROPERTY_RENT_TAG: RENT_TAGS["21_50"],
    PROPERTY_IMG:
      "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
    PROPERTY_ADDRESS: "4 Privet Drive, Little Whinging, Surrey",
    PROPERTY_TYPE: PROPERTY_TYPE.HOUSE,
    PROPERTY_LOCATION: PROPERTY_LOCATIONS.BLR,
  },
];
