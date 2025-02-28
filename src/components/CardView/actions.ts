import { fetchGetCarData } from "../../services/api/getCars";
import { carProps } from "./propsCar";

export const loadCarData = async (
    id: number,
    setCarData: React.Dispatch<React.SetStateAction<carProps | null>>
) => {
    try {
        await fetchGetCarData(id, setCarData);
    } catch (error) {
        console.log('Erro ao buscar dados da api: ', error)
    }
}

export const handlePreviousItem = async (
    carData: carProps | null,
    setCarData: React.Dispatch<React.SetStateAction<carProps | null>>
) => {
    if(carData && carData.id > 1){
        await fetchGetCarData(carData.id -1, setCarData)
    }
}

export const handleNextItem = async (
    carData: carProps | null,
    setCarData: React.Dispatch<React.SetStateAction<carProps | null>>
) => {
    if(carData && carData.id < 10){
        await fetchGetCarData(carData.id +1, setCarData)
    }
}