import AlertMessage from "@/components/Alert";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/hooks/use-geoLocation";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import { RefreshCcw } from "lucide-react";

const MeteoDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeoLocation();
  console.log("coordinates", coordinates);

  const locationQuery = useReverseGeocodeQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  console.log("weatherQuery", weatherQuery.data);
  console.log("forecaseQuery", forecastQuery.data);

  const handleRefresh = () => {
    getLocation();

    if (coordinates) {
      //reload weather data
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  // if (locationLoading) {
  //   return <WeatherSkeleton />;
  // }

  if (locationError) {
    return (
      <AlertMessage
        title={"Location Error"}
        error={locationError}
        getLocation={getLocation}
      />
    );
  }

  if (!coordinates) {
    return (
      <AlertMessage
        title="Location Required"
        error="Please enable location access to see your local weather"
        getLocation={getLocation}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Favourite cities */}
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          className="cursor-pointer"
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
        >
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
      {/* Current and hourly weather */}
    </div>
  );
};

export default MeteoDashboard;
