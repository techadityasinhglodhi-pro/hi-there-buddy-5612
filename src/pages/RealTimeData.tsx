import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Wind, 
  Thermometer, 
  Droplets, 
  Eye, 
  MapPin, 
  Clock,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import Map from "@/components/Map";

const RealTimeData = () => {
  const currentData = {
    aqi: 42,
    status: "Good",
    location: "New Delhi, India",
    lastUpdated: "2 minutes ago",
    trend: "improving"
  };

  const pollutants = [
    { name: "PM2.5", value: 12, unit: "μg/m³", limit: 25, status: "Good", percentage: 48 },
    { name: "PM10", value: 28, unit: "μg/m³", limit: 50, status: "Good", percentage: 56 },
    { name: "NO2", value: 15, unit: "ppb", limit: 40, status: "Good", percentage: 37.5 },
    { name: "O3", value: 45, unit: "ppb", limit: 70, status: "Moderate", percentage: 64.3 },
    { name: "SO2", value: 8, unit: "ppb", limit: 20, status: "Good", percentage: 40 },
    { name: "CO", value: 0.5, unit: "ppm", limit: 9, status: "Good", percentage: 5.6 }
  ];

  const weatherData = [
    { label: "Temperature", value: "28°C", icon: <Thermometer className="h-4 w-4" /> },
    { label: "Humidity", value: "65%", icon: <Droplets className="h-4 w-4" /> },
    { label: "Wind Speed", value: "12 km/h", icon: <Wind className="h-4 w-4" /> },
    { label: "Visibility", value: "8 km", icon: <Eye className="h-4 w-4" /> }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'unhealthy for sensitive groups': return 'text-orange-600 bg-orange-100';
      case 'unhealthy': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage < 50) return 'bg-green-500';
    if (percentage < 75) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Real-Time Air Quality Data</h1>
          <p className="text-muted-foreground">Live monitoring with NASA TEMPO satellite integration</p>
        </div>

        {/* Current AQI Overview */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-lg font-medium">{currentData.location}</span>
            </div>
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 mx-auto mb-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600">{currentData.aqi}</div>
                <div className="text-sm text-muted-foreground">AQI</div>
              </div>
            </div>
            <Badge className={getStatusColor(currentData.status)}>
              {currentData.status}
            </Badge>
            <div className="flex items-center justify-center space-x-2 mt-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Updated {currentData.lastUpdated}</span>
              {currentData.trend === 'improving' ? (
                <TrendingDown className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingUp className="h-4 w-4 text-red-600" />
              )}
            </div>
          </CardHeader>
        </Card>

        {/* Detailed Pollutant Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Pollutant Analysis</CardTitle>
            <CardDescription>Individual pollutant levels and health thresholds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pollutants.map((pollutant, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{pollutant.name}</span>
                    <Badge className={getStatusColor(pollutant.status)} variant="secondary">
                      {pollutant.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">
                    {pollutant.value} <span className="text-sm font-normal text-muted-foreground">{pollutant.unit}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Health Limit: {pollutant.limit} {pollutant.unit}</span>
                      <span>{pollutant.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(pollutant.percentage)}`}
                        style={{ width: `${Math.min(pollutant.percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather Conditions */}
        <Card>
          <CardHeader>
            <CardTitle>Weather Conditions</CardTitle>
            <CardDescription>Current meteorological data affecting air quality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {weatherData.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                  {item.icon}
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Map */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Air Quality Map</CardTitle>
            <CardDescription>Real-time air quality monitoring across regions</CardDescription>
          </CardHeader>
          <CardContent>
            <Map />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Set Up Alerts
          </Button>
          <Button variant="outline" size="lg">
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeData;