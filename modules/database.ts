import * as Constants from "./constants";
import { TwitchAuth, AccountLinkRequest } from "app";
import { Client, configureDatabase, ClientOptions } from "davenport";

const dbName = "alexa_twitch_oauth";
const accountLinkDbName = "alexa_account_link_requests";

export default async function configureAll() {
    const options: ClientOptions = {
        warnings: false,
        username: Constants.COUCHDB_USERNAME,
        password: Constants.COUCHDB_PASSWORD,
    };

    await configureDatabase(Constants.COUCHDB_URL, {
        name: dbName,
    }, options);

    await configureDatabase(Constants.COUCHDB_URL, {
        name: accountLinkDbName,
    }, options);
}

export const AccountLinkDb = new Client<AccountLinkRequest>(Constants.COUCHDB_URL, accountLinkDbName, { warnings: false });
export const TwitchAuthDb = new Client<TwitchAuth>(Constants.COUCHDB_URL, dbName, { warnings: false });