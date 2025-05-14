import Spinner from "@/components/loading/Spinner";
import Overlay from "@/components/Overlay";

export default function Loading() {

  return (
    <Overlay>
      <Spinner forScreen={true}></Spinner>
    </Overlay>
  );
}

