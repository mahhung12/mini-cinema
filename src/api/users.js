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
        let errCode = 1;
        let errMessage = null;
        if (
            user.username === "" ||
            user.password === "" ||
            user.email === ""
        ) {
            errCode = 2;
            errMessage = "Please enter this field";
        } else {
            const userData = {
                username: user.username,
                password: user.password,
                email: user.email,
                roleID: 2,
                image: "",
            };

            const params = {
                username: user.username,
            };

            const data = await axiosClient.get("/users/", { params });

            //Check account create already exists
            if (data.length < 1) {
                await axiosClient.post("/users", userData);

                errCode = 1;
                errMessage = "Create successfully";
            } else {
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    if (element.username === userData.username) {
                        errCode = 3;
                        errMessage =
                            "This name is already in use, please try different names.";
                    } else {
                        await axiosClient.post("/users", userData);

                        errCode = 1;
                        errMessage = "Create successfully";
                        break;
                    }
                }
            }
        }
        return {
            errCode: errCode,
            errMessage: errMessage,
        };
    } catch (error) {}
};

export const getUserByNamePassword = async (user) => {
    try {
        let errCode = 1;
        let errMessage = null;

        let finalUser = {
            id: "",
            username: "",
            password: "",
            email: "",
            role: "",
            image: "",
        };

        if (user.username === "" && user.password === "") {
            errCode = 2;
            errMessage = "Please enter username and password";
        } else {
            const params = {
                username: user.username,
                password: user.password,
            };

            const data = await axiosClient.get("/users/", { params });

            if (data.length < 1) {
                errCode = 3;
                errMessage =
                    "Check your username or password and try again.";
            } else {
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    if (
                        element.username === user.username &&
                        element.password === user.password
                    ) {
                        finalUser.id = element.id;
                        finalUser.username = element.password;
                        finalUser.password = element.password;
                        finalUser.email = element.email;
                        finalUser.role = element.role;
                        finalUser.image = element.image;

                        errCode = 1;
                        errMessage = "Successfully";

                        break;
                    } else {
                        errCode = 3;
                        errMessage =
                            "Check your username or password and try again.";
                    }
                }
            }
        }
        return {
            userData: finalUser,
            errCode: errCode,
            errMessage: errMessage,
        };
    } catch (error) {
        console.error("Error: ", error);
    }
};
