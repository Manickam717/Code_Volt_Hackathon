import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Map from '../componenets/map';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState("home");
    const [currentBalance] = useState(1250.75);
    const [isLoading, setIsLoading] = useState(true);
    const [showWelcome, setShowWelcome] = useState(false);
    const chartRef = useRef(null);
    const [messages, setMessages] = useState([
      {
        sender: "ai",
        text: "Hello! Welcome to EV Assistance. How can I help you today?",
        time: "2:30 PM",
      },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
        setShowWelcome(true);
      }, 1500);
  
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);
  
      return () => {
        clearTimeout(loadingTimer);
        clearTimeout(welcomeTimer);
      };
    }, []);
    useEffect(() => {
      if (chartRef.current && !isLoading) {
        const chart = echarts.init(chartRef.current);
        const option = {
          animation: false,
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderColor: "#e5e7eb",
            textStyle: { color: "#374151" },
            borderWidth: 1,
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            top: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLine: { lineStyle: { color: "#e5e7eb" } },
            axisLabel: { color: "#6b7280" },
          },
          yAxis: {
            type: "value",
            axisLine: { lineStyle: { color: "#e5e7eb" } },
            splitLine: { lineStyle: { color: "#f3f4f6" } },
            axisLabel: { color: "#6b7280" },
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line",
              smooth: true,
              symbolSize: 8,
              lineStyle: { width: 3 },
              areaStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(59, 130, 246, 0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(59, 130, 246, 0.02)",
                    },
                  ],
                },
              },
              color: "#3b82f6",
            },
          ],
        };
        chart.setOption(option);
        const handleResize = () => {
          chart.resize();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [isLoading]);
    const recentTransactions = [
      {
        id: 1,
        station: "EV Station Downtown",
        amount: 35.5,
        date: "March 3, 2025",
        status: "Completed",
        method: "Credit Card",
        time: "10:30 AM",
      },
      {
        id: 2,
        station: "Central Park Charging",
        amount: 42.75,
        date: "March 2, 2025",
        status: "Completed",
        method: "PayPal",
        time: "2:15 PM",
      },
      {
        id: 3,
        station: "Westfield Mall Station",
        amount: 28.9,
        date: "March 1, 2025",
        status: "Completed",
        method: "Debit Card",
        time: "5:45 PM",
      },
    ];
    const nearbyStations = [
      {
        id: 1,
        name: "Downtown Express Station",
        distance: "0.5 miles",
        available: 3,
        rate: "$0.20/min",
        chargers: "Type 2, CCS",
        reviews: "4.5/5",
      },
      {
        id: 2,
        name: "Central Business Hub",
        distance: "1.2 miles",
        available: 1,
        rate: "$0.25/min",
        chargers: "Type 2",
        reviews: "4.0/5",
      },
      {
        id: 3,
        name: "Riverside Charging Point",
        distance: "1.8 miles",
        available: 5,
        rate: "$0.18/min",
        chargers: "CCS, CHAdeMO",
        reviews: "4.7/5",
      },
    ];
    const handleSendMessage = () => {
      if (newMessage.trim() !== "") {
        const userMessage = {
          sender: "user",
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setNewMessage("");

        // Simulate AI response
        setTimeout(() => {
          const aiResponse = {
            sender: "ai",
            text: "Thank you for your message. We are here to assist you with any queries.",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages((prevMessages) => [...prevMessages, aiResponse]);
        }, 1000);
      }
    };
    const handleRedirect = () => {
      navigate('/home');
      setTimeout(() => {
        document.getElementById('chargingExperience').scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };
    if (isLoading) {
      return (
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
          <div className="text-center relative">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600 animate-pulse">
              Loading your dashboard...
            </p>
            {/* Flower Petals Animation */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-0"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${i * 30}deg) translateY(-40px)`,
                  animation: `flowerPetal 1.5s ease-out ${i * 0.1}s forwards`,
                }}
              ></div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative">
        {showWelcome && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative">
              <div className="text-4xl text-white font-bold mb-4 text-center animate-bounce">
                Welcome back, Alexander!
              </div>
              {/* Flower Animation */}
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${i * 15}deg)`,
                    animation: `flowerPetal 2s ease-out ${i * 0.1}s infinite`,
                    "--rotation": `${i * 15}deg`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-xl backdrop-blur-lg bg-opacity-90 transition-all duration-300 ease-in-out relative overflow-hidden">
          
          <div className="p-6 border-b border-gray-100 relative">
            <div className="flex items-center space-x-3">
              <div className="relative">
              </div>
            </div>
          </div>
          <nav className="mt-6 relative">
            {[
              { id: "home", icon: "fa-house", label: "Home", badge: "" },
              { id: "chargingExperience", icon: "fa-bolt", label: "Find Stations", badge: "12" },
              { id: "evValues", icon: "fa-calendar", label: "New Booking", badge: "2" },
              { id: "futureOfMobility", icon: "fa-gift", label: "Transforming Mobility", badge: "3" },
              { id: "wallet", icon: "fa-wallet", label: "Wallet", badge: "" },
              { id: "rewards", icon: "fa-gift", label: "Rewards & Offers", badge: "3" },
              { id: "support", icon: "fa-headset", label: "EV Assistance", badge: "Live" },
              { id: "profile", icon: "fa-user", label: "Profile", badge: "" },
              { id: "settings", icon: "fa-gear", label: "Settings", badge: "" },
            ].map((item, index) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center px-6 py-3.5 transition-all duration-300 ease-in-out group relative
${
  activeMenu === item.id
    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg translate-x-2"
    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
} !rounded-button whitespace-nowrap cursor-pointer`}
              >
                <div className="relative flex items-center w-full">
                  <i
                    className={`fas ${item.icon} w-5 transition-transform duration-300 group-hover:scale-110`}
                  ></i>
                  <span className="ml-3 font-medium">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`absolute right-0 px-2 py-0.5 text-xs rounded-full
${
  activeMenu === item.id ? "bg-white text-blue-600" : "bg-blue-100 text-blue-600"
}
transition-all duration-300`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                {activeMenu === item.id && (
                  <div className="absolute left-0 w-1 h-full bg-white rounded-r-full animate-pulse"></div>
                )}
              </Link>
            ))}
            <div
              className="absolute w-1 h-8 bg-blue-400 rounded-full transition-all duration-300 ease-in-out"
              style={{
                top: `${
                  [...Array(9).keys()].indexOf(
                    [...Array(9).keys()].find(
                      (i) =>
                        [
                          "home",
                          "chargingExperience",
                          "evValues",
                          "futureOfMobility",
                          "wallet",
                          "rewards",
                          "support",
                          "profile",
                          "settings",
                        ][i] === activeMenu,
                    ) || 0,
                  ) * 56
                }px`,
                opacity: 0.5,
              }}
            ></div>
          </nav>
          <style>
            {`
@keyframes slideIn {
from {
opacity: 0;
transform: translateX(-20px);
}
to {
opacity: 1;
transform: translateX(0);
}
}
@keyframes flowerPetal {
0% {
opacity: 0;
transform: rotate(var(--rotation)) translateY(-40px) scale(0);
}
50% {
opacity: 0.8;
transform: rotate(var(--rotation)) translateY(-80px) scale(1);
}
100% {
opacity: 0;
transform: rotate(var(--rotation)) translateY(-120px) scale(0);
}
}
.flower-petal {
--rotation: 0deg;
}
`}
          </style>
        </div>
        {/* Main Content */}
        <div className="flex-1 overflow-auto mt-20">
          {activeMenu === "home" && (
            <div className="p-8">
              <div className="mb-8 animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-800">
                  Good Evening, Alexander
                </h1>
                <p className="text-gray-600 mt-1">
                  Here's your charging activity overview
                </p>
                <p className="text-gray-500 mt-2">
                  You have 2 new notifications.
                </p>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {[
                  {
                    title: "Wallet Balance",
                    value: `$${currentBalance}`,
                    icon: "fa-wallet",
                    color: "blue",
                  },
                  {
                    title: "Active Bookings",
                    value: "2",
                    icon: "fa-calendar-check",
                    color: "green",
                  },
                  {
                    title: "Reward Points",
                    value: "2,450",
                    icon: "fa-gift",
                    color: "purple",
                  },
                  {
                    title: "Total Savings",
                    value: "$345.50",
                    icon: "fa-piggy-bank",
                    color: "yellow",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500">{stat.title}</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">
                          {stat.value}
                        </h3>
                      </div>
                      <div
                        className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center`}
                      >
                        <i
                          className={`fas ${stat.icon} text-${stat.color}-600 text-xl`}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {/* Usage Chart */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                  <h3 className="text-lg font-semibold mb-4">Charging Usage</h3>
                  <div ref={chartRef} style={{ height: "300px" }}></div>
                </div>
                {/* Nearby Stations */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                  <h3 className="text-lg font-semibold mb-4">Nearby Stations</h3>
                  <div className="space-y-4">
                    {nearbyStations.map((station, index) => (
                      <div
                        key={station.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-x-1"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div>
                          <h4 className="font-medium">{station.name}</h4>
                          <p className="text-sm text-gray-500">
                            {station.distance}
                          </p>
                          <p className="text-sm text-gray-500">
                            Rate: {station.rate}
                          </p>
                          <p className="text-sm text-gray-500">
                            Chargers: {station.chargers}
                          </p>
                          <p className="text-sm text-gray-500">
                            Reviews: {station.reviews}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">
                            {station.available} Available
                          </p>
                          <button className="mt-2 px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Recent Transactions */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Recent Transactions
                  </h3>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction, index) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-all duration-200"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div>
                          <h4 className="font-medium">{transaction.station}</h4>
                          <p className="text-sm text-gray-500">
                            {transaction.date} at {transaction.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            Method: {transaction.method}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${transaction.amount}</p>
                          <span className="text-xs text-green-600">
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: "fa-bolt",
                        title: "Find Station",
                        desc: "Locate nearby charging points",
                        color: "blue",
                      },
                      {
                        icon: "fa-calendar-plus",
                        title: "New Booking",
                        desc: "Schedule a charging session",
                        color: "green",
                      },
                      {
                        icon: "fa-wallet",
                        title: "Add Funds",
                        desc: "Top up your wallet",
                        color: "purple",
                      },
                      {
                        icon: "fa-gift",
                        title: "Rewards",
                        desc: "View available offers",
                        color: "yellow",
                      },
                    ].map((action, index) => (
                      <button
                        key={index}
                        className={`p-4 bg-${action.color}-50 rounded-lg text-left hover:bg-${action.color}-100 transition-all duration-200 transform hover:-translate-y-1 !rounded-button whitespace-nowrap`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <i
                          className={`fas ${action.icon} text-${action.color}-600 text-xl mb-2`}
                        ></i>
                        <h4 className="font-medium">{action.title}</h4>
                        <p className="text-sm text-gray-500">{action.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeMenu === "chargingExperience" && (
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Find Stations</h1>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Map />
              </div>
            </div>
          )}
          {activeMenu === "evValues" && (
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">My Bookings</h1>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Bookings</h3>
                <div className="space-y-4">
                  {/* Example Booking */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-x-1">
                    <div>
                      <h4 className="font-medium">EV Station Downtown</h4>
                      <p className="text-sm text-gray-500">March 10, 2025, 10:00 AM</p>
                      <p className="text-sm text-gray-500">Status: Confirmed</p>
                    </div>
                    <div className="text-right">
                      <button className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                        Cancel
                      </button>
                    </div>
                  </div>
                  {/* Past Bookings */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-x-1">
                    <div>
                      <h4 className="font-medium">Central Park Charging</h4>
                      <p className="text-sm text-gray-500">March 5, 2025, 2:00 PM</p>
                      <p className="text-sm text-gray-500">Status: Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeMenu === "futureOfMobility" && (
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Rewards & Offers</h1>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Available Rewards</h3>
                <div className="space-y-4">
                  {/* Example Reward */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-x-1">
                    <div>
                      <h4 className="font-medium">Free Charging Session</h4>
                      <p className="text-sm text-gray-500">Expires: March 31, 2025</p>
                    </div>
                    <button className="px-4 py-1 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                      Redeem
                    </button>
                  </div>
                  {/* More Rewards */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-x-1">
                    <div>
                      <h4 className="font-medium">Discount on Next Booking</h4>
                      <p className="text-sm text-gray-500">Expires: April 15, 2025</p>
                    </div>
                    <button className="px-4 py-1 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                      Redeem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeMenu === "support" && (
            <div className="h-full bg-gray-50">
              <div className="h-full flex flex-col">
                {/* Chat Header */}
                <div className="bg-white shadow-sm p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-headset text-emerald-600"></i>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></div>
                    </div>
                    <div>
                      <h2 className="font-semibold">EV Support Assistant</h2>
                      <p className="text-sm text-emerald-600">
                        Online - Usually responds in 2 mins
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors !rounded-button whitespace-nowrap">
                    <i className="fas fa-ellipsis-v text-gray-600"></i>
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-2 ${message.sender === "user" ? "justify-end" : ""}`}
                    >
                      {message.sender === "ai" && (
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-headset text-emerald-600 text-sm"></i>
                        </div>
                      )}
                      <div className={`bg-${message.sender === "ai" ? "white" : "blue-600 text-white"} rounded-lg p-3 shadow-sm max-w-lg`}>
                        <p className={message.sender === "ai" ? "text-gray-800" : ""}>{message.text}</p>
                        <p className={`text-xs ${message.sender === "ai" ? "text-gray-400" : "text-blue-100"} mt-1`}>{message.time}</p>
                      </div>
                      {message.sender === "user" && (
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-user text-blue-600 text-sm"></i>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="bg-white p-4 border-t">
                  <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors !rounded-button whitespace-nowrap">
                      <i className="fas fa-paperclip text-gray-600"></i>
                    </button>
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="bg-transparent border-none w-full focus:outline-none text-sm"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                    </div>
                    <button
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center !rounded-button whitespace-nowrap"
                      onClick={handleSendMessage}
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeMenu === "profile" && (
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile</h1>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">User Information</h3>
                <p className="text-sm text-gray-500">Name: Alexander Mitchell</p>
                <p className="text-sm text-gray-500">Email: alexander@example.com</p>
                <p className="text-sm text-gray-500">Phone: (123) 456-7890</p>
                <p className="text-sm text-gray-500">Membership: Gold</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                  Edit Profile
                </button>
              </div>
            </div>
          )}
          {activeMenu === "settings" && (
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Settings</h1>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                  Change Password
                </button>
                <button className="mt-4 px-6 py-2 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-colors duration-200 !rounded-button whitespace-nowrap">
                  Delete Account
                </button>
                <h3 className="text-lg font-semibold mt-6 mb-4">Notification Preferences</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Email Notifications</p>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">SMS Notifications</p>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default Dashboard;
