"use client";
import { useEffect, useState } from "react";

export default function Geo() {
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    const { origin } = new URL(window.location);
    const geoAPI = `${origin}/geo`;
    fetch(geoAPI)
      .then((res) => res.json())
      .then((data) => {
        setGeo(data);
      });
  }, []);
  return (
    <div>
      {geo ? (
        <>
          <strong>Closest Netlify edge location:&nbsp;</strong>
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
