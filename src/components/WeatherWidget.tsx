import { useState, useEffect } from "react";
import { CloudSun, Thermometer, Droplets, Wind } from "lucide-react";

interface WeatherData {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Using wttr.in free API (no key needed)
    fetch("https://wttr.in/Brazzaville?format=j1")
      .then((res) => res.json())
      .then((data) => {
        const current = data.current_condition[0];
        setWeather({
          temp: parseInt(current.temp_C),
          humidity: parseInt(current.humidity),
          windSpeed: parseInt(current.windspeedKmph),
          description: current.weatherDesc[0].value,
          icon: current.weatherIconUrl[0].value,
        });
        setLoading(false);
      })
      .catch(() => {
        // Fallback data
        setWeather({
          temp: 28,
          humidity: 78,
          windSpeed: 12,
          description: "Partiellement nuageux",
          icon: "",
        });
        setLoading(false);
      });
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Africa/Brazzaville",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Africa/Brazzaville",
    });
  };

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 animate-pulse">
        <div className="h-16 bg-muted rounded" />
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CloudSun size={18} className="text-gold" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Brazzaville
          </span>
        </div>
        <span className="text-lg font-heading font-bold text-foreground tabular-nums">
          {formatTime(currentTime)}
        </span>
      </div>
      <p className="text-xs text-muted-foreground capitalize mb-3">{formatDate(currentTime)}</p>
      {weather && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer size={16} className="text-primary" />
            <span className="text-xl font-bold text-foreground">{weather.temp}°C</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Droplets size={12} className="text-blue-500" />
              {weather.humidity}%
            </span>
            <span className="flex items-center gap-1">
              <Wind size={12} className="text-muted-foreground" />
              {weather.windSpeed}km/h
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
