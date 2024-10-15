import { createBrowserRouter }              from 'react-router-dom';
import App                                  from '../App';
import Home                                 from '../pages/Home';
import Login                                from '../pages/Login';
import PageNotFound                         from '../pages/PageNotFound';
import Register                             from '../pages/Register';
import AdminPanel                           from '../pages/AdminPanel';
import AllProducts                          from '../pages/AllProducts';
import AllUsers                             from '../pages/AllUsers';
import ProductDetails                       from '../pages/ProductDetails';
import Cart                                 from '../pages/Cart';
import PaymentSuccess                       from '../pages/PaymentSuccess';
import PaymentCancel                        from '../pages/PaymentCancel';
import Order                                from '../pages/Order';
import AllOrder                             from '../pages/AllOrder';
import OfertaDeCafe                         from '../pages/oferta-de-cafe/OfertaDeCafe';
import OfertasDeCafe                        from '../pages/oferta-de-cafe/OfertasDeCafe'
import CafeTradicional                      from '../pages/oferta-de-cafe/CafeTradicional';
import CafeMujeres                          from '../pages/oferta-de-cafe/CafeMujeres';
import CafeOrigenes                         from '../pages/oferta-de-cafe/CafeOrigenes';
import CafeJovenes                          from '../pages/oferta-de-cafe/CafeJovenes';
import CafeDorado                           from '../pages/oferta-de-cafe/CafeDorado';
import CafePremium                          from '../pages/oferta-de-cafe/CafePremium';
import ResponsabilidadSocial                from '../pages/responsabilidad-social/ResponsabilidadSocial';
import ResponsabilidadesSociales            from '../pages/responsabilidad-social/ResponsabilidadesSociales';
import Educacion                            from '../pages/responsabilidad-social/Educacion';
import SeguridadAlimentaria                 from '../pages/responsabilidad-social/SeguridadAlimentaria';
import IgualdadGenero                       from '../pages/responsabilidad-social/IgualdadGenero';
import ComercioJusto                        from '../pages/responsabilidad-social/ComercioJusto';
import AvanceRegional                       from '../pages/responsabilidad-social/AvanceRegional';
import Nines                                from '../pages/responsabilidad-social/Nines';
import ResponsabilidadAmbiental             from '../pages/responsabilidad-ambiental/ResponsabilidadAmbiental';
import ResponsabilidadesAmbientales         from '../pages/responsabilidad-ambiental/ResponsabilidadesAmbientales';
import CertificacionesInternacionales       from '../pages/responsabilidad-ambiental/CertificacionesInternacionales';
import Aire                                 from '../pages/responsabilidad-ambiental/Aire';
import Agua                                 from '../pages/responsabilidad-ambiental/Agua';
import Tierra                               from '../pages/responsabilidad-ambiental/Tierra';
import Fuego                                from '../pages/responsabilidad-ambiental/Fuego';
import Conocenos                            from '../pages/conocenos/Conocenos';
import ConocenosMain                        from '../pages/conocenos/ConocenosMain';
import Organization                         from '../pages/conocenos/Organization';
import HaciaDondeVamos                      from '../pages/conocenos/HaciaDondeVamos';
import Historia                             from '../pages/conocenos/Historia';
import Asociados                            from '../pages/conocenos/Asociados';
import Cosmovision                          from '../pages/conocenos/Cosmovision';
import Documentos                           from '../pages/conocenos/Documentos';
import AneiMundo                            from '../pages/conocenos/AneiMundo';
import Noticias                             from '../pages/Noticias';
import Contacto                             from '../pages/Contacto';
import PrivateRouteUser                     from './PrivateRouteUser';
import PrivateRouteAdmin                    from './PrivateRouteAdmin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'product/:id',
                element: <ProductDetails />
            },
            {
                path: 'conocenos',
                element: <Conocenos />,
                children: [
                    {
                        path: '',
                        element: <ConocenosMain />
                    },
                    {
                        path: 'organizacion',
                        element: <Organization />
                    },
                    {
                        path: 'hacia-donde-vamos',
                        element: <HaciaDondeVamos />
                    },
                    {
                        path: 'historia',
                        element: <Historia />
                    },
                    {
                        path: 'asociados',
                        element: <Asociados />
                    },
                    {
                        path: 'documentos-esal',
                        element: <Documentos />
                    },
                    {
                        path: 'cosmovision',
                        element: <Cosmovision />
                    },
                    {
                        path: 'anei-por-el-mundo',
                        element: <AneiMundo />
                    }
                ]
            },
            {
                path: 'responsabilidad-ambiental',
                element: <ResponsabilidadAmbiental />,
                children: [
                    {
                        path: '',
                        element: <ResponsabilidadesAmbientales />
                    },
                    {
                        path: 'certificaciones-internacionales',
                        element: <CertificacionesInternacionales />
                    },
                    {
                        path: 'aire',
                        element: <Aire />
                    },
                    {
                        path: 'agua',
                        element: <Agua />
                    },
                    {
                        path: 'tierra',
                        element: <Tierra />
                    },
                    {
                        path: 'fuego',
                        element: <Fuego />
                    }
                ]
            },
            {
                path: 'responsabilidad-social',
                element: <ResponsabilidadSocial />,
                children: [
                    {
                        path: '',
                        element: <ResponsabilidadesSociales />
                    },
                    {
                        path: 'educacion',
                        element: <Educacion />
                    },
                    {
                        path: 'seguridad-alimentaria',
                        element: <SeguridadAlimentaria />
                    },
                    {
                        path: 'igualdad-de-genero',
                        element: <IgualdadGenero />
                    },
                    {
                        path: 'comercio-justo',
                        element: <ComercioJusto />
                    },
                    {
                        path: 'avance-regional',
                        element: <AvanceRegional />
                    },
                    {
                        path: 'nines',
                        element: <Nines />
                    }
                ]
            },
            {
                path: 'oferta-de-cafe',
                element: <OfertaDeCafe />,
                children: [
                    {
                        path: '',
                        element: <OfertasDeCafe />
                    },
                    {
                        path: 'cafe-tradicional-fto',
                        element: <CafeTradicional />
                    },
                    {
                        path: 'cafe-mujeres-fto',
                        element: <CafeMujeres />
                    },
                    {
                        path: 'cafe-origenes-fto',
                        element: <CafeOrigenes />
                    },
                    {
                        path: 'cafe-jovenes-fto',
                        element: <CafeJovenes />
                    },
                    {
                        path: 'cafe-dorado-del-perija-fto',
                        element: <CafeDorado />
                    },
                    {
                        path: 'cafe-premium-fto',
                        element: <CafePremium />
                    }
                ]
            },
            {
                path: 'noticias',
                element: <Noticias />
            },
            {
                path: 'contacto',
                element: <Contacto />
            },
            {
                element: <PrivateRouteUser />,
                children: [
                    {
                        path: 'cart',
                        element: <Cart />
                    },
                    {
                        path: 'order',
                        element: <Order />
                    },
                    {
                        path: 'payment/success',
                        element: <PaymentSuccess />
                    },
                    {
                        path: 'payment/cancel',
                        element: <PaymentCancel />
                    },
                ]
            },
            {
                element: <PrivateRouteAdmin />,
                children: [
                    {
                        path: 'admin',
                        element: <AdminPanel />,
                        children: [
                            {
                                path: 'products',
                                element: <AllProducts />
                            },
                            {
                                path: 'users',
                                element: <AllUsers />
                            },
                            {
                                path: 'orders',
                                element: <AllOrder />
                            }
                        ]
                    }
                ]
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    }
]);

export default router;