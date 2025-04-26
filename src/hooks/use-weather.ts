import { Coordinates } from "@/api/types";
import { useQuery } from "@tanstack/react-query";

// export const useWeatherQuery = (coordinates: Coordinates | null) => {
//   useQuery({
//     queryKey: ["weather", coordinates ?? { lat: 0, lon: 0 }],
//   });
// };

// *KEY FACTORY APPRAOCH :- better approach for scalability, reusability, type safety etc...
export const WEATHER_KEYS = {
  weather: (coords: Coordinates) => ["weather", coords] as const,
};
export const useWeatherQuery = (coordinates: Coordinates | null) => {
  useQuery({
    queryKey: WEATHER_KEYS.weather(coordinates ?? { lat: 0, lon: 0 }),
  });
};
