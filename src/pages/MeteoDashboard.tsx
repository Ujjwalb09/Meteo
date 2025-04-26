import AlertMessage from "@/components/Alert";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/hooks/use-geoLocation";
import { RefreshCcw } from "lucide-react";

const MeteoDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeoLocation();
  console.log("coordinates", coordinates);

  const handleRefresh = () => {
    getLocation();

    if (coordinates) {
      //reload weather data
    }
  };

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

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
