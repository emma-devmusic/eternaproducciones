import { useEffect, useState } from "react";
import EncryptData from "../common/EncryptData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Swal from "sweetalert2";


export const ScannerResult = ({ result }: { result: string; }) => {

    const [ data, setData ] = useState({} as QRResult)

    useEffect(() => {
        let encrypt = new EncryptData(import.meta.env.VITE_SERVER_SECRET)
        const dataDecrypted = encrypt.decrypt(result);
        if(dataDecrypted.error){
            Swal.fire('¡Error!', 'Código QR inválido', 'error')
        }
        setData( dataDecrypted.data )
    },[])



    return (
        <div className="my-4">
            <p className="text-center"><Icon icon={'simple-line-icons:check'} className="fs-1 text-success" /></p>
            <p className="fs-4"><i><strong>N°</strong> {data.idNumber}</i></p>
            <p><strong>Nombre:</strong> <i>{data.name}</i></p>
            {/* <p><strong>Email:</strong> <i>{data.email}</i></p> */}
            <p><strong>DNI:</strong> <i>{data.dni}</i></p>
            <p className="text-center"><i className="text-success">Verificado</i></p>
        </div>
    )
}
