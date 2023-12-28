import React, { useEffect, useRef, useState } from "react";
import "./MapComp.css";

// import { VITE_apiKey } from "../../util";
import * as tt from "@tomtom-international/web-sdk-maps";
// import * as ttapi from "@tomtom-international/web-sdk-services";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const MapComp = () => {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(80);

  const [latitude, setLatitude] = useState(27);
  const { VITE_apiKey } = import.meta.env;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    //creates a map div. which is visible on the client side.
    let map = tt.map({
      key: VITE_apiKey,
      container: mapElement.current,

      //sets up what are the items you need to see on the map.
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      //center defines origin location of the person.
      center: [longitude, latitude],
      zoom: 14,
    });

    //setMap function sets up map state for the future use of the map.
    setMap(map);
    //--------------------------------------------------------------------------------------------------------------------------//

    // fetchLocations();

    //-------------------------------------------------------------------------------------------------------------------------//

    //this is the origin location I think
    const addUserCurrentPosition = () => {
      //creates a off set.
      const popupOffset = {
        bottom: [0, -25],
      };

      //creates  a popup to show
      const popup = new tt.Popup({ offset: popupOffset }).setHTML(
        "This is you!"
      );
      const element = document.createElement("div");
      element.className = "marker";

      //creates a marker for the origin position of the user.
      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([longitude, latitude])
        .addTo(map);

      //makes the user position draggable.
      marker.on("dragend", () => {
        const lngLat = marker.getLngLat();
        setLongitude(lngLat.lng);
        setLatitude(lngLat.lat);
      });

      //this I think to toggle the popup
      marker.setPopup(popup).togglePopup();
    };
    addUserCurrentPosition(); // add marker called to set the origin position.
    return () => {
      map.remove();
    };
  }, [longitude, latitude]);

  return <div ref={mapElement} className="w-full h-full rounded-lg"></div>;
};

export default MapComp;
