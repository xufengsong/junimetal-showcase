export const productDetails : Record<string, any> = {
    "304-304h": {
        name: "304/304H",
        category: "Stainless Steels",
        short_description: "General purpose austenitic stainless steel",
        description: "304/304H is the most widely used austenitic stainless steel. It provides excellent corrosion resistance, formability, and weldability. The 304H variant offers higher carbon content for improved high-temperature strength.",
        applications: ["Food processing equipment", "Chemical processing", "Architectural applications", "Kitchen equipment", "Heat exchangers"],
        chemicalComposition: {
          C: "0.08 max",
          Mn: "2.00 max",
          P: "0.045 max",
          S: "0.03 max",
          Si: "0.75 max",
          Cr: "18.0-20.0",
          Ni: "8.0-10.5",
          N: "0.10 max",
          Fe: "Balance"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 312"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-12\"",
                schedule_rating: "40s, 80s, S/120, 160s, XXH",
                standard: "ASTM/ASME 312"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "40s, 80s, S/160",
                standard: "ASTM/ASME 403"
            },
            {
                form: "Flanges",
                size: "½\"-12\"",
                schedule_rating: "150#, 300#, 600#",
                standard: "ASTM/ASME 182"
            },
            {
                form: "Pressure Fittings",
                size: "½\"-2\"",
                schedule_rating: "3000# THRD/SW",
                standard: "ASTM/ASME 182",
            }
        ]
    },
    "310s-310h": {
        name: "310S/310H",
        category: "Stainless Steels", 
        description: "310S/310H is a high-temperature resistant austenitic stainless steel with excellent oxidation resistance up to 2100°F (1150°C). The low carbon 310S provides better corrosion resistance while 310H offers superior high-temperature strength.",
        applications: ["Furnace parts", "Heat exchangers", "Kilns", "Gas turbine components", "Petrochemical processing"],
        chemicalComposition: {
            C: "0.08 max (310S) / 0.04-0.10 (310H)?",
            Mn: "2.00 max",
            P: "0.045 max", 
            S: "0.03 max",
            Si: "0.75 max",
            Cr: "24.0-26.0",
            Ni: "19.0-22.0",
            Mo: "0.75 max"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "8\"-12\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 312"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, S/160, XXH",
                standard: "ASTM/ASME 312"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 403"
            },
            {
                form: "Flanges",
                size: "½\"-8\"",
                schedule_rating: "150#, 300#",
                standard: "ASTM/ASME 182"
            },
            {
                form: "Pressure Fittings",
                size: "½\"-2\"",
                schedule_rating: "3000# THRD/SW",
                standard: "ASTM/ASME 182",
            }
        ]
    },
    "317l": {
        name: "317L",
        category: "Stainless Steels", 
        description: "317L is a molybdenum-bearing steel that offers a higher stress-to-rupture, creep, and tensile strength at elevated temperatures. 317L is a low carbon version of 317 and is non-magnetic in the annealed condition. 317L can often be found in pulp and paper plants, food processing plants, chemical and petrochemical processing equipment, and textile equipment.",
        applications: ["Furnace parts", "Heat exchangers", "Kilns", "Gas turbine components", "Petrochemical processing"],
        chemicalComposition: {
            C: "0.035 max",
            Mn: "2.00 max",
            P: "0.04 max", 
            S: "0.03 max",
            Si: "1.0 max",
            Cr: "18.0-20.0",
            Ni: "11.0-15.0",
            N: "0.25 max",
            Mo: "3.0-4.0"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "6\"-14\"",
                schedule_rating: "10s, 40s",
                standard: "ASTM/ASME 312"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s, S/160",
                standard: "ASTM/ASME 312"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 403"
            },
            {
                form: "Flanges",
                size: "½\"-12\"",
                schedule_rating: "150#, 300#",
                standard: "ASTM/ASME 182"
            },
            {
                form: "Pressure Fittings",
                size: "½\"-2\"",
                schedule_rating: "3000# THRD/SW",
                standard: "ASTM/ASME 182",
            }
        ]
    },
    "321-321h": {
        name: "321/321H",
        category: "Stainless Steels", 
        description: "321/321H is a titanium bearing steel not sensitive to intergranular corrosion after heating within the range of carbide precipitation. This stainless steel grade is often used in refineries as well as high temperature chemical processing, heat exchanger tubes and high temperature steam service.",
        applications: ["Furnace parts", "Heat exchangers", "Kilns", "Gas turbine components", "Petrochemical processing"],
        chemicalComposition: {
            C: "0.08 max",
            Mn: "2.00 max",
            P: "0.045 max", 
            S: "0.03 max",
            Si: "0.75 max",
            Cr: "17.0-19.0",
            Ni: "9.0-12.0",
            N: "0.1 max",
            Ti: "4 x C min. 0.60% max.",
            Fe: "Balance"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Seamless Pipe",
                size: "½\"-12\"",
                schedule_rating: "40s, 80s, 120, 160, XXH",
                standard: "ASTM/ASME 312"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "40s, 80s, 160",
                standard: "ASTM/ASME 403"
            },
            {
                form: "Flanges",
                size: "½\"-8\"",
                schedule_rating: "150#, 300#, 600#",
                standard: "ASTM/ASME 182"
            }
        ]
    },
    "347-347h": {
        name: "347/347H",
        category: "Stainless Steels", 
        description: "347/347H is an austenitic chromium steel containing columbium often used in refineries, high temperature chemical processing, and high temperature steam service. This columbium bearing steel not sensitive to intergranular corrosion after heating within the range of carbide precipitation but elevated properties may be achieved through cold reduction.",
        applications: ["Furnace parts", "Heat exchangers", "Kilns", "Gas turbine components", "Petrochemical processing"],
        chemicalComposition: {
            C: "0.08 max",
            Mn: "2.00 max",
            P: "0.045 max", 
            S: "0.03 max",
            Si: "0.75 max",
            Cr: "17.0-19.0",
            Ni: "9.0-13.0",
            Mo: "3.0-4.0",
            "Co + Ta": "8 x C min. 1.00 max.",
            Fe: "Balance"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Seamless Pipe",
                size: "6\"-12\"",
                schedule_rating: "40s, 80s, 120, 160, XXH",
                standard: "ASTM/ASME 312"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "40s, 80s, 160",
                standard: "ASTM/ASME 403"
            },
            {
                form: "Flanges",
                size: "½\"-8\"",
                schedule_rating: "150#, 300#, 600#",
                standard: "ASTM/ASME 182"
            }
        ]
    },
    "alloy-20": {
        name: "Alloy 20",
        unsNumber: "N08020",
        category: "Specialty Alloys",
        description: "A nickel-iron-chromium alloy with additions of molybdenum and copper. Alloy 20 has great resistance to pitting, general corrosion, and crevice corrosion in chemicals containing sulfuric, nitric, and phosphoric acids as well as chlorides. It also contains niobium for stabilization and is used for piping, tanks, pumps, valves, heat exchangers, and other process equipment.",
        applications: ["Aerospace components", "Chemical processing", "Marine applications", "Nuclear reactors", "Gas turbine engines"],
        chemicalComposition: {
            C: "0.07 max",
            Mn: "2.0 max",
            P: "0.045 max",
            S: "0.035 max", 
            Si: "1.0 max",
            Cr: "19.0-21.0",
            Cu: "3.0-4.0",
            "Nb + Ta": "8 x C - 1.0",
            Ni: "32.0-38.0",
            Nb: "1.0 max",
            Mo: "2.0-3.0",
            Fe: "Remainder"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "6\"-12\"",
                schedule_rating: "10s, 40s",
                standard: "ASTM/ASME 464"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160, XXH",
                standard: "ASTM/ASME 729"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s, S/160",
                standard: "ASTM/ASME 366"
            },
            {
                form: "Flanges",
                size: "½\"-12\"",
                schedule_rating: "150#, 300#, 600#",
                standard: "ASTM/ASME 462"
            },
            {
                form: "Pressure Fittings",
                size: "½\"-2\"",
                schedule_rating: "3000# THRD/SW",
                standard: "ASTM/ASME 462"
            }
        ]
    },
    "duplex-2205": {
        name: "Duplex 2205",
        category: "Specialty Alloys",
        description: "Duplex 2205 is a chromium molybdenum blend which combines properties of both ferritic and austenitic steels. Having both a high resistance to corrosion fatigue, corrosion cracking, and erosion, Duplex 2205 is used in oil and gas, desalination plants, and industries handling chlorides.",
        applications: ["Aerospace components", "Chemical processing", "Marine applications", "Nuclear reactors", "Gas turbine engines"],
        chemicalComposition: {
            C: "0.3 max",
            Mn: "2.0 max",
            P: "0.03 max",
            S: "0.02 max", 
            Si: "0.02 max",
            Cr: "21.0-23.0",
            Cu: "3.0-4.0",
            N: "0.08-0.2",
            Ni: "4.5-6.5",
            Mo: "2.5-3.5",
            Fe: "Balance"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "4\"-24\"",
                schedule_rating: "10s, 20s, 40s, 80s",
                standard: "ASTM/ASME 790"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160, XXH",
                standard: "ASTM/ASME 790"
            },
            {
                form: "B/W Fittings",
                size: "½\"-24\"",
                schedule_rating: "10s, 40s, 80s, 160",
                standard: "ASTM/ASME 815"
            },
            {
                form: "Flanges",
                size: "½\"-24\"",
                schedule_rating: "150#, 300#, 600#",
                standard: "ASTM/ASME F51, F60"
            },
            {
                form: "Pressure Fittings",
                size: "½\"-2\"",
                schedule_rating: "3000# THRD/SW",
                standard: "ASTM/ASME F51,F60",
            }
        ]
    },
    "hastelloy-c276": {
        name: "Hastelloy®C276",
        category: "Specialty Alloys",
        description: "Hastelloy® C276 is a nickel-molybdenum-chromium alloy with an addition of tungsten designed to have excellent corrosion resistance in a wide range of severe environments. The high nickel and molybdenum contents make the nickel steel alloy resistant to pitting and crevice corrosion in reducing environments while chromium conveys resistance to oxidizing media. This nickel alloy is widely used in the most severe environments such as chemical processing, pollution control, pulp and paper production, industrial and municipal waste treatment, and recovery of sour natural gas.",
        applications: ["Aerospace components", "Chemical processing", "Marine applications", "Nuclear reactors", "Gas turbine engines"],
        chemicalComposition: {
            C: "0.01 max",
            Mn: "1.0 max",
            P: "0.04 max",
            S: "0.03 max", 
            Si: "0.08 max",
            Cr: "14.5-16.5",
            Co: "2.5 max",
            Ni: "Remainder",
            Mo: "15.0-17.0",
            Fe: "4.0-7.0",
            W: "3.0-4.5",
            V: "0.35 max"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "6\"-12\"",
                schedule_rating: "10s, 40s",
                standard: "ASTM/ASME 619c/2"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160",
                standard: "ASTM/ASME 622"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 366"
            },
            {
                form: "Flanges",
                size: "½\"-12\"",
                schedule_rating: "150#, 300#",
                standard: "ASTM/ASME 564"
            },
            {
                form: "Pressure Fittings",
                size: "½\"-2\"",
                schedule_rating: "3000# THRD/SW",
                standard: "ASTM/ASME 564"
            }
        ]
    },
    "super-duplex-2507": {
        name: "Super Duplex 2507",
        category: "Specialty Alloys",
        description: "Super Duplex 2507 is a nickel-molybdenum-chromium alloy designed for applications demanding outstanding strength and corrosion resistance. The nitrogen, chromium, and high molybdenum content results in excellent resistance to crevice corrosion and chloride pitting. Super Duplex 2507 is often found in offshore platforms, heat exchangers, chemical processing, seawater equipment, and in the petrochemical industry.",
        applications: ["Aerospace components", "Chemical processing", "Marine applications", "Nuclear reactors", "Gas turbine engines"],
        chemicalComposition: {
            C: "0.03 max",
            P: "0.035 max",
            S: "0.02 max", 
            Cr: "24.0-26.0",
            Ni: "6.0-8.0",
            Mo: "3.0-5.0",
            Fe: "Balance",
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "6\"-24\"",
                schedule_rating: "10s, 40s",
                standard: "ASTM/ASME 790"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160",
                standard: "ASTM/ASME 790"
            },
            {
                form: "B/W Fittings",
                size: "½\"-24\"",
                schedule_rating: "10s, 40s, 80s, 160",
                standard: "ASTM/ASME 815"
            },
            {
                form: "Flanges",
                size: "½\"-24\"",
                schedule_rating: "150#, 300#",
                standard: "ASTM/ASME F53"
            }
        ]
    },
    "inconel-600": {
        name: "Inconel 600",
        unsNumber: "NO660",
        category: "Nickel Alloys",
        description: "A nickel-chromium alloy used in chemical and food processing, nuclear engineering, sparking electrodes, and furnace components. Inconel® 600 is created with a resistance to chloride-ion stress-corrosion cracking, caustic corrosion, corrosion by high-purity water, and good oxidation resistance at high temperatures.",
        applications: ["Chemical processing", "Food processing", "Nuclear engineering", "Sparking electrodes", "Furnace components"],
        chemicalComposition: {
            "Ni (+Co)": "72.0 min",
            "Cr": "14.0-17.0 max",
            "Fe": "6.0-10.0",
            "C": "0.15 max",
            "Si": "0.5 max",
            "S": "0.015 max",
            "Cu": "0.5 max"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "8\"-12\"",
                schedule_rating: "10s, 40s",
                standard: "ASTM/ASME 517"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160",
                standard: "ASTM/ASME 167"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 366"
            },
            {
                form: "Flanges",
                size: "½\"-12\"",
                schedule_rating: "150#, 300#",
                standard: "ASTM/ASME 564"
            }
        ]
    },
    "inconel-625": {
        name: "Inconel 625",
        unsNumber: "NO6625",
        category: "Nickel Alloys",
        description: "Used in aerospace and marine engineering, pollution-control equipment, chemical processing, and nuclear reactors, Inconel® 625 is especially resistant to pitting and crevice corrosion. A nickel-chromium-molybdenum alloy with an addition of niobium that works with the molybdenum to stiffen the alloys matrix providing high strength without a strengthening heat treatment.",
        applications: ["Aerospace", "Marine engineering", "Pollution-control equipment", "Chemical processing", "Nuclear reactors"],
        chemicalComposition: {
            Ni: "58.0 min",
            Cr: "20.0-23.0",
            Mo: "8.0-10.0",
            "Nb+Ta": "3.15-4.15",
            Fe: "5.0 max",
            Ti: "0.4 max",
            Al: "0.4 max",
            C: "0.1 max",
            Mn: "0.5 max",
            Si: "0.05 max",
            S: "0.015 max",
            P: "0.015 max"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160, XXH",
                standard: "ASTM/ASME 167"
            },
            {
                form: "B/W Fittings",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160",
                standard: "ASTM/ASME 366"
            },
            {
                form: "Flanges",
                size: "½\"-8\"",
                schedule_rating: "300#, 600#",
                standard: "ASTM/ASME 564"
            }
        ]
    },
    "incoloy-825": {
        name: "Incoloy 825",
        unsNumber: "N08825",
        category: "Nickel Alloys",
        description: "Incoloy® 825 has excellent resistance to both oxidizing and reducing acids, pitting and crevice corrosion, as well as stress-corrosion cracking. Incoloy® 825 is a nickel-iron-chromium alloy with additions of molybdenum and copper used for oil and gas well piping, chemical processing, nuclear fuel reprocessing, acid production, pollution-control equipment, and pickling equipment.",
        applications: ["Oil and gas well piping", "Chemical processing", "Nuclear fuel reprocessing", "Acid production", "Pollution-control equipment", "Pickling equipment"],
        chemicalComposition: {
            Ni: "38.0-46.0",
            Fe: "22.0 min",
            Cr: "19.5-23.5",
            Mo: "2.5-3.5",
            Cu: "1.5-3.0",
            Al: "0.02 max",
            Ti: "0.06-1.2",
            C: "0.05 max",
            Mn: "1.0 max",
            S: "0.03 max",
            Si: "0.5 max"
        },
        specifications: [
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "40s, 80s, 120, 160, XXH",
                standard: "ASTM/ASME 423"
            },
            {
                form: "B/W Fittings",
                size: "½\"-8\"",
                schedule_rating: "40s, 80s, 120, 160",
                standard: "ASTM/ASME 366"
            },
            {
                form: "Flanges",
                size: "½\"-8\"",
                schedule_rating: "150#, 300#",
                standard: "ASTM/ASME 564"
            }
        ]
    },
    "incoloy-800h-ht": {
        name: "Incoloy 800H/HT",
        unsNumber: "N08810/N08811",
        category: "Nickel Alloys",
        description: "Nickel-iron-chromium alloys with the same basic composition as INCOLOY® 800 but with much higher creep-rupture strength. The close control of the aluminum, titanium, and carbon contents in conjunction with a high-temperature anneal result in the higher strength. Incoloy® 800 H/HT is used in industrial furnaces, chemical and petrochemical processing, power plants for super-heater and re heater tubing, and heat-treating equipment.",
        applications: ["Industrial furnaces", "Chemical and petrochemical processing", "Power plants", "Heat-treating equipment"],
        chemicalComposition: {
            "800H": {
                "Ni": "30.0-35.0",
                "Fe": "39.5 min",
                "Cr": "19.0-23.0",
                "C": "0.05-0.1",
                "Al": "0.15-0.6",
                "Ti": "0.15-0.6",
                "Al+Ti": "0.3-1.2"
            },
            "800HT": {
                "Ni": "30.0-35.0",
                "Fe": "39.5 min",
                "Cr": "19.0-23.0",
                "C": "0.06-0.1",
                "Al": "0.25-0.6",
                "Ti": "0.25-0.6",
                "Al+Ti": "0.85-1.2"
            }
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "40s, 80s, S/160",
                standard: "ASTM/ASME 167"
            }
        ]
    },
    "nickel-200-201": {
        name: "Nickel 200/201",
        unsNumber: "N02200/N02201",
        category: "Nickel Alloys",
        description: "Commercially pure (99.6%) wrought nickel with good mechanical properties and resistance to a range of corrosive media. Nickel 200/201 has a lower carbon content to prevent embrittlement by intergranular carbon at temperatures over 600°F (315°C), making it particularly suitable for cold-formed items.",
        applications: ["Corrosive media handling", "Cold-formed items"],
        chemicalComposition: {
            "Ni (+Co)": "99.0 min",
            "Cu": "0.25 max",
            "Fe": "0.4 max",
            "C": "0.02 max",
            "Si": "0.35 max",
            "S": "0.01 max",
            "Mn": "0.35 max"
        },
        forms: ["Pipe", "Fittings", "Flanges"],
        specifications: [
            {
                form: "Welded Pipe",
                size: "10\"-12\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 175"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 161"
            },
            {
                form: "B/W Fittings",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s",
                standard: "ASTM/ASME 366"
            },
            {
                form: "Flanges",
                size: "½\"-8\"",
                schedule_rating: "150#, 300#",
                standard: "ASTM/ASME 564"
            }
        ]
    },
    "monel-400": {
        name: "Monel 400",
        unsNumber: "NO440",
        category: "Nickel Alloys",
        description: "Used for chemical and hydrocarbon processing equipment, marine engineering, valves, pump, shafts, and fittings. Monel® 400 is a nickel-copper alloy with excellent corrosion resistance and high strength in a range of media. Some media include: hydrofluoric acid, sulfuric acid, alkalies, and sea water.",
        applications: ["Chemical and hydrocarbon processing equipment", "Marine engineering", "Valves", "Pumps", "Shafts", "Fittings"],
        chemicalComposition: {
            "Ni (+Co)": "63.0 min",
            Cu: "28.0-34.0 max",
            Fe: "2.5 max",
            C: "0.03 max",
            Si: "0.5 max",
            S: "0.024 max",
            Mn: "2.0 max"
        },
        froms: ["Pipe", "Fittings", "Flanges"], 
        specifications: [
            {
                form: "Welded Pipe",
                size: "8\"-12\"",
                schedule_rating: "10s, 40s",
                standard: "ASTM/ASME 725"
            },
            {
                form: "Seamless Pipe",
                size: "½\"-8\"",
                schedule_rating: "10s, 40s, 80s, 160, XXH",
                standard: "ASTM/ASME 165"
            },
            {
                form: "B/W Fittings",
                size: "½\"-12\"",
                schedule_rating: "10s, 40s, 80s, 160",
                standard: "ASTM/ASME 366"
            },
            {
                form: "Flanges",
                size: "½\"-12\"",
                schedule_rating: "150#, 300#, 600#",
                standard: "ASTM/ASME 564"
            },
            {
                form: "Pressure Fittings",
                size: "½\"-2\"",
                schedule_rating: "3000# THRD/SW",
                standard: "ASTM/ASME 564"
            }
        ]
    }
}