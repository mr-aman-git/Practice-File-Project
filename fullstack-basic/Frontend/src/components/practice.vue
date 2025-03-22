<template>
    <div :class="['p-4', darkMode ? 'dark-mode' : 'light-mode']">
      <h2 class="text-xl font-bold mb-2">🚇 Metro Route Filter</h2>
  
      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" class="toggle-btn">
        {{ darkMode ? "🌞 Light Mode" : "🌙 Dark Mode" }}
      </button>
  
      <!-- Start Station Dropdown -->
      <select v-model="startStation" class="dropdown">
        <option value="">Select Start Station</option>
        <option v-for="station in stations" :key="station.id" :value="station.name">
          {{ station.name }}
        </option>
      </select>
  
      <!-- End Station Dropdown -->
      <select v-model="endStation" class="dropdown">
        <option value="">Select End Station</option>
        <option v-for="station in stations" :key="station.id" :value="station.name">
          {{ station.name }}
        </option>
      </select>
  
      <!-- Route Fare & Estimated Travel Time -->
      <div v-if="filteredStations.length" class="info-box">
        <p>💰 Fare: ₹{{ calculateFare }}</p>
        <p>⏳ Travel Time: {{ calculateTime }} mins</p>
      </div>
  
      <!-- Filtered Route List -->
      <ul v-if="filteredStations.length" class="station-list">
        <li v-for="station in filteredStations" :key="station.id" class="station-item">
          {{ station.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
  export default {
    setup() {
      const stations = ref([
        { id: 1, name: "Rajiv Chowk" },
        { id: 2, name: "RK Ashram" },
        { id: 3, name: "Jhandewalan" },
        { id: 4, name: "Karol Bagh" },
        { id: 5, name: "Rajendra Place" },
        { id: 6, name: "Patel Nagar" },
        { id: 7, name: "Ramesh Nagar" }
      ]);
  
      const startStation = ref("");
      const endStation = ref("");
      const darkMode = ref(false);
  
      const filteredStations = computed(() => {
        if (!startStation.value || !endStation.value) return [];
  
        const startIndex = stations.value.findIndex((s) => s.name === startStation.value);
        const endIndex = stations.value.findIndex((s) => s.name === endStation.value);
  
        if (startIndex === -1 || endIndex === -1) return [];
  
        return startIndex < endIndex
          ? stations.value.slice(startIndex, endIndex + 1)
          : stations.value.slice(endIndex, startIndex + 1).reverse();
      });
  
      // Calculate Fare (₹10 per station)
      const calculateFare = computed(() => filteredStations.value.length * 10);
  
      // Calculate Travel Time (2 min per station)
      const calculateTime = computed(() => filteredStations.value.length * 3);
  
      // Toggle Dark Mode
      const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
      };
  
      return {
        stations,
        startStation,
        endStation,
        filteredStations,
        calculateFare,
        calculateTime,
        darkMode,
        toggleDarkMode
      };
    }
  };
  </script>
  
  <style>
  /* Light & Dark Mode */
  .light-mode {
    background-color: #f9f9f9;
    color: #333;
  }
  .dark-mode {
    background-color: #222;
    color: #fff;
  }
  
  /* Buttons & Inputs */
  .toggle-btn {
    background: #007bff;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .dropdown {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  /* Info Box */
  .info-box {
    background: #d1ecf1;
    color: #0c5460;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  /* Station List */
  .station-list {
    list-style: none;
    padding: 0;
  }
  .station-item {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  </style>
  