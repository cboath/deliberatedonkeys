import axios from "axios";
import { omit } from "ramda";
import { DonkeyTable, TableRow } from "../types";

const uri = 'get this value from somewhere'

export const getData = (endpoint: DonkeyTable["endpoint"], headers: object) => 
    axios({
        method: "get",
        url: uri + endpoint,
        headers,
        withCredentials: true,
    }).then((res) => res.data)

export const createData = (
    endpoint: DonkeyTable["endpoint"],
    headers: object,
    data: TableRow
) => 
    axios({
        method: "post",
        url: uri + endpoint,
        data: omit(["id"], data),
        headers,
        withCredentials: true
    }).then((res) => res.data)