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

export const interiorColors = [
  { label: "Dark Matter", value: "darkmatter", price: 0 },
  { label: "Dark Matter with Indi Brown Accents", value: "darkmatter_indibrown", price: 1000 },
  { label: "Magellanic Blue", value: "magellanicblue", price: 1500 },
  { label: "Orion Ruby", value: "orionruby", price: 1500 },
  { label: "Venusian Beige", value: "venusianbeige", price: 1500 },
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
    types: [
      {
        label: "F6 7 Speed DCT",
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
    types: [
      {
        label: "F6 7 Speed DCT",
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
];

export const initialConfig = {
  vela: {
    car_type: "F6DCT",
    model: "vela",
    modelName: "Vela",
    color: "roseneo",
    wheelsize: "16",
    wheels: "wheel_1",
    interior_color: "darkmatter",
  },
  velarf: {
    car_type: "F6DCT",
    model: "velarf",
    modelName: "Vela RF",
    color: "roseneo",
    wheelsize: "16",
    wheels: "wheel_1",
    interior_color: "darkmatter",
  },
};
