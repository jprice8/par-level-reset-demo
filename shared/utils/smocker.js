import { getISOWeek } from "date-fns"

const date = new Date()
const lastWeekNumber = getISOWeek(date) - 1

export const getWeekData = () => {
  const weekState = []

  const date = new Date()
  const isoWeekNumber = getISOWeek(date)
  for (let i = 0; i < isoWeekNumber; i++) {
    if (i === isoWeekNumber - 1) {
      weekState.push({
        weekNumber: i + 1,
        submissionStatus: "New",
      })
    } else if (i === isoWeekNumber - 2) {
      weekState.push({
        weekNumber: i + 1,
        submissionStatus: "Submitted",
      })
    } else {
      weekState.push({
        weekNumber: i + 1,
        submissionStatus: "Missed"
      })
    }
  }

  return weekState
}

export const getParData = () => {
  const parData = [
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
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: null,
        lastUpdated: null,
        week: null,
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
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: null,
        lastUpdated: null,
        week: null,
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
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: null,
        lastUpdated: null,
        week: null,
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
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: null,
        lastUpdated: null,
        week: null,
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
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: null,
        lastUpdated: null,
        week: null,
      },
    },

    {
      id: 6,
      description: "DEVICE, TISSUE REMOVAL",
      mfr: "ABBOTT",
      unitCost: 700.0,
      locationName: "SURGERY",
      locationId: "84",
      imms: "678912",
      mfrCat: "CAT6",
      uomConvFactor: "EA",
      uom: 1,
      currentParQty: 3,
      recommendedParQty: 2,
      qtyDelta: 1,
      extDelta: 700.0,
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: 3,
        lastUpdated: null,
        week: lastWeekNumber,
      },
    },

    {
      id: 7,
      description: "NEEDLE, TRANSSEPTAL NRG ELECTRO",
      mfr: "GE MEDICAL",
      unitCost: 600.0,
      locationName: "CATH LAB",
      locationId: "7",
      imms: "789123",
      mfrCat: "CAT7",
      uomConvFactor: "EA",
      uom: 1,
      currentParQty: 4,
      recommendedParQty: 3,
      qtyDelta: 1,
      extDelta: 600.0,
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: 4,
        lastUpdated: null,
        week: lastWeekNumber,
      },
    },

    {
      id: 8,
      description: "RELOAD, ENDOSCOPIC LINEAR",
      mfr: "MEDTRONIC",
      unitCost: 500.0,
      locationName: "SURGERY",
      locationId: "84",
      imms: "891234",
      mfrCat: "CAT8",
      uomConvFactor: "EA",
      uom: 1,
      currentParQty: 5,
      recommendedParQty: 4,
      qtyDelta: 1,
      extDelta: 500.0,
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: 3,
        lastUpdated: null,
        week: lastWeekNumber,
      },
    },

    {
      id: 9,
      description: "LOADING UNIT, LINEAR CUTTER 75MM",
      mfr: "STRYKER",
      unitCost: 400.0,
      locationName: "SURGERY",
      locationId: "84",
      imms: "912345",
      mfrCat: "CAT9",
      uomConvFactor: "EA",
      uom: 1,
      currentParQty: 3,
      recommendedParQty: 2,
      qtyDelta: 1,
      extDelta: 400.0,
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: 1,
        lastUpdated: null,
        week: lastWeekNumber,
      },
    },

    {
      id: 10,
      description: "TROCAR, BALLOON BLUNT TIP 12MM",
      mfr: "BECTON",
      unitCost: 300.0,
      locationName: "SURGERY",
      locationId: "84",
      imms: "112345",
      mfrCat: "CAT10",
      uomConvFactor: "EA",
      uom: 1,
      currentParQty: 4,
      recommendedParQty: 3,
      qtyDelta: 1,
      extDelta: 300.0,
      itemreset: {
        userFirstName: "Tony",
        userLastName: "Soprano",
        resetLevel: 3,
        lastUpdated: null,
        week: lastWeekNumber,
      },
    },
  ]

  return parData
}
