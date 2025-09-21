import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Cloud, 
  MapPin, 
  Bell, 
  TrendingUp, 
  Shield, 
  Satellite,
  Wind,
  Thermometer,
  Droplets,
  Eye
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const currentAQI = 42;
  const aqiStatus = "Good";
  const aqiColor = "text-green-600";
  const location = "New Delhi, India";

  const pollutants = [
    { name: "PM2.5", value: "12 μg/m³", status: "Good", color: "bg-green-500" },
    { name: "PM10", value: "28 μg/m³", status: "Good", color: "bg-green-500" },
    { name: "NO2", value: "15 ppb", status: "Good", color: "bg-green-500" },
    { name: "O3", value: "45 ppb", status: "Moderate", color: "bg-yellow-500" },
    { name: "SO2", value: "8 ppb", status: "Good", color: "bg-green-500" },
    { name: "CO", value: "0.5 ppm", status: "Good", color: "bg-green-500" }
  ];

  const features = [
    {
      icon: <Satellite className="h-8 w-8 text-primary" />,
      title: "NASA TEMPO Integration",
      description: "Real-time satellite data with 2.1km × 4.5km resolution"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "AI Predictions",
      description: "Advanced LSTM models for accurate 24hr-4week forecasts"
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Alerts",
      description: "Personalized notifications via SMS, email & push"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Health Advisory",
      description: "Personalized recommendations for safe outdoor activities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-border/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wind className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">AirGuard Pro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => navigate("/real-time-data")} className="text-muted-foreground hover:text-primary transition-colors">Real-time Data</button>
              <button onClick={() => navigate("/forecasts")} className="text-muted-foreground hover:text-primary transition-colors">Forecasts</button>
              <button onClick={() => navigate("/alerts")} className="text-muted-foreground hover:text-primary transition-colors">Alerts</button>
              <button onClick={() => navigate("/about")} className="text-muted-foreground hover:text-primary transition-colors">About</button>
              <Button variant="default" size="sm">Login</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Satellite className="h-4 w-4 mr-2" />
              Powered by NASA TEMPO Satellite Data
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Breathe Safer with
              <span className="text-primary block">AI-Powered Predictions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced air quality forecasting platform combining NASA satellite data with ground sensors for accurate, hyperlocal predictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" onClick={() => navigate("/real-time-data")}>
                <MapPin className="h-5 w-5 mr-2" />
                Check Air Quality Now
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={() => navigate("/real-time-data")}>
                <Eye className="h-5 w-5 mr-2" />
                View Live Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Air Quality Quick View */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Current Air Quality</h2>
            
            {/* Main AQI Display */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-4">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${aqiColor}`}>{currentAQI}</div>
                  <div className="text-sm text-muted-foreground">AQI</div>
                </div>
              </div>
              <div className="mb-2">
                <Badge variant="secondary" className={`${aqiColor} bg-green-100`}>
                  {aqiStatus}
                </Badge>
              </div>
              <p className="text-muted-foreground flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </p>
            </div>

            {/* Pollutants Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {pollutants.map((pollutant, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className={`w-3 h-3 rounded-full ${pollutant.color} mx-auto mb-2`}></div>
                    <div className="font-semibold text-sm">{pollutant.name}</div>
                    <div className="text-xs text-muted-foreground">{pollutant.value}</div>
                    <div className="text-xs text-muted-foreground">{pollutant.status}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Weather Info */}
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Thermometer className="h-4 w-4 mr-1" />
                28°C
              </div>
              <div className="flex items-center">
                <Droplets className="h-4 w-4 mr-1" />
                65% Humidity
              </div>
              <div className="flex items-center">
                <Wind className="h-4 w-4 mr-1" />
                12 km/h NW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced Air Quality Intelligence</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combining cutting-edge satellite technology with ground-based sensors for the most accurate air quality predictions available.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2.1km</div>
                <div className="text-muted-foreground">Spatial Resolution</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Real-time Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Wind className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">AirGuard Pro</span>
              </div>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-8">
              © 2024 AirGuard Pro. Powered by NASA TEMPO satellite data.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;
