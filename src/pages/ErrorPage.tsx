import { Link } from "react-router-dom";

export const ErrorPage = () => {


    const handleBack = () => {
        console.log('back')
    }

    return (
        <section
            className="bg-light py-3 py-md-5 d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100%'
            }}
            id='login'
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <h2 className="text-white">404 | Página de Error</h2>
                        <hr className="bg-white"/>
                        <p className="text-white">Vuelve a la página principal con el siguiente botón.</p>
                        <Link to={'/'} className="btn btn-danger" onClick={handleBack}>Volver</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
