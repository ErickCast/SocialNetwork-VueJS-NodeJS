interface data {
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_PORT: number,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETALLPOST_GET: string,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOST_GET: string,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOSTBYUSER_GET: string,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_SEARCHPOST_GET: string,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_POST: string,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_PUT: string,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_DELETE: string,
    APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOSTSBYFOLLOWS_GET: string,
    DB_HOST:string,
    DB_PORT:number,
    DB_NAME:string,
    DB_USER:string,
    DB_PASSWORD:string,
    JWT_PRIVATEKEY: string
}

let structure: data = {...require('../../../../../conf/config_socialnetwork.json')}

export default structure;