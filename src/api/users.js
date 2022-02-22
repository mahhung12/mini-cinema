import axiosClient from "./axios";
import axios from "axios";

const url = "https://62120b0901ccdac074309ef1.mockapi.io/api/";

const getAll = `${url}/users`;
const getById = `${url}/users/`;
const post = `${url}/users`;

export const getUserById = async (id) => {
    try {
        const { data } = await axiosClient.get(getById, id);

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

        await axiosClient.post(post, userData);
    } catch (error) {}
};

export const getUserByNamePassword = async (user) => {
    try {
        const params = {
            username: user.username,
            password: user.password,
        };

        const { data } = await axiosClient.get(getById, { params });

        console.log(data);

        return data;
    } catch (error) {}
};

// Dừng lại ở axiosClient post thì đc, nhưng get by data thì k. hic :(
