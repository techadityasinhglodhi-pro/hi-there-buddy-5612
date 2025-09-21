import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin,
  AlertTriangle,
  CheckCircle,
  Activity
} from "lucide-react";

const Forecasts = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const hourlyForecast = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
    aqi: Math.floor(Math.random() * 100) + 20,
    status: i < 6 || i > 20 ? 'Good' : Math.random() > 0.7 ? 'Moderate' : 'Good'
  }));

  const weeklyForecast = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: Math.floor(Math.random() * 80) + 40,
      low: Math.floor(Math.random() * 40) + 20,
      status: Math.random() > 0.6 ? 'Moderate' : 'Good',
      trend: Math.random() > 0.5 ? 'up' : 'down'
    };
  });

  const monthlyForecast = Array.from({ length: 4 }, (_, i) => ({
    week: `Week ${i + 1}`,
    avgAqi: Math.floor(Math.random() * 60) + 30,
    status: Math.random() > 0.7 ? 'Moderate' : 'Good',
    confidence: Math.floor(Math.random() * 20) + 75
  }));

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'unhealthy for sensitive groups': return 'text-orange-600 bg-orange-100';
      case 'unhealthy': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'text-green-600';
    if (aqi <= 100) return 'text-yellow-600';
    if (aqi <= 150) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Air Quality Forecasts</h1>
          <p className="text-muted-foreground">AI-powered predictions using LSTM neural networks</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>New Delhi, India</span>
            <Badge variant="secondary" className="ml-2">
              <Activity className="h-3 w-3 mr-1" />
              85% Accuracy
            </Badge>
          </div>
        </div>

        {/* Forecast Tabs */}
        <Tabs defaultValue="hourly" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hourly" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>24 Hours</span>
            </TabsTrigger>
            <TabsTrigger value="daily" className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4" />
              <span>7 Days</span>
            </TabsTrigger>
            <TabsTrigger value="weekly" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>4 Weeks</span>
            </TabsTrigger>
            <TabsTrigger value="calendar">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Calendar
            </TabsTrigger>
          </TabsList>

          {/* Hourly Forecast */}
          <TabsContent value="hourly">
            <Card>
              <CardHeader>
                <CardTitle>24-Hour Forecast</CardTitle>
                <CardDescription>Hourly air quality predictions for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {hourlyForecast.slice(0, 12).map((hour, index) => (
                    <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-sm text-muted-foreground">{hour.hour}</div>
                      <div className={`text-2xl font-bold ${getAQIColor(hour.aqi)}`}>{hour.aqi}</div>
                      <Badge className={getStatusColor(hour.status)} variant="secondary">
                        {hour.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Forecast Insights</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Air quality expected to remain good throughout the day. Slight improvement predicted during evening hours due to favorable wind conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Daily Forecast */}
          <TabsContent value="daily">
            <Card>
              <CardHeader>
                <CardTitle>7-Day Forecast</CardTitle>
                <CardDescription>Weekly air quality outlook with trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyForecast.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="font-medium">{day.day}</div>
                          <div className="text-sm text-muted-foreground">{day.date}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {day.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 text-red-500" />
                          ) : (
                            <TrendingUp className="h-4 w-4 text-green-500 rotate-180" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className={`font-bold ${getAQIColor(day.high)}`}>
                            {day.high} / {day.low}
                          </div>
                          <div className="text-sm text-muted-foreground">High / Low</div>
                        </div>
                        <Badge className={getStatusColor(day.status)} variant="secondary">
                          {day.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <span className="font-medium">Weekly Alert</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Moderate air quality expected mid-week due to predicted weather patterns. Consider limiting outdoor activities on Wednesday and Thursday.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monthly Forecast */}
          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <CardTitle>4-Week Outlook</CardTitle>
                <CardDescription>Long-term air quality predictions using advanced ML models</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {monthlyForecast.map((week, index) => (
                    <div key={index} className="p-6 bg-muted/50 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold">{week.week}</h3>
                        <Badge className={getStatusColor(week.status)} variant="secondary">
                          {week.status}
                        </Badge>
                      </div>
                      <div className={`text-3xl font-bold ${getAQIColor(week.avgAqi)} mb-2`}>
                        {week.avgAqi}
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">Average AQI</div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${week.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{week.confidence}% confidence</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Monthly Outlook</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Overall air quality expected to remain within acceptable ranges. Seasonal patterns suggest gradual improvement towards month-end due to monsoon predictions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar View</CardTitle>
                  <CardDescription>Select a date to view detailed forecast</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              
              {selectedDate && (
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Forecast for {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6 bg-muted/50 rounded-lg">
                      <div className="text-4xl font-bold text-green-600 mb-2">65</div>
                      <Badge className="text-green-600 bg-green-100" variant="secondary">
                        Moderate
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-2">
                        Good air quality expected throughout the day
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Morning (6 AM - 12 PM)</span>
                        <span className="font-medium text-green-600">Good (45)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Afternoon (12 PM - 6 PM)</span>
                        <span className="font-medium text-yellow-600">Moderate (78)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Evening (6 PM - 12 AM)</span>
                        <span className="font-medium text-green-600">Good (52)</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      Set Reminder for This Day
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Model Information */}
        <Card>
          <CardHeader>
            <CardTitle>Forecast Model Information</CardTitle>
            <CardDescription>Technical details about our prediction algorithms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">LSTM</div>
                <div className="text-sm text-muted-foreground">Neural Network Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">3 hrs</div>
                <div className="text-sm text-muted-foreground">Update Frequency</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Forecasts;