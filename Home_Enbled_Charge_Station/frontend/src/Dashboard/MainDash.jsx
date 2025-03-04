import './MainDash.css';

import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Map from '../componenets/map';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import ChatSupport from '../componenets/ChatSupport';

const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState("home");
    const [currentBalance] = useState(1250.75);
    const [isLoading, setIsLoading] = useState(true);
    const [showWelcome, setShowWelcome] = useState(false);
    const chartRef = useRef(null);
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
    const handleNavigation = (menuId) => {
        setActiveMenu(menuId);
        
        if (menuId === "home") {
            // Navigate to the dashboard page
            navigate('/dashboard');
            // Reset scroll position
            window.scrollTo(0, 0);
        } else if (["buy", "sell", "about"].includes(menuId)) {
            navigate(`/`);
            setTimeout(() => {
                const element = document.getElementById(menuId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
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
    const navigationItems = [
        { id: "home", icon: "fa-house", label: "Home", badge: "" },
        { id: "chargingExperience", icon: "fa-bolt", label: "Find Stations", badge: "12" },
        { id: "evValues", icon: "fa-calendar", label: "New Booking", badge: "2" },
        { id: "futureOfMobility", icon: "fa-gift", label: "Transforming Mobility", badge: "3" },
        { id: "wallet", icon: "fa-wallet", label: "Wallet", badge: "" },
        { id: "rewards", icon: "fa-gift", label: "Rewards & Offers", badge: "3" },
        { id: "support", icon: "fa-headset", label: "EV Assistance", badge: "Live" },
        { id: "profile", icon: "fa-user", label: "Profile", badge: "" },
        { id: "settings", icon: "fa-gear", label: "Settings", badge: "" },
        { id: "buy", icon: "fa-shopping-cart", label: "Buy", badge: "" },
        { id: "sell", icon: "fa-store", label: "Sell", badge: "" },
        { id: "about", icon: "fa-info-circle", label: "About", badge: "" }
    ];
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
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
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
              </button>
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
                <StatsCard
                  title="Wallet Balance"
                  value={`$${currentBalance}`}
                  icon="fa-wallet"
                  gradient="linear-gradient(135deg, #3b82f6, #2563eb)"
                />
                <StatsCard
                  title="Active Bookings"
                  value="2"
                  icon="fa-calendar-check"
                  gradient="linear-gradient(135deg, #10b981, #059669)"
                />
                <StatsCard
                  title="Reward Points"
                  value="2,450"
                  icon="fa-gift"
                  gradient="linear-gradient(135deg, #8b5cf6, #7c3aed)"
                />
                <StatsCard
                  title="Total Savings"
                  value="$345.50"
                  icon="fa-piggy-bank"
                  gradient="linear-gradient(135deg, #f59e0b, #d97706)"
                />
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
                      <StationCard key={station.id} {...station} />
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
                      <TransactionCard key={transaction.id} {...transaction} />
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
                      <QuickActionCard
                        key={index}
                        icon={action.icon}
                        title={action.title}
                        desc={action.desc}
                        color={action.color}
                        gradient={`linear-gradient(135deg, ${action.color}-500, ${action.color}-600)`}
                      />
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
            <ChatSupport />
          )}
          {activeMenu === "wallet" && (
            <div className="p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Wallet</h1>
                <p className="text-gray-600 mt-1">Manage your funds and transactions</p>
              </div>
              
              {/* Wallet Balance Card */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-blue-100">Available Balance</p>
                    <h2 className="text-4xl font-bold mt-2">${currentBalance}</h2>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-wallet text-2xl"></i>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300">
                    Add Funds
                  </button>
                  <button className="px-6 py-2 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-credit-card text-2xl text-blue-600"></i>
                        <div>
                          <p className="font-medium">Visa Card</p>
                          <p className="text-sm text-gray-500">**** 1234</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                  <button className="p-4 border-2 border-dashed rounded-lg hover:border-blue-500 transition-all duration-300 text-center">
                    <i className="fas fa-plus text-blue-600 text-xl mb-2"></i>
                    <p className="text-gray-600">Add New Card</p>
                  </button>
                </div>
              </div>

              {/* Transaction History */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <TransactionCard key={transaction.id} {...transaction} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeMenu === "profile" && (
            <div className="p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
                <p className="text-gray-600 mt-1">Manage your account information</p>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {/* Profile Overview */}
                <div className="col-span-2 bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl">
                        AM
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-camera text-gray-600"></i>
                      </button>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Alexander Mitchell</h2>
                      <p className="text-gray-600">Gold Member</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="Alexander Mitchell" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="alexander@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="(123) 456-7890" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="New York, USA" />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Membership Status */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Membership Status</h3>
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 text-white mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-yellow-100">Gold Member</p>
                        <p className="text-2xl font-bold mt-1">2,450 Points</p>
                      </div>
                      <i className="fas fa-crown text-2xl"></i>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-medium">January 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Bookings</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Points to Next Tier</span>
                      <span className="font-medium">550</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeMenu === "rewards" && (
            <div className="p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Rewards & Offers</h1>
                <p className="text-gray-600 mt-1">Discover exclusive deals and rewards</p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Featured Offer */}
                <div className="col-span-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">Special Weekend Offer</h3>
                      <p className="mt-2 text-purple-100">Get 50% off on your next charging session</p>
                      <button className="mt-4 px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-300">
                        Claim Offer
                      </button>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <i className="fas fa-gift text-2xl"></i>
                    </div>
                  </div>
                </div>

                {/* Points Summary */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Your Points</h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">2,450</div>
                    <p className="text-gray-600 mt-2">Available Points</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Points Earned</span>
                      <span className="font-medium text-green-600">+150</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Points Redeemed</span>
                      <span className="font-medium text-red-600">-50</span>
                    </div>
                  </div>
                </div>

                {/* Available Rewards */}
                <div className="col-span-3 bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Available Rewards</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        title: "Free Charging Session",
                        points: "500",
                        expiry: "March 31, 2025",
                        icon: "fa-bolt"
                      },
                      {
                        title: "20% Off Next Booking",
                        points: "300",
                        expiry: "April 15, 2025",
                        icon: "fa-percent"
                      },
                      {
                        title: "Premium Support",
                        points: "200",
                        expiry: "April 30, 2025",
                        icon: "fa-headset"
                      }
                    ].map((reward, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <i className={`fas ${reward.icon} text-blue-600 text-xl`}></i>
                          <h4 className="font-medium">{reward.title}</h4>
                        </div>
                        <p className="text-sm text-gray-500">Expires: {reward.expiry}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-600">{reward.points} points</span>
                          <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-all duration-300">
                            Redeem
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeMenu === "settings" && (
            <div className="p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your account preferences</p>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {/* Account Settings */}
                <div className="col-span-2 bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
                  
                  {/* Security Settings */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">Security</h4>
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-lock text-blue-600"></i>
                          <div>
                            <p className="font-medium">Change Password</p>
                            <p className="text-sm text-gray-500">Update your account password</p>
                          </div>
                        </div>
                        <i className="fas fa-chevron-right text-gray-400"></i>
                      </button>
                      <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-shield-alt text-blue-600"></i>
                          <div>
                            <p className="font-medium">Two-Factor Authentication</p>
                            <p className="text-sm text-gray-500">Add an extra layer of security</p>
                          </div>
                        </div>
                        <i className="fas fa-chevron-right text-gray-400"></i>
                      </button>
                    </div>
                  </div>

                  {/* Account Management */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">Account Management</h4>
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-red-500 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-trash-alt text-red-600"></i>
                          <div>
                            <p className="font-medium text-red-600">Delete Account</p>
                            <p className="text-sm text-gray-500">Permanently delete your account</p>
                          </div>
                        </div>
                        <i className="fas fa-chevron-right text-gray-400"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Notification Preferences</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Email Notifications", icon: "fa-envelope" },
                      { title: "SMS Notifications", icon: "fa-mobile-alt" },
                      { title: "Push Notifications", icon: "fa-bell" },
                      { title: "Booking Reminders", icon: "fa-calendar-check" },
                      { title: "Promotional Offers", icon: "fa-gift" }
                    ].map((preference, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <i className={`fas ${preference.icon} text-blue-600`}></i>
                          <span className="font-medium">{preference.title}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

// Add these new components for better organization
const StatsCard = ({ title, value, icon, color, gradient }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: gradient }}></div>
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`} style={{ background: gradient }}>
          <i className={`fas ${icon} text-white text-xl`}></i>
        </div>
      </div>
    </div>
  </div>
);

const QuickActionCard = ({ icon, title, desc, color, gradient }) => (
  <button className={`p-6 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group`} style={{ background: gradient }}>
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <i className={`fas ${icon} text-white text-2xl mb-3`}></i>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-white/80 text-sm mt-1">{desc}</p>
    </div>
  </button>
);

const TransactionCard = ({ station, amount, date, status, method, time }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <i className="fas fa-bolt text-blue-600"></i>
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{station}</h4>
        <p className="text-sm text-gray-500">{date} at {time}</p>
        <p className="text-sm text-gray-500">Method: {method}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-medium text-gray-800">${amount}</p>
      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
        {status}
      </span>
    </div>
  </div>
);

const StationCard = ({ name, distance, available, rate, chargers, reviews }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
        <i className="fas fa-charging-station text-green-600"></i>
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{distance}</p>
        <p className="text-sm text-gray-500">Rate: {rate}</p>
        <p className="text-sm text-gray-500">Chargers: {chargers}</p>
        <div className="flex items-center mt-1">
          <i className="fas fa-star text-yellow-400 text-sm"></i>
          <p className="text-sm text-gray-500 ml-1">{reviews}</p>
        </div>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium text-green-600">
        {available} Available
      </p>
      <button className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full hover:shadow-lg transition-all duration-300">
        Book Now
      </button>
    </div>
  </div>
);

export default Dashboard;
