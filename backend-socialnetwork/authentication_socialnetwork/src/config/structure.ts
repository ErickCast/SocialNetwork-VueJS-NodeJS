interface data {
    APP_AUTHENTICATION_SOCIALNETWORK_PORT: number;
    APP_AUTHENTICATION_SOCIALNETWORK_LOGIN_GET: string;
    JWT_PRIVATEKEY: string;
    DB_HOST:string;
    DB_PORT:number;
    DB_NAME:string;
    DB_USER:string;
    DB_PASSWORD:string;
    
}

let structure: data = {...require('../../../../../conf/config_socialnetwork.json')}

export default structure;