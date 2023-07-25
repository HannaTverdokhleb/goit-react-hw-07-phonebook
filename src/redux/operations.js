import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64bf93ad0d8e251fd1110a6f.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addTask",
    async ({name, number}, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name, number });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${ contactId }`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);


// export const toggleCompleted = createAsyncThunk(
//     "tasks/toggleCompleted",
//     async (task, thunkAPI) => {
//       try {
//         const response = await axios.put(`/tasks/${task.id}`, {
//           completed: !task.completed,
//         });
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
// );