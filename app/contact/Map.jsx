"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./MapLeaflet"), { ssr: false });

const Map = () => {
  return <LeafletMap />;
};

export default Map;
