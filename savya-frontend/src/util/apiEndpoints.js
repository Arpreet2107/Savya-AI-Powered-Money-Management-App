export const BASE_URL = "https://savya-ai-powered-money-management-app.onrender.com/api/v1.0";
const CLOUDINARY_CLOUD_NAME= "digtq2lvt";

export const API_ENDPOINTS = {
    LOGIN: "/login",
    REGISTER: "/register",
    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
}