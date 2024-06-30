import { useDispatch, useSelector } from "react-redux";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import {
  Container,
  MapDesc,
  PopupContainer,
  RestaurantContent,
  RestaurantImage,
  RestaurantLocation,
  RestaurantName,
} from "./map.style";
import { useEffect } from "react";
import { fetchRestaurantsStart } from "../../store/restaurant/restaurant.action";
import { selectRestaurants } from "../../store/restaurant/restaurant.selector";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurantsStart());
  }, [dispatch]);

  const restaurants = useSelector(selectRestaurants);

  return (
    <Container>
      <MapContainer
        center={[6.454, 3.3946]}
        zoom={12.5}
        scrollWheelZoom={false}
        style={{ height: "90%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              position={[
                restaurant.geolocation.latitude,
                restaurant.geolocation.longitude,
              ]}
            >
              <Popup>
                <PopupContainer>
                  <RestaurantImage src={restaurant.imageSrc} />
                  <RestaurantContent>
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <RestaurantLocation>
                      {restaurant.location}
                    </RestaurantLocation>
                  </RestaurantContent>
                </PopupContainer>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
      <MapDesc>Click on the marker to check the restaurant near you</MapDesc>
    </Container>
  );
};

export default Map;
