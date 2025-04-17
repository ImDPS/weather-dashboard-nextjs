// GeoJSON data for India and state boundaries
// Simplified for performance but detailed enough to be recognizable

// India country boundary
export const IndiaGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "India",
        type: "country"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [77.0, 8.0],   // Southwest - Kerala
          [72.5, 16.0],  // West - Goa
          [68.0, 23.0],  // Northwest - Gujarat
          [73.0, 32.0],  // North - Jammu
          [79.0, 35.0],  // North - Ladakh
          [88.0, 28.0],  // Northeast - Sikkim
          [92.0, 26.0],  // Northeast - Arunachal
          [94.0, 23.0],  // East - Manipur
          [90.0, 21.0],  // Southeast - Tripura
          [85.0, 18.0],  // East - Odisha
          [80.0, 13.0],  // Southeast - Tamil Nadu
          [76.0, 8.5],   // South - Kerala
          [77.0, 8.0]    // Close the polygon
        ]]
      }
    }
  ]
};

// State boundaries
export const StateGeoJSON = {
  type: "FeatureCollection",
  features: [
    // Chhattisgarh - more detailed for the focus area
    {
      type: "Feature",
      properties: {
        name: "Chhattisgarh",
        type: "state"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [80.2, 19.1],   // Southwest
          [80.6, 20.5],   // West
          [80.8, 21.4],   // Northwest
          [81.8, 22.8],   // North
          [83.1, 23.2],   // Northeast
          [84.2, 22.6],   // East
          [83.7, 20.3],   // Southeast
          [82.8, 18.7],   // South
          [81.0, 18.5],   // Southwest
          [80.2, 19.1]    // Close the polygon
        ]]
      }
    },
    // Maharashtra
    {
      type: "Feature",
      properties: {
        name: "Maharashtra",
        type: "state"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [72.8, 16.0],   // Southwest
          [70.8, 20.5],   // West
          [74.2, 22.0],   // Northwest
          [78.5, 22.1],   // North
          [80.5, 21.2],   // Northeast
          [80.2, 19.0],   // East
          [78.0, 18.0],   // Southeast
          [76.0, 16.5],   // South
          [73.5, 16.0],   // Southwest
          [72.8, 16.0]    // Close the polygon
        ]]
      }
    },
    // Madhya Pradesh
    {
      type: "Feature",
      properties: {
        name: "Madhya Pradesh",
        type: "state"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [74.2, 22.0],   // Southwest
          [74.5, 24.5],   // West
          [77.2, 26.2],   // Northwest
          [80.9, 26.8],   // North
          [84.5, 24.5],   // Northeast
          [82.3, 23.1],   // East
          [81.8, 22.0],   // Southeast
          [78.5, 21.8],   // South
          [76.0, 21.5],   // Southwest
          [74.2, 22.0]    // Close the polygon
        ]]
      }
    },
    // Odisha
    {
      type: "Feature",
      properties: {
        name: "Odisha",
        type: "state"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [82.5, 19.0],   // Southwest
          [83.5, 20.1],   // West
          [84.0, 22.8],   // Northwest
          [86.5, 22.5],   // North
          [87.5, 22.0],   // Northeast
          [87.0, 21.0],   // East
          [86.5, 19.5],   // Southeast
          [85.0, 18.2],   // South
          [84.0, 18.8],   // Southwest
          [82.5, 19.0]    // Close the polygon
        ]]
      }
    },
    // Telangana
    {
      type: "Feature",
      properties: {
        name: "Telangana",
        type: "state"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [77.5, 18.0],   // Southwest
          [77.8, 19.2],   // West
          [78.5, 20.0],   // Northwest
          [80.5, 19.8],   // North
          [81.0, 19.0],   // Northeast
          [80.0, 17.0],   // East
          [79.0, 16.5],   // Southeast
          [78.0, 17.0],   // South
          [77.5, 18.0]    // Close the polygon
        ]]
      }
    }
  ]
}; 