import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Layers, Satellite } from "lucide-react";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [selectedLayer, setSelectedLayer] = useState('satellite');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const mockLocations = [
    { name: "New Delhi", coords: [77.2090, 28.6139], aqi: 156, status: "Unhealthy" },
    { name: "Mumbai", coords: [72.8777, 19.0760], aqi: 89, status: "Moderate" },
    { name: "Bangalore", coords: [77.5946, 12.9716], aqi: 65, status: "Moderate" },
    { name: "Chennai", coords: [80.2707, 13.0827], aqi: 78, status: "Moderate" },
    { name: "Kolkata", coords: [88.3639, 22.5726], aqi: 134, status: "Unhealthy for Sensitive Groups" }
  ];

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return '#00e400';
    if (aqi <= 100) return '#ffff00';
    if (aqi <= 150) return '#ff7e00';
    if (aqi <= 200) return '#ff0000';
    if (aqi <= 300) return '#8f3f97';
    return '#7e0023';
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: selectedLayer === 'satellite' ? 'mapbox://styles/mapbox/satellite-v9' : 'mapbox://styles/mapbox/light-v11',
      center: [77.2090, 20.5937],
      zoom: 5
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add markers for each location
      mockLocations.forEach(location => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = getAQIColor(location.aqi);
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.cursor = 'pointer';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${location.name}</h3>
            <p class="text-xs">AQI: <span style="color: ${getAQIColor(location.aqi)}">${location.aqi}</span></p>
            <p class="text-xs">${location.status}</p>
          </div>
        `);

        new mapboxgl.Marker(el)
          .setLngLat(location.coords as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });
  };

  useEffect(() => {
    if (mapboxToken && !showTokenInput) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, selectedLayer, showTokenInput]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Mapbox Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your Mapbox public token to enable the interactive map.
          </p>
          <Input
            type="password"
            placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGl..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <Button onClick={handleTokenSubmit} className="w-full">
            Initialize Map
          </Button>
          <p className="text-xs text-muted-foreground">
            Get your token from{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              mapbox.com
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Air Quality Map</h2>
        <div className="flex items-center space-x-4">
          <Select value={selectedLayer} onValueChange={setSelectedLayer}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="satellite">
                <div className="flex items-center">
                  <Satellite className="h-4 w-4 mr-2" />
                  Satellite
                </div>
              </SelectItem>
              <SelectItem value="street">
                <div className="flex items-center">
                  <Layers className="h-4 w-4 mr-2" />
                  Street
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={() => setShowTokenInput(true)}>
            Change Token
          </Button>
        </div>
      </div>
      
      <div className="relative w-full h-96 rounded-lg overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {mockLocations.map((location, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-sm font-medium">{location.name}</div>
              <div className="text-lg font-bold" style={{ color: getAQIColor(location.aqi) }}>
                {location.aqi}
              </div>
              <Badge variant="secondary" className="text-xs">
                {location.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Map;