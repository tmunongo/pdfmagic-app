import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

// Create a new record
const createRecord = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/your-resource`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Read records (e.g., fetch all records)
const readRecords = async () => {
  try {
    const response = await axios.get(`${API_URL}/your-resource`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update a record by ID
const updateRecord = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/your-resource/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a record by ID
const deleteRecord = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/your-resource/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createRecord, deleteRecord, readRecords, updateRecord };
