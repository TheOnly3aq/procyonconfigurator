export const colors = [
  { label: "Arctic", value: "white", price: 0 },
  { label: "Abyss Ultragloss", value: "black", price: 1500 },
  { label: "Flora Green  Metallic", value: "floragreen", price: 1000 },
  { label: "Procyon Sirus Grey", value: "silver", price: 1500 },
  { label: "Supernova Metallic", value: "supernova", price: 1500 },
  { label: "Memphis Metallic", value: "memphis", price: 1500 },
  { label: "Chromosphere Metallic", value: "chromosphere", price: 1500 },
  { label: "Quicksilver Metallic", value: "quicksilver", price: 1500 },
  { label: "Deep Space Metallic", value: "blue", price: 1500 },
  { label: "Ruby Stone Metallic", value: "red", price: 2500 },
];
export const eccfcolors = [
  { label: "Arctic", value: "white", price: 0 },
  { label: "Abyss Ultragloss", value: "black", price: 1500 },
  { label: "Procyon Dark Matter", value: "silver", price: 1500 },
  { label: "Skyline", value: "blue", price: 1500 },
  { label: "Ruby Stone Metallic", value: "red", price: 2500 },
];

export const interiorColors = [
  { label: "Abyss Black & Cloth", value: "abyssblack", price: 0 },
  { label: "Dune Beige & Cloth", value: "dune", price: 0 },
  { label: "Graphite Blue & Suede", value: "graphite", price: 1500 },
  { label: "Bordeaux Red & Suede", value: "birdeaux", price: 1500 },
  { label: "Arctic White & Suede", value: "arcticwhite", price: 1500 },
  { label: "Coffee Brown & Leather", value: "coffeebrown", price: 2000 },
  { label: "Chocolate Brown & Leather", value: "chocbrown", price: 2000 },
  { label: "Obsidian & Leather", value: "obsidianblack", price: 2000 },
];

export const interiorLayouts = [
  { label: "Five seat interior", value: "five_seat", price: 0 },
  { label: "Six seat interior", value: "six_seat", price: 6500 },
  { label: "Seven seat interior", value: "seven_seat", price: 3500 },
];




export const models = [
  {
    key: "ccf",
    name: "CCF2",
    colors: colors,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_1.png`,
        label: "Procyon BA Wheels",
        value: "wheel_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_2.png`,
        label: "Procyon DC Wheels",
        value: "wheel_2",
        price: 4500,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_3.png`,
        label: "Procyon AA Wheels",
        value: "wheel_3",
        price: 5000,
      },
    ],
    wheelsize: [
        {
          src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_15.png`,
          label: '15" rims',
          value: "15",
          price: 0,
        },
        {
          src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_16.png`,
          label: '16" rims',
          value: "16",
          price: 400,
        },
        {
          src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_17.png`,
          label: '17" rims',
          value: "17",
          price: 600,
        },
      ],
    types: [
      {
        label: "F4 6 Speed MT",
        value: "f4MT",
        specs: {
          power: 192,
          top_speed: 209,
          acceleration_time: 6.4,
        },
        price: 31240,
        benefits: [
          "Advanced Driver Assistance System",
          "Sport Mode",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
        ],
      },
      {
        label: "F4 6 Speed DCT",
        value: "f4DCT",
        specs: {
          power: 192,
          top_speed: 209,
          acceleration_time: 5.8,
        },
        price: 39520,
        benefits: [
          "Advanced Driver Assistance System",
          "Sport Mode",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 6 Speed Dual Clutch Transmission",
          "Quicker acceleration",
        ],
      },
      {
        label: "F6 6 Speed MT",
        value: "F6MT",
        specs: {
          power: 243,
          top_speed: 270,
          acceleration_time: 5.4,
        },
        price: 42390,
        benefits: [
          "Advanced Driver Assistance System",
          "Sport Mode",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
        ],
      },
      {
        label: "F6 6 Speed DCT",
        value: "F6DCT",
        specs: {
          power: 243,
          top_speed: 270,
          acceleration_time: 5.2,
        },
        price: 51870,
        benefits: [
          "Advanced Driver Assistance System",
          "Sport Mode",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 6 Speed Dual Clutch Transmission",
          "Quicker acceleration",
        ],
      },
    ],
    interiorColors: interiorColors,
  },
  {
    key: "eccf",
    name: "eCCF",
    colors: eccfcolors,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_eccf_wheel_1.png`,
        label: "Procyon EA Wheels",
        value: "wheel_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_eccf_wheel_2.png`,
        label: "Procyon DA Wheels",
        value: "wheel_2",
        price: 5500,
      },
    ],
    wheelsize: [
        {
          src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_15.png`,
          label: '15" rims',
          value: "15",
          price: 0,
        },
        {
          src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_16.png`,
          label: '16" rims',
          value: "16",
          price: 400,
        },
        {
          src: `${process.env.PUBLIC_URL}/wheels/model_ccf/model_ccf_wheel_17.png`,
          label: '17" rims',
          value: "17",
          price: 600,
        },
      ],
    types: [
      {
        label: "Base Motor",
        value: "Base",
        specs: {
          power: 202,
          top_speed: 168,
          acceleration_time: 5.9,
        },
        price: 37280,
        benefits: [
          "Advanced Driver Assistance System",
          "Sport Mode",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Quiet and smooth acceleration",
        ],
      },
      {
        label: "Performance Motor",
        value: "Performance",
        specs: {
          power: 278,
          top_speed: 195,
          acceleration_time: 4.1,
        },
        price: 42930,
        benefits: [
          "Advanced Driver Assistance System",
          "Sport Mode",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 6 Speed Dual Clutch Transmission",
          "Quiet and smooth acceleration",
        ],
      },
    ],
    interiorColors: interiorColors,
  },
];

export const initialConfig = {
  ccf: {
    car_type: "f4MT",
    model: "ccf",
    color: "white",
    wheelsize: "16",
    wheels: "wheel_1",
    interior_color: "abyssblack",
  },
  eccf: {
    car_type: "Base",
    model: "eccf",
    color: "white",
    wheelsize: "16",
    wheels: "wheel_1",
    interior_color: "arcticwhite",
  },

};