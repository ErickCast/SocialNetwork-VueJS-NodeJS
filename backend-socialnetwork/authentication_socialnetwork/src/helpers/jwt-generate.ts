import jwt from 'jsonwebtoken'
import structure from '../config/structure';

export const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) =>{

        const payload = { uid };

        jwt.sign( payload, structure.JWT_PRIVATEKEY, {
            expiresIn: '7d'
        }, (err:any, token?:string ) =>{
            if(err) {
                console.log(err);
                reject( 'No se pudo generar el token' );
            } else {
                resolve( token );
            }
        });

    })

}
