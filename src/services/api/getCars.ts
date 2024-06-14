import axios from "axios";
import { carProps } from "../../components/CardView/propsCar";
import { CAR_API_BASE_URL } from "../../constants/carUrl";
import React from "react";

interface ApiResponse {
    cars: carProps[]
}

export const fetchGetCarData = async (
    id: number,
    setCarDataCallback: React.Dispatch<React.SetStateAction<carProps | null>>
) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);
        const carData = response.data.cars.find((car) => car.id == id) || null;
        setCarDataCallback(carData);

    } catch (error) {
        console.log('Erro ao buscar dados da api: ', error)
        setCarDataCallback(null);
    }
}