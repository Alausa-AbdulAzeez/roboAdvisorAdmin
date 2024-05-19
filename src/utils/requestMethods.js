// const dotenv = require("dotenv");

import axios from "axios";

// dotenv.config();

const BASE_URL = "https://roboadvisor-3ebh.onrender.com/api/";
// const TOKEN = process.env.PAYSTACK_SECRET_TEST_KEY;

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${TOKEN}`,
  },
});

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
