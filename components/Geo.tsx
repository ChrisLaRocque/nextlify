"use client";
import { useEffect, useState } from "react";
type TGeoInfo = {
  city: string;
  country: {
    name: string;
  };
};
export default function Geo() {
  const [geo, setGeo] = useState<TGeoInfo | null>(null);

  useEffect(() => {
    const { origin } = new URL(window.location.toString());
    const geoAPI = `${origin}/geo`;
    fetch(geoAPI)
      .then((res) => res.json())
      .then((data) => {
        setGeo(data);
      });
  }, []);
  return (
    <div className="text-right">
      {geo ? (
        <>
          <strong>Closest Netlify edge location:</strong>
          <p>{`${geo.city} | ${geo.country.name}`}</p>
        </>
      ) : (
        <>
          {" "}
          <p>Looking for edge location info...</p>
        </>
      )}
    </div>
  );
}
