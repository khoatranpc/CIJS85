import { createContext } from "react";
import indexData from "./indexDataStore";

const StoreContext = createContext(indexData);

export default StoreContext;