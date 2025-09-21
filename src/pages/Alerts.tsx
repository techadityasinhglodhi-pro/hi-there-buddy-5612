import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Settings,
  Clock,
  MapPin,
  Edit
} from "lucide-react";

const Alerts = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [customMessage, setCustomMessage] = useState('Air quality alert: AQI has reached {aqi} ({status}) in {location}. Consider limiting outdoor activities.');

  const pollutantThresholds = [
    { name: 'PM2.5', current: 25, unit: 'μg/m³', enabled: true },
    { name: 'PM10', current: 50, unit: 'μg/m³', enabled: true },
    { name: 'NO2', current: 40, unit: 'ppb', enabled: false },
    { name: 'O3', current: 70, unit: 'ppb', enabled: true },
    { name: 'SO2', current: 20, unit: 'ppb', enabled: false },
    { name: 'CO', current: 9, unit: 'ppm', enabled: false }
  ];

  const alertHistory = [
    {
      id: 1,
      type: 'SMS',
      message: 'AQI Alert: Level 85 (Moderate) detected in New Delhi',
      timestamp: '2 hours ago',
      status: 'sent'
    },
    {
      id: 2,
      type: 'Email',
      message: 'Daily Air Quality Summary - Good conditions expected',
      timestamp: '1 day ago',
      status: 'sent'
    },
    {
      id: 3,
      type: 'Push',
      message: 'Weather update affecting air quality in your area',
      timestamp: '2 days ago',
      status: 'sent'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Smart Alert System</h1>
          <p className="text-muted-foreground">Personalized notifications for air quality changes</p>
        </div>

        <Tabs defaultValue="setup" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="setup" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Setup</span>
            </TabsTrigger>
            <TabsTrigger value="thresholds" className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Thresholds</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center space-x-2">
              <Edit className="h-4 w-4" />
              <span>Templates</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>History</span>
            </TabsTrigger>
          </TabsList>

          {/* Alert Setup */}
          <TabsContent value="setup">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Configure how you want to receive alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* SMS Setup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-primary" />
                        <div>
                          <Label className="text-base font-medium">SMS Alerts</Label>
                          <p className="text-sm text-muted-foreground">Receive text messages for urgent alerts</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Email Setup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <Label className="text-base font-medium">Email Alerts</Label>
                          <p className="text-sm text-muted-foreground">Daily summaries and detailed reports</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <Label className="text-base font-medium">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Browser notifications for real-time updates</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Timing</CardTitle>
                  <CardDescription>When should we send you alerts?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Alert Frequency</Label>
                    <Select defaultValue="immediate">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="hourly">Hourly Summary</SelectItem>
                        <SelectItem value="daily">Daily Summary</SelectItem>
                        <SelectItem value="weekly">Weekly Summary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Quiet Hours</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <Label className="text-sm">From</Label>
                        <Select defaultValue="22">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => (
                              <SelectItem key={i} value={i.toString()}>
                                {i.toString().padStart(2, '0')}:00
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm">To</Label>
                        <Select defaultValue="07">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => (
                              <SelectItem key={i} value={i.toString()}>
                                {i.toString().padStart(2, '0')}:00
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Location</Label>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">New Delhi, India</span>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pollutant Thresholds */}
          <TabsContent value="thresholds">
            <Card>
              <CardHeader>
                <CardTitle>Custom Pollutant Thresholds</CardTitle>
                <CardDescription>Set personalized alert levels for each pollutant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pollutantThresholds.map((pollutant, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Switch checked={pollutant.enabled} />
                        <div>
                          <Label className="font-medium">{pollutant.name}</Label>
                          <p className="text-sm text-muted-foreground">
                            Current threshold: {pollutant.current} {pollutant.unit}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          className="w-20"
                          defaultValue={pollutant.current}
                        />
                        <span className="text-sm text-muted-foreground">{pollutant.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Health-Based Recommendations</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Thresholds are based on WHO air quality guidelines and can be customized based on your health sensitivity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Message Templates */}
          <TabsContent value="templates">
            <Card>
              <CardHeader>
                <CardTitle>Custom Message Templates</CardTitle>
                <CardDescription>Personalize your alert messages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="sms-template">SMS Template</Label>
                  <Textarea
                    id="sms-template"
                    placeholder="Alert: AQI is {aqi} ({status}) in {location}"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Available variables: {'{aqi}'}, {'{status}'}, {'{location}'}, {'{time}'}, {'{pollutant}'}
                  </p>
                </div>

                <div>
                  <Label htmlFor="email-template">Email Template</Label>
                  <Textarea
                    id="email-template"
                    placeholder="Dear User, the air quality in {location} has reached {aqi} AQI..."
                    className="mt-2 h-32"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">Preview SMS</Button>
                  <Button variant="outline">Preview Email</Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Pre-defined Templates</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                      <div>
                        <div className="font-medium">Basic Alert</div>
                        <div className="text-sm text-muted-foreground">AQI: {'{aqi}'} ({'{status}'}) in {'{location}'}</div>
                      </div>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                      <div>
                        <div className="font-medium">Health Advisory</div>
                        <div className="text-sm text-muted-foreground">Health Alert: Consider limiting outdoor activities...</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alert History */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
                <CardDescription>Recent notifications and their delivery status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alertHistory.map((alert) => (
                    <div key={alert.id} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {alert.type === 'SMS' && <Smartphone className="h-4 w-4 text-primary" />}
                          {alert.type === 'Email' && <Mail className="h-4 w-4 text-primary" />}
                          {alert.type === 'Push' && <MessageSquare className="h-4 w-4 text-primary" />}
                        </div>
                        <div>
                          <p className="font-medium">{alert.message}</p>
                          <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-green-600 bg-green-100">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {alert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button variant="outline">Load More History</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center">
          <Button size="lg" className="px-8">
            Save Alert Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Alerts;