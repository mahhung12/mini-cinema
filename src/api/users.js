import axios from "axios";

const url = "https://62120b0901ccdac074309ef1.mockapi.io/api/";

const getAll = `${url}/users`;
const getById = `${url}/users/`;
const post = `${url}/users`;

export const getUserById = async (id) => {
    try {
        const { data } = await axios.get(getById, id);

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

        await axios.post(post, userData);
    } catch (error) {}
};

export const getUserByNamePassword = async (user) => {
    console.log(user);
    try {
        const params = {
            username: user.username,
            password: user.password,
        };

        const { data } = await axios.get(getById, params);

        return data;
    } catch (error) {}
};
