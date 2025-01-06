import axios from "axios"
import { DonkeyTable } from "../types"

export const getData = (endpoint: DonkeyTable["endpoint"]) => 
    axios.get("/donkey-api/" + endpoint).then((res) => res.data)