// export const BASE_URL = "https://savya-ai-powered-money-management-app.onrender.com/api/v1.0";
export const BASE_URL = "http://localhost:8080/api/v1.0";

const CLOUDINARY_CLOUD_NAME= "digtq2lvt";

export const API_ENDPOINTS = {
    LOGIN: "/login",
    REGISTER: "/register",
    GET_USER_INFO:"/profile",
    GET_ALL_CATEGORIES:"/categories",
    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
}