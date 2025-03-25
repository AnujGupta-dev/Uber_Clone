import React, { useEffect, useRef, useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import L from 'leaflet';
import 'leaflet-routing-machine';

const LiveTracking = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const markerRef2 = useRef(null);
  const routingControlRef = useRef(null);
  
  const [start, setStart] = useState([0, 0]);
  const [end, setEnd] = useState([20.593684, 78.96288]); 

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    
    if (!mapRef.current) {
      mapRef.current = L.map('map', { zoomControl: true }).setView([20.593684, 78.96288], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);

     
      markerRef.current = L.marker([20.593684, 78.96288]).addTo(mapRef.current);
      markerRef2.current = L.marker([20.593684, 78.96288]).addTo(mapRef.current);
      markerRef.current.bindPopup("<b>User here!</b>").openPopup();

      
      routingControlRef.current = L.Routing.control({
        waypoints: [L.latLng(start), L.latLng(end)],
        routeWhileDragging: false,
      }).addTo(mapRef.current);
    }

   
    socket.on('location-updated', (data) => {
      const newEnd = [data.location.ltd, data.location.lng];
      setEnd(newEnd); 
      markerRef2.current.setLatLng(newEnd); 
    });

    
    return () => {
      socket.off('location-updated');
    };
  }, [socket]); 
  useEffect(() => {
   
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setStart([latitude, longitude]);
          markerRef.current.setLatLng([latitude, longitude]); 
          mapRef.current.setView([latitude, longitude]); 
        });
      }
    };

    updateLocation();
    const intervalId = setInterval(updateLocation, 10000); 

  
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (routingControlRef.current) {
      routingControlRef.current.setWaypoints([L.latLng(start), L.latLng(end)]);
    }
  }, [start, end]); 

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
};

export default LiveTracking;
