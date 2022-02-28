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
        if (user.username === "" && user.password === "") {
            return {
                errCode: "2",
                errMessage: "Please enter username and password",
            };
        } else {
            const params = {
                username: user.username,
                password: user.password,
            };

            const data = await axiosClient.get("/users/", { params });

            let finalUser = {
                id: "",
                username: "",
                password: "",
                email: "",
                role: "",
                image: "",
            };

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
                    break;
                } else {
                    return {
                        errCode: "3",
                        errMessage:
                            "Check your username or password and try again.",
                    };
                }
            }

            console.log("final user : ", finalUser);

            return {
                userData: finalUser,
                errCode: "1",
                errMessage: "Login succesfully",
            };
        }
    } catch (error) {
        console.error("Error: ", error);
    }
};
