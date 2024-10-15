import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const mapCenter = {
        lat: 4.60971,  // Coordenada de ejemplo (Bogotá, Colombia)
        lng: -74.08175
    };
    const mapZoom = 10;

    return (
        <LoadScript googleMapsApiKey="AIzaSyC3lkmVtgtjxF614t12o8oB5gtaqPVzByw">
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={mapCenter}
                zoom={mapZoom}
            >
                <Marker position={mapCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
