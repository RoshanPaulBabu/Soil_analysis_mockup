export interface SoilMetric {
  name: string;
  value: number;
  unit: string;
  status: 'Low' | 'Optimal' | 'High';
  range: { min: number; max: number; optimal: { min: number; max: number } };
}

export interface OcrData {
  fileName: string;
  detectedLab: string;
  sampleId: string;
  dateCollected: string;
  location: string;
  confidence: number;
  metrics: SoilMetric[];
  nextSteps: string[];
}

export interface DashboardSample {
  id: string;
  region: string;
  pH: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  status: 'Low' | 'Optimal' | 'High';
  date: string;
}

export const MOCK_OCR_DATA: OcrData = {
  fileName: "soil_sample_001.pdf",
  detectedLab: "AgriLab Solutions",
  sampleId: "SMP-2024-001234",
  dateCollected: "2024-08-15",
  location: "Lat: 13.7563, Lon: 100.5018 (Bangkok Region)",
  confidence: 94.7,
  metrics: [
    {
      name: "pH",
      value: 6.2,
      unit: "",
      status: "Optimal",
      range: { min: 0, max: 14, optimal: { min: 6.0, max: 7.5 } }
    },
    {
      name: "Electrical Conductivity (EC)",
      value: 1.8,
      unit: "dS/m",
      status: "Optimal",
      range: { min: 0, max: 10, optimal: { min: 1.0, max: 3.0 } }
    },
    {
      name: "Moisture Content",
      value: 25.4,
      unit: "%",
      status: "Optimal",
      range: { min: 0, max: 100, optimal: { min: 20, max: 35 } }
    },
    {
      name: "Organic Carbon (OC)",
      value: 2.1,
      unit: "%",
      status: "Low",
      range: { min: 0, max: 10, optimal: { min: 2.5, max: 5.0 } }
    },
    {
      name: "Nitrogen (N)",
      value: 180,
      unit: "kg/ha",
      status: "Optimal",
      range: { min: 0, max: 500, optimal: { min: 150, max: 250 } }
    },
    {
      name: "Phosphorus (P)",
      value: 12,
      unit: "ppm",
      status: "Low",
      range: { min: 0, max: 50, optimal: { min: 15, max: 30 } }
    },
    {
      name: "Potassium (K)",
      value: 420,
      unit: "ppm",
      status: "High",
      range: { min: 0, max: 600, optimal: { min: 200, max: 400 } }
    },
    {
      name: "Sulfur (S)",
      value: 8.5,
      unit: "ppm",
      status: "Optimal",
      range: { min: 0, max: 20, optimal: { min: 8, max: 15 } }
    },
    {
      name: "Zinc (Zn)",
      value: 1.2,
      unit: "ppm",
      status: "Low",
      range: { min: 0, max: 5, optimal: { min: 1.5, max: 3.0 } }
    },
    {
      name: "Iron (Fe)",
      value: 45,
      unit: "ppm",
      status: "Optimal",
      range: { min: 0, max: 100, optimal: { min: 20, max: 60 } }
    }
  ],
  nextSteps: [
    "Consider organic matter supplementation to increase OC levels",
    "Apply phosphorus fertilizer to address low P levels",
    "Monitor zinc levels and consider micronutrient application",
    "Maintain current pH through lime management",
    "Reduce potassium inputs to prevent over-accumulation"
  ]
};

export const MOCK_DASHBOARD_SAMPLES: DashboardSample[] = [
  {
    id: "SMP-2024-001234",
    region: "Bangkok",
    pH: 6.2,
    nitrogen: 180,
    phosphorus: 12,
    potassium: 420,
    status: "Optimal",
    date: "2024-08-15"
  },
  {
    id: "SMP-2024-001235",
    region: "Chiang Mai",
    pH: 5.8,
    nitrogen: 120,
    phosphorus: 18,
    potassium: 280,
    status: "Low",
    date: "2024-08-14"
  },
  {
    id: "SMP-2024-001236",
    region: "Phuket",
    pH: 7.1,
    nitrogen: 220,
    phosphorus: 25,
    potassium: 380,
    status: "High",
    date: "2024-08-13"
  },
  {
    id: "SMP-2024-001237",
    region: "Bangkok",
    pH: 6.5,
    nitrogen: 195,
    phosphorus: 22,
    potassium: 350,
    status: "Optimal",
    date: "2024-08-12"
  },
  {
    id: "SMP-2024-001238",
    region: "Chiang Mai",
    pH: 6.0,
    nitrogen: 165,
    phosphorus: 14,
    potassium: 310,
    status: "Optimal",
    date: "2024-08-11"
  }
];

export const MOCK_TREND_DATA = [
  { month: 'Jan', nitrogen: 165, phosphorus: 18, potassium: 320, pH: 6.1 },
  { month: 'Feb', nitrogen: 172, phosphorus: 19, potassium: 335, pH: 6.2 },
  { month: 'Mar', nitrogen: 168, phosphorus: 17, potassium: 345, pH: 6.0 },
  { month: 'Apr', nitrogen: 180, phosphorus: 20, potassium: 360, pH: 6.3 },
  { month: 'May', nitrogen: 185, phosphorus: 21, potassium: 375, pH: 6.4 },
  { month: 'Jun', nitrogen: 190, phosphorus: 19, potassium: 380, pH: 6.2 },
];

export const MOCK_RADAR_DATA = [
  { subject: 'pH', A: 6.2, B: 6.5, fullMark: 7.5 },
  { subject: 'N', A: 180, B: 200, fullMark: 250 },
  { subject: 'P', A: 12, B: 20, fullMark: 30 },
  { subject: 'K', A: 420, B: 350, fullMark: 400 },
  { subject: 'OC', A: 2.1, B: 3.0, fullMark: 5.0 },
  { subject: 'EC', A: 1.8, B: 2.0, fullMark: 3.0 },
];

export const MOCK_KPI_DATA = {
  averagePh: 6.3,
  organicCarbon: 2.4,
  optimalSamples: 68,
  alerts: 3
};
