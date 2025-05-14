import Spinner from "@/components/loading/Spinner";
import Overlay from "@/components/Overlay";

export default function Loading() {

  return (
    <Overlay>
      <Spinner width={"90%"}></Spinner>
    </Overlay>
  );
}

