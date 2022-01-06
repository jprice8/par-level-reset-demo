import { getISOWeek, getYear, subWeeks } from "date-fns"
import { getSubmissionDates } from "./dateTimeHelper"

const submissionDates = getSubmissionDates()
const date = new Date(submissionDates['date5'])
const helperDateOne = subWeeks(date, 1)
const helperDateTwo = subWeeks(date, 2)
const helperDateThree = subWeeks(date, 3)
const dateOneWeekAgoToday = subWeeks(date, 1).toISOString()
const dateTwoWeeksAgoToday = subWeeks(date, 2).toISOString()
const dateThreeWeeksAgoToday = subWeeks(date, 3).toISOString()
const weekNumberOneWeekAgo = getISOWeek(helperDateOne)
const weekNumberTwoWeeksAgo = getISOWeek(helperDateTwo)
const weekNumberThreeWeeksAgo = getISOWeek(helperDateThree)
const yearOneWeekAgoToday = getYear(helperDateOne)
const yearTwoWeeksAgoToday = getYear(helperDateTwo)
const yearThreeWeeksAgoToday = getYear(helperDateThree)

// export const getWeekData = () => {
//   const weekState = []

//   const date = new Date()
//   const isoWeekNumber = getISOWeek(date)
//   for (let i = 0; i < isoWeekNumber; i++) {
//     if (i === isoWeekNumber - 1) {
//       weekState.push({
//         weekNumber: i + 1,
//         submissionStatus: "New",
//       })
//     } else if (i === isoWeekNumber - 2 | i === isoWeekNumber - 3 | i === isoWeekNumber - 4) {
//       weekState.push({
//         weekNumber: i + 1,
//         submissionStatus: "Submitted",
//       })
//     } else {
//       weekState.push({
//         weekNumber: i + 1,
//         submissionStatus: "Missed",
//       })
//     }
//   }

//   return weekState
// }

export const getWeekData = () => {
  const weekData = [
    {
      weekNumber: "1",
      submissionStatus: "Missed",
    },
    {
      weekNumber: "2",
      submissionStatus: "Submitted",
    },
    {
      weekNumber: "3",
      submissionStatus: "Submitted",
    },
    {
      weekNumber: "4",
      submissionStatus: "Submitted",
    },
    {
      weekNumber: "5",
      submissionStatus: "New",
    },
  ]

  return weekData
}



export const getParData = () => {
  const parData = [
      {
        id: 1,
        description: "INSTRUMENT, LIGASURE IMPCT OVL 13.5 CVD 36MM 18CML",
        mfr: "HALYARD",
        unitCost: 1472.41,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3225",
        imms: "299870",
        mfrCat: "CATAK",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 3,
        recommendedParQty: 2,
        qtyDelta: 1,
        extDelta: 1472.41,
        itemreset: {
          userFirstName: null,
          userLastName: null,
          resetLevel: null,
          lastUpdated: null,
          week: null,
          year: null,
        },
      },
    
      {
        id: 2,
        description: "SYSTEM, FIXATION LAPAROSCOPIC ABSORBABLE 30 SHOT",
        mfr: "PHILIPS",
        unitCost: 1474.50,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3365",
        imms: "357555",
        mfrCat: "CATAJ",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1474.50,
        itemreset: {
          userFirstName: null,
          userLastName: null,
          resetLevel: null,
          lastUpdated: null,
          week: null,
          year: null,
        },
      },
    
      {
        id: 3,
        description: "PATCH, HERNIA VENTRALEX ST 1.7 SM CIRCLE W/STRAP",
        mfr: "STRYKER ENDOSCOPY",
        unitCost: 1474.50,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "4110",
        imms: "357714",
        mfrCat: "CATAI",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 4,
        recommendedParQty: 3,
        qtyDelta: 1,
        extDelta: 1487.05,
        itemreset: {
          userFirstName: null,
          userLastName: null,
          resetLevel: null,
          lastUpdated: null,
          week: null,
          year: null,
        },
      },
    
      {
        id: 4,
        description: "SHEARS, HARMONIC HD FOCUS 1000I SHAFT 36CM",
        mfr: "ZOLL MED",
        unitCost: 1517.20,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3300",
        imms: "566524",
        mfrCat: "CATAD",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta:1,
        extDelta: 1517.20,
        itemreset: {
          userFirstName: null,
          userLastName: null,
          resetLevel: null,
          lastUpdated: null,
          week: null,
          year: null,
        },
      },
    
      {
        id: 5,
        description: "STAPLER, SUREFOAM 60MM FROM DA VINCI",
        mfr: "ETHICON, INC.",
        unitCost: 1530.00,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3225",
        imms: "586551",
        mfrCat: "CATX",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 4,
        recommendedParQty: 3,
        qtyDelta: 1,
        extDelta: 1530.00,
        itemreset: {
          userFirstName: null,
          userLastName: null,
          resetLevel: null,
          lastUpdated: null,
          week: null,
          year: null,
        },
      },
    
      {
        id: 6,
        description: "FORCEP, CUTTING HALO BIPOLAR 5MM X 33CM STRL",
        mfr: "ABBOTT",
        unitCost: 1532.62,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3110",
        imms: "350169",
        mfrCat: "CATW",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1532.62,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 1,
          lastUpdated: dateOneWeekAgoToday,
          week: weekNumberOneWeekAgo,
          year: yearOneWeekAgoToday,
        },
      },
    
      {
        id: 7,
        description: "PATCH, HERNIA VENTRALEX ST 2.5 MED CIRCLE W/STRAP",
        mfr: "JOHNSON & JOHNSON HEALTH",
        unitCost: 1557.75,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3300",
        imms: "357715",
        mfrCat: "CATV",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1557.75,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 1,
          lastUpdated: dateOneWeekAgoToday,
          week: weekNumberOneWeekAgo,
          year: yearOneWeekAgoToday,
        },
      },
    
      {
        id: 8,
        description: "PATCH, HERNIA VENTRALEX ST 3.2 LG CIRCLE W/STRAP",
        mfr: "JOHNSON & JOHNSON HEALTH",
        unitCost: 1586.47,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3300",
        imms: "357723",
        mfrCat: "CATS",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1586.47,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 1,
          lastUpdated: dateOneWeekAgoToday,
          week: weekNumberOneWeekAgo,
          year: yearOneWeekAgoToday,
        },
      },
    
      {
        id: 9,
        description: "SYSTEM, LAPAROSCOPIC GELPORT 100 & 120 W/RETRACT",
        mfr: "MEDTRONIC INC.",
        unitCost: 1650.00,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "4110",
        imms: "269127",
        mfrCat: "CATN",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1650.00,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 2,
          lastUpdated: dateOneWeekAgoToday,
          week: weekNumberOneWeekAgo,
          year: yearOneWeekAgoToday,
        },
      },
    
      {
        id: 10,
        description: "CATHETER, INTRAVASCULAR ULTRASOUND 5F .014X150CM",
        mfr: "BARD PERIPHERAL VASCULAR",
        unitCost: 1715.00,
        locationName: "CARDIAC CATH LAB",
        locationId: "7",
        departmentNo: "7111",
        expenseAccountNo: "3365",
        imms: "344559",
        mfrCat: "CATK",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1715.00,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 2,
          lastUpdated: dateOneWeekAgoToday,
          week: weekNumberOneWeekAgo,
          year: yearOneWeekAgoToday,
        },
      },
    
      {
        id: 11,
        description: "CATHETER, DIAGNOSTIC ISMUS W/AUTO ID",
        mfr: "PHILIPS",
        unitCost: 1716.50,
        locationName: "CARDIAC CATH LAB",
        locationId: "7",
        departmentNo: "7111",
        expenseAccountNo: "3365",
        imms: "351925",
        mfrCat: "CATJ",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1716.50,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 1,
          lastUpdated: dateTwoWeeksAgoToday,
          week: weekNumberTwoWeeksAgo,
          year: yearTwoWeeksAgoToday,
        },
      },
    
      {
        id: 12,
        description: "DEVICE, TISSUE REMOVAL MYOSURE REACH 3MM OD X 32CM",
        mfr: "COVIDIEN",
        unitCost: 1928.33,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3310",
        imms: "562883",
        mfrCat: "CATG",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 3,
        recommendedParQty: 2,
        qtyDelta: 1,
        extDelta: 1928.33,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 2,
          lastUpdated: dateTwoWeeksAgoToday,
          week: weekNumberTwoWeeksAgo,
          year: yearTwoWeeksAgoToday,
        },
      },
    
      {
        id: 13,
        description: "INTRODUCER, SHEATH STEERABLE VIZIGO CRVD 8.5F MED",
        mfr: "NEVRO",
        unitCost: 1980.00,
        locationName: "CARDIAC CATH LAB",
        locationId: "7",
        departmentNo: "7111",
        expenseAccountNo: "3300",
        imms: "588411",
        mfrCat: "CATF",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 1980.00,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 1,
          lastUpdated: dateTwoWeeksAgoToday,
          week: weekNumberTwoWeeksAgo,
          year: yearTwoWeeksAgoToday,
        },
      },
    
      {
        id: 14,
        description: "KIT, DEVICE NOVASURE ENDOMETRIAL ABLATN BLUE HNDL",
        mfr: "HOLOGIC",
        unitCost: 2050.47,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3225",
        imms: "515782",
        mfrCat: "CATE",
        uomConvFactor: 1,
        uom: "KT",
        currentParQty: 2,
        recommendedParQty: 1,
        qtyDelta: 1,
        extDelta: 2050.47,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 2,
          lastUpdated: dateTwoWeeksAgoToday,
          week: weekNumberTwoWeeksAgo,
          year: yearTwoWeeksAgoToday,
        },
      },
    
      {
        id: 15,
        description: "SEALER, LAPAROSCOPIC BLUNT HAND OR FOOT 5MM X 37CM",
        mfr: "MEDLINE",
        unitCost: 1258.67,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3225",
        imms: "480952",
        mfrCat: "CATAC",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 3,
        recommendedParQty: 1,
        qtyDelta: 2,
        extDelta: 2517.34,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 3,
          lastUpdated: dateTwoWeeksAgoToday,
          week: weekNumberTwoWeeksAgo,
          year: yearTwoWeeksAgoToday,
        },
      },
    
      {
        id: 16,
        description: "CEMENT, BONE FULL DOSE SIMPLEX P W/TOBRAMYCIN",
        mfr: "SMITH & NEPHEW RICHARDS",
        unitCost: 1258.67,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3110",
        imms: "480952",
        mfrCat: "CATAC",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 3,
        recommendedParQty: 1,
        qtyDelta: 2,
        extDelta: 2517.34,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 2,
          lastUpdated: dateThreeWeeksAgoToday,
          week: weekNumberThreeWeeksAgo,
          year: yearThreeWeeksAgoToday,
        },
      },
    
      {
        id: 17,
        description: "CATHETER, PALINDROME W/2 SLOTS 23CM X 40CM",
        mfr: "COVIDIEN",
        unitCost: 1262.31,
        locationName: "CARDIAC CATH LAB",
        locationId: "7",
        departmentNo: "7111",
        expenseAccountNo: "3365",
        imms: "285439",
        mfrCat: "CATZ",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 3,
        recommendedParQty: 1,
        qtyDelta: 2,
        extDelta: 2524.61,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 2,
          lastUpdated: dateThreeWeeksAgoToday,
          week: weekNumberThreeWeeksAgo,
          year: yearThreeWeeksAgoToday,
        },
      },
    
      {
        id: 18,
        description: "CATHETER, DIALYSIS PALINDROME KIT 55CM 72CM",
        mfr: "PHILIPS",
        unitCost: 1262.31,
        locationName: "CARDIAC CATH LAB",
        locationId: "7",
        departmentNo: "7111",
        expenseAccountNo: "3365",
        imms: "296783",
        mfrCat: "CATAA",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 3,
        recommendedParQty: 1,
        qtyDelta: 2,
        extDelta: 2524.61,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 2,
          lastUpdated: dateThreeWeeksAgoToday,
          week: weekNumberThreeWeeksAgo,
          year: yearThreeWeeksAgoToday,
        },
      },
    
      {
        id: 19,
        description: "CATHETER, ELECTRODE DEFLCT HEX D-CV RG 002 REDL 6F",
        mfr: "STRYKER CARDIAC",
        unitCost: 1264.12,
        locationName: "CARDIAC CATH LAB",
        locationId: "7",
        departmentNo: "7111",
        expenseAccountNo: "3365",
        imms: "365380",
        mfrCat: "CATY",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 3,
        recommendedParQty: 1,
        qtyDelta: 2,
        extDelta: 2528.23,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 3,
          lastUpdated: dateThreeWeeksAgoToday,
          week: weekNumberThreeWeeksAgo,
          year: yearThreeWeeksAgoToday,
        },
      },
    
      {
        id: 20,
        description: "INSTRUMENT, LIGASURE SEALER/DIVIDER SMALL JAW",
        mfr: "ARTHREX INC.",
        unitCost: 1299.63,
        locationName: "SURGERY PAR/STOREROOM",
        locationId: "84",
        departmentNo: "7021",
        expenseAccountNo: "3310",
        imms: "356038",
        mfrCat: "CATR",
        uomConvFactor: 1,
        uom: "EA",
        currentParQty: 4,
        recommendedParQty: 2,
        qtyDelta: 2,
        extDelta: 2599.25,
        itemreset: {
          userFirstName: "John",
          userLastName: "Smith",
          resetLevel: 4,
          lastUpdated: dateThreeWeeksAgoToday,
          week: weekNumberThreeWeeksAgo,
          year: yearThreeWeeksAgoToday,
        },
      },
    ]

  return parData
}
