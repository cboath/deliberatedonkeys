import { DonkeyTable } from "../types";

export * from './players'

import { players } from './players'

export default {
    players
} as { [key: string]: DonkeyTable };