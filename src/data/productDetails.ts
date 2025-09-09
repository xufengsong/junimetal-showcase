export const productDetails : Record<string, any> = {
    "304-304h": {
        name: "304/304H",
        category: "Stainless Steels",
        description: "304/304H is the most widely used austenitic stainless steel. It provides excellent corrosion resistance, formability, and weldability. The 304H variant offers higher carbon content for improved high-temperature strength.",
        applications: ["Food processing equipment", "Chemical processing", "Architectural applications", "Kitchen equipment", "Heat exchangers"],
        chemicalComposition: {
          C: "0.08 max (304) / 0.04-0.10 (304H)",
          Mn: "2.00 max",
          P: "0.045 max",
          S: "0.030 max",
          Si: "0.75 max",
          Cr: "18.0-20.0",
          Ni: "8.0-10.5",
          N: "0.10 max"
        },
        standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASME SA312", "ASME SA213"],
        forms: ["Seamless Pipe", "Welded Pipe", "Seamless Tube", "Welded Tube", "Fittings", "Flanges"],
        sizes: "1/8\" to 24\" NPS for pipes, 1/8\" to 8\" OD for tubes"
    },
    "310s-310h": {
        name: "310S/310H",
        category: "Stainless Steels", 
        description: "310S/310H is a high-temperature resistant austenitic stainless steel with excellent oxidation resistance up to 2100°F (1150°C). The low carbon 310S provides better corrosion resistance while 310H offers superior high-temperature strength.",
        applications: ["Furnace parts", "Heat exchangers", "Kilns", "Gas turbine components", "Petrochemical processing"],
        chemicalComposition: {
            C: "0.08 max (310S) / 0.04-0.10 (310H)",
            Mn: "2.00 max",
            P: "0.045 max", 
            S: "0.030 max",
            Si: "1.50 max",
            Cr: "24.0-26.0",
            Ni: "19.0-22.0",
            N: "0.25 max"
        },
        standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASME SA312", "ASME SA213"],
        forms: ["Seamless Pipe", "Welded Pipe", "Seamless Tube", "Welded Tube", "Fittings", "Flanges"],
        sizes: "1/8\" to 12\" NPS for pipes, 1/8\" to 6\" OD for tubes"
    },
    "inconel-625": {
        name: "Inconel® 625",
        category: "Nickel Alloys",
        description: "Inconel® 625 is a nickel-chromium-molybdenum alloy with excellent fatigue strength and oxidation resistance up to 1800°F (980°C). It offers outstanding resistance to a wide range of corrosive environments.",
        applications: ["Aerospace components", "Chemical processing", "Marine applications", "Nuclear reactors", "Gas turbine engines"],
        chemicalComposition: {
            C: "0.10 max",
            Mn: "0.50 max",
            P: "0.015 max",
            S: "0.015 max", 
            Si: "0.50 max",
            Cr: "20.0-23.0",
            Ni: "58.0 min",
            Mo: "8.0-10.0",
            Nb: "3.15-4.15",
            Fe: "5.0 max"
        },
        standards: ["ASTM B444", "ASTM B446", "ASTM B564", "ASME SB444", "ASME SB446"],
        forms: ["Seamless Pipe", "Welded Pipe", "Seamless Tube", "Welded Tube", "Fittings", "Flanges"],
        sizes: "1/8\" to 8\" NPS for pipes, 1/8\" to 4\" OD for tubes"
    }
}