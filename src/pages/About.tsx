import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Satellite, 
  Brain, 
  Shield, 
  Globe, 
  Users, 
  Award,
  Target,
  TrendingUp,
  CheckCircle,
  Mail,
  Linkedin,
  Github
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Satellite className="h-6 w-6 text-primary" />,
      title: "NASA TEMPO Integration",
      description: "First-ever geostationary satellite monitoring over North America with 2.1km × 4.5km resolution"
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "AI-Powered Predictions",
      description: "Advanced LSTM neural networks delivering 85% accuracy in air quality forecasting"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Health-First Approach",
      description: "Personalized recommendations based on WHO guidelines and individual health profiles"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multi-Source Data",
      description: "Combining satellite, ground sensors, and weather data for comprehensive monitoring"
    }
  ];

  const stats = [
    { number: "85%", label: "Prediction Accuracy" },
    { number: "2.1km", label: "Spatial Resolution" },
    { number: "24/7", label: "Real-time Monitoring" },
    { number: "50K+", label: "Users Protected" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Data Scientist",
      expertise: "Atmospheric Physics, NASA TEMPO",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Alex Rodriguez",
      role: "Lead AI Engineer",
      expertise: "Machine Learning, LSTM Models",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Health Advisory Lead",
      expertise: "Public Health, Air Quality Impact",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Michael Park",
      role: "Full-Stack Developer",
      expertise: "React, Cloud Architecture",
      image: "/api/placeholder/120/120"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "AirGuard Pro Launch",
      description: "Platform officially launched with NASA TEMPO integration"
    },
    {
      year: "2023",
      title: "NASA Partnership",
      description: "Secured exclusive access to TEMPO satellite data"
    },
    {
      year: "2023",
      title: "AI Model Development",
      description: "Developed proprietary LSTM forecasting algorithms"
    },
    {
      year: "2022",
      title: "Project Inception",
      description: "Initial research and development phase began"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <Award className="h-4 w-4 mr-2" />
            Powered by NASA TEMPO Technology
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About AirGuard Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make clean air accessible to everyone through cutting-edge satellite technology and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="h-6 w-6 mr-3 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to accurate, real-time air quality information using NASA's most advanced satellite technology. 
                    We believe everyone deserves to breathe clean air and make informed decisions about their health and outdoor activities.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Hyperlocal air quality monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">AI-powered health recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Predictive alert systems</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <TrendingUp className="h-6 w-6 mr-3 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a world where air quality data is as accessible as weather forecasts, enabling governments, 
                    businesses, and individuals to make proactive decisions that protect public health and environmental sustainability.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Global air quality awareness</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Data-driven policy making</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Healthier communities worldwide</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology meets practical health applications for unprecedented air quality intelligence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {feature.icon}
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Platform Impact</h2>
              <p className="text-muted-foreground">
                Numbers that reflect our commitment to accurate air quality monitoring
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experts in atmospheric science, AI, and public health working together for cleaner air.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.expertise}</p>
                    <div className="flex justify-center space-x-2 mt-4">
                      <Button variant="ghost" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground">
                Key milestones in developing advanced air quality monitoring technology
              </p>
            </div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-12">
                <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're a researcher, policymaker, or someone who cares about clean air, 
                  we'd love to hear from you and explore how we can work together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Us
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Partner With Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;