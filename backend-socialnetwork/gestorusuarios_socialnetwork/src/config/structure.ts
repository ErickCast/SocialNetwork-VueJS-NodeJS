interface data {
    APP_GESTORUSUARIOS_SOCIALNETWORK_PORT: number,
    APP_GESTORUSUARIOS_SOCIALNETWORK_SEARCHUSER_GET: string,
    APP_GESTORUSUARIOS_SOCIALNETWORK_GETUSER_GET: string,
    APP_GESTORUSUARIOS_SOCIALNETWORK_REGISTER_POST: string,
    APP_GESTORUSUARIOS_SOCIALNETWORK_PUT: string,
    APP_GESTORUSUARIOS_SOCIALNETWORK_DELETE: string,
    DB_HOST:string,
    DB_PORT:number,
    DB_NAME:string,
    DB_USER:string,
    DB_PASSWORD:string
    
}

let structure: data = {...require('../../../../../conf/config_socialnetwork.json')}

export default structure;