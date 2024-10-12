export const colors = [
  { label: "Cepheus Rose Neo", value: "roseneo", price: 0 },
  { label: "Mars Haze", value: "marshaze", price: 1500 },
  { label: "Gamma Crucis Mica", value: "crucismica", price: 1000 },
  { label: "Andromeda", value: "andromeda", price: 1500 },
  { label: "Callisto Pearlecent", value: "callisto", price: 1500 },
  { label: "Neptune Blue Metallic", value: "neptuneblue", price: 1500 },
  { label: "Dark Matter", value: "darkmatter", price: 1500 },
  { label: "Sirius Grey", value: "siriusgrey", price: 1500 },
  { label: "Supernova", value: "supernova", price: 1500 },
  { label: "Pluto Pearl", value: "plutopearl", price: 2500 },
];
export const colorsfirstedition = [
  { label: "Pluto Pearl", value: "plutopearl", price: 0 },
  { label: "Andromeda", value: "andromeda", price: 1500 },
  { label: "Dark Matter", value: "darkmatter", price: 1500 },
];

export const interiorColors = [
  { label: "Dark Matter", value: "darkmatter", price: 0 },
  { label: "Dark Matter with Indi Brown Accents", value: "darkmatter_indibrown", price: 1000 },
  { label: "Magellanic Blue", value: "magellanicblue", price: 1500 },
  { label: "Orion Ruby", value: "orionruby", price: 1500 },
  { label: "Venusian Beige", value: "venusianbeige", price: 1500 },
];

export const interiorColorsFirst = [
  { label: "Lunar Surface Europastone", value: "lunarsurface_europastone", price: 0 },
];

export const interiorLayouts = [
  { label: "Five seat interior", value: "five_seat", price: 0 },
  { label: "Six seat interior", value: "six_seat", price: 6500 },
  { label: "Seven seat interior", value: "seven_seat", price: 3500 },
];

export const models = [
  {
    key: "vela",
    name: "Vela",
    colors: colors,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_wheel_1.png`,
        label: "α Vela Wheels",
        value: "wheel_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_wheel_2.png`,
        label: "β Vela Wheels",
        value: "wheel_2",
        price: 4500,
      },
      // {
      //   src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_wheel_3.png`,
      //   label: "γ Vela Wheels",
      //   value: "wheel_3",
      //   price: 5000,
      // },
    ],
    wheelcolor: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_1.png`,
        label: "Diamond Cut Rim Color",
        value: "color_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_2.png`,
        label: "Silver Wheel Rim Color",
        value: "color_2",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_3.png`,
        label: "Satin Black Rim Color",
        value: "color_3",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_4.png`,
        label: "Satin Gold Rim Color",
        value: "color_4",
        price: 0,
      },
    ],
    types: [
      {
        label: "S220 F6",
        value: "S220",
        specs: {
          power: 236,
          top_speed: 209,
          acceleration_time: 5.4,
        },
        price: 51870,
        benefits: [
          "Advanced Driver Assistance System",
          "7 Speed DCT",
          "Premium sound system",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 7 Speed Dual Clutch Transmission",
        ],
      },
      {
        label: "S270 F6",
        value: "S270",
        specs: {
          power: 270,
          top_speed: 279,
          acceleration_time: 4.9,
        },
        price: 55230,
        benefits: [
          "Advanced Driver Assistance System",
          "7 Speed DCT",
          "Premium sound system",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 7 Speed Dual Clutch Transmission",
          "Quicker acceleration",
          "Higher top speed",
        ],
      },
    ],
    interiorColors: interiorColors,
  },
  {
    key: "velarf",
    name: "Vela Retractable Fastback",
    colors: colors,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_wheel_1.png`,
        label: "α Vela Wheels",
        value: "wheel_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_wheel_2.png`,
        label: "β Vela Wheels",
        value: "wheel_2",
        price: 4500,
      },
    ],
    wheelcolor: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_1.png`,
        label: "Diamond Cut Rim Color",
        value: "color_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_2.png`,
        label: "Silver Wheel Rim Color",
        value: "color_2",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_3.png`,
        label: "Satin Black Rim Color",
        value: "color_3",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_4.png`,
        label: "Satin Gold Rim Color",
        value: "color_4",
        price: 0,
      },
    ],
    types: [
      {
        label: "S220 F6",
        value: "S220",
        specs: {
          power: 236,
          top_speed: 209,
          acceleration_time: 5.0,
        },
        price: 51870,
        benefits: [
          "Advanced Driver Assistance System",
          "7 Speed DCT",
          "Premium sound system",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 7 Speed Dual Clutch Transmission",
        ],
      },
      {
        label: "S270 F6",
        value: "S270",
        specs: {
          power: 270,
          top_speed: 283,
          acceleration_time: 5.0,
        },
        price: 55230,
        benefits: [
          "Advanced Driver Assistance System",
          "7 Speed DCT",
          "Premium sound system",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 7 Speed Dual Clutch Transmission",
          "Higher top speed",
        ],
      },
    ],
    interiorColors: interiorColors,
  },
  {
    key: "velafe",
    name: "Vela First Edition (Photos WIP)",
    colors: colorsfirstedition,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_wheel_3.png`,
        label: "γ Vela First Edition Wheels",
        value: "wheel_3",
        price: 0,
      },
    ],
    wheelcolor: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_1.png`,
        label: "Diamond Cut Rim Color",
        value: "color_1",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_2.png`,
        label: "Silver Wheel Rim Color",
        value: "color_2",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_3.png`,
        label: "Satin Black Rim Color",
        value: "color_3",
        price: 0,
      },
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_vela/model_vela_color_4.png`,
        label: "Satin Gold Rim Color",
        value: "color_4",
        price: 0,
      },
    ],
    types: [
      {
        label: "S270 F6 First Edition",
        value: "S270",
        specs: {
          power: 270,
          top_speed: 283,
          acceleration_time: 5.0,
        },
        price: 59730,
        benefits: [
          "Advanced Driver Assistance System",
          "7 Speed DCT",
          "Premium sound system",
          "Selecta Sport Plus 2R Tires",
          "Keyless Entry  & Keyless Start",
          "Smooth 7 Speed Dual Clutch Transmission",
          "Higher top speed",
        ],
      },
    ],
    interiorColors: interiorColorsFirst,
  },
];

export const initialConfig = {
  vela: {
    car_type: "S220",
    model: "vela",
    modelName: "Vela",
    color: "roseneo",
    wheelsize: "16",
    wheels: "wheel_1",
    wheelcolor: "color_1",
    interior_color: "darkmatter",
  },
  velarf: {
    car_type: "S220",
    model: "velarf",
    modelName: "Vela RF",
    color: "roseneo",
    wheelsize: "16",
    wheels: "wheel_1",
    wheelcolor: "color_1",
    interior_color: "darkmatter",
  },
  velafe: {
    car_type: "S270",
    model: "velafe",
    modelName: "Vela First Editon",
    color: "plutopearl",
    wheelsize: "17",
    wheelcolor: "color_1",
    wheels: "wheel_3",
    interior_color: "lunarsurface_europastone",
  },
};
