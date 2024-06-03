import { Session } from "../model/Session"
import { PartialSession } from "../model/PartialSession"

import { AuthenticationError } from "../error"

export const authenticate = async (partialSession: PartialSession): Promise<Session> => {
    try {
        throw 2
    } catch (err) {
        throw new AuthenticationError("unhanlded", "unhandled", err)
    }
}