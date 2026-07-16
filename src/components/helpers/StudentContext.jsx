import { useContext } from "react";
import { createContext } from "react";

export const StudentContext = createContext();

export const useStudent = () => {
    const content = useContext(StudentContext);
    return content
}
