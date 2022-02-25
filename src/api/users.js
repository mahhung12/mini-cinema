import axiosClient from "./axios";
import axios from "axios";

const url = "https://62120b0901ccdac074309ef1.mockapi.io/api/";

const getAll = `${url}/users`;
const getById = `${url}/users/`;
const post = `${url}/users`;

export const getUserById = async (id) => {
    try {
        const { data } = await axiosClient.get("/users/", id);

        const modifiedData = data.map((m) => ({
            id: m.username,
            password: m.password,
            email: m.email,
            role: m.roleID,
            image: m.image,
        }));

        return modifiedData;
    } catch (error) {}
};

export const createNewUser = async (user) => {
    try {
        const userData = {
            username: user.username,
            password: user.password,
            email: user.email,
            roleID: 2,
            image: "",
        };

        await axiosClient.post("/users", userData);
    } catch (error) {}
};

export const getUserByNamePassword = async (user) => {
    try {
        const params = {
            username: user.username,
            password: user.password,
        };

        const data = await axiosClient.get("/users/", { params });

        const modifiedData = data.map((m) => ({
            id: m.id,
            username: m.username,
            password: m.password,
            email: m.email,
            role: m.roleID,
            image: m.image,
        }));

        console.log(modifiedData);

        // return JSON.stringify(modifiedData);
        return modifiedData;
    } catch (error) {
        console.error("Error: ", error);
    }
};
