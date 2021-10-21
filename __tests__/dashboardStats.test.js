import React from "react";
import { calcExtReduction, calcParsReset } from "../shared/utils/dashboardStatsHelper";

const initialState = [
  {
    id: 1,
    description: "CATHETER, ABLATION BIL T/C",
    mfr: "ABBOTT",
    unitCost: 3800.0,
    locationName: "CATH LAB",
    locationId: "7",
    imms: "123456",
    mfrCat: "CAT123",
    uomConvFactor: "EA",
    uom: 1,
    currentParQty: 3,
    recommendedParQty: 2,
    qtyDelta: 1,
    extDelta: 3800.0,
    multiplesList: [3, 2, 1],
    itemreset: {
      userFirstName: 'Tony',
      userLastName: 'Soprano',
      resetLevel: 3,
      lastUpdated: null,
      week: null
    },
  },
  {
    id: 2,
    description: "CATHETER, ULTRA VIVID SOUNDSTAR 8X90CM",
    mfr: "MOLNLYCKE",
    unitCost: 2000.0,
    locationName: "CATH LAB",
    locationId: "7",
    imms: "234567",
    mfrCat: "CAT234",
    uomConvFactor: "EA",
    uom: 1,
    currentParQty: 3,
    recommendedParQty: 2,
    qtyDelta: 1,
    extDelta: 2000.0,
    multiplesList: [3, 2, 1],
    itemreset: {
      userFirstName: 'Tony',
      userLastName: 'Soprano',
      resetLevel: 2,
      lastUpdated: null,
      week: null
    },
  },
  {
    id: 3,
    description: "INSTRUMENT ARM FOR DA VINCI SURGICAL",
    mfr: "COVIDIEN",
    unitCost: 500.0,
    locationName: "SURGERY",
    locationId: "84",
    imms: "345678",
    mfrCat: "CAT456",
    uomConvFactor: "EA",
    uom: 1,
    currentParQty: 6,
    recommendedParQty: 3,
    qtyDelta: 3,
    extDelta: 1500.0,
    multiplesList: [6, 5, 4, 3, 2, 1],
    itemreset: {
      userFirstName: 'Tony',
      userLastName: 'Soprano',
      resetLevel: 5,
      lastUpdated: null,
      week: null
    },
  },
  {
    id: 4,
    description: "INTRODUCER, SHEATH STEERABLE 8.5MD",
    mfr: "STRYKER",
    unitCost: 900.0,
    locationName: "SURGERY",
    locationId: "84",
    imms: "456789",
    mfrCat: "CAT567",
    uomConvFactor: "EA",
    uom: 1,
    currentParQty: 2,
    recommendedParQty: 1,
    qtyDelta: 1,
    extDelta: 900.0,
    multiplesList: [2, 1],
    itemreset: {
      userFirstName: 'Tony',
      userLastName: 'Soprano',
      resetLevel: 2,
      lastUpdated: null,
      week: null
    },
  },
  {
    id: 5,
    description: "MESH, HERNIA POLYESTER 15X9CM",
    mfr: "GE MEDICAL",
    unitCost: 400.0,
    locationName: "SURGERY",
    locationId: "84",
    imms: "567891",
    mfrCat: "CAT678",
    uomConvFactor: "EA",
    uom: 1,
    currentParQty: 4,
    recommendedParQty: 2,
    qtyDelta: 2,
    extDelta: 800.0,
    multiplesList: [4, 3, 2, 1],
    itemreset: {
      userFirstName: 'Tony',
      userLastName: 'Soprano',
      resetLevel: 3,
      lastUpdated: null,
      week: null
    },
  },
]

test('Calculate the total extended cost reduction for a user.', () => {
  // Three pars were reduced for a delta of $2900
  expect(calcExtReduction(initialState)).toEqual(2900)
})

test('Calculate the number of pars reset for the user.', () => {
  // Three pars were reduced
  expect(calcParsReset(initialState)).toEqual(3)
})