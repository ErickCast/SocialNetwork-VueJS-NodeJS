interface data {
    APP_AUTHENTICATION_SOCIALNETWORK_PORT: number,
    APP_AUTHENTICATION_SOCIALNETWORK_LOGIN_GET:string,
    APP_AUTHENTICATION_SOCIALNETWORK_SEARCHUSER_GET: string,
    APP_AUTHENTICATION_SOCIALNETWORK_GETUSER_GET: string,
    APP_AUTHENTICATION_SOCIALNETWORK_REGISTER_POST: string,
    APP_AUTHENTICATION_SOCIALNETWORK_REGISTER_PUT: string,
    APP_AUTHENTICATION_SOCIALNETWORK_REGISTER_DELETE: string,
    DB_HOST:string,
    DB_PORT:number,
    DB_NAME:string,
    DB_USER:string,
    DB_PASSWORD:string
    
}

let structure: data = {...require('../../../../../conf/config_socialnetwork.json')}

export default structure;