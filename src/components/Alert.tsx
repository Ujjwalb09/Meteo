import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface AlertProps {
  title: string;
  error: string;
  getLocation: () => void;
}

const AlertMessage = ({ title, error, getLocation }: AlertProps) => {
  console.log(title, error);

  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
        <p>{error}</p>
        <Button
          onClick={() => {
            window.location.reload();
            getLocation();
          }}
          className="w-fit"
          variant={"outline"}
        >
          <MapPin className="mr-2 h-4 w-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
