import { Link } from "react-router-dom";
import {
    Facebook,
    Twitter,
    Youtube,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="bg-white border-t text-sm text-muted-foreground">
            <div className="max-w-[1225px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Logo + Institución */}
                <Card className="bg-transparent shadow-none border-none">
                    <CardContent className="p-0">
                        <img
                            src="https://appmunitambopata.com/img/tambopata_logo_verde.webp"
                            alt="Logo Entidad"
                            className="w-full mb-4"
                        />
                        <p className="font-semibold text-base">Municipalidad Provincial de Tambopata</p>
                        <p className="text-sm text-muted-foreground">Gobierno del Perú</p>
                    </CardContent>
                </Card>

                {/* Información de contacto */}
                <Card className="bg-transparent shadow-none border-none">
                    <CardContent className="p-0">
                        <h4 className="font-semibold mb-2 text-foreground">Contacto</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Jr. Arequipa 123, Puerto Maldonado, Madre de Dios
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                (082) 123456
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                contacto@tambopata.gob.pe
                            </li>
                        </ul>

                        {/* Mapa responsivo */}
                        <div className="mt-4 rounded-md overflow-hidden border">
                            <iframe
                                className="w-full h-48 md:h-32"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.4564819208944!2d-69.17737024802005!3d-12.593721397624332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917b4fc1fdf969fd%3A0x4ef0f6fa823b0603!2sMunicipalidad%20Provincial%20de%20Tambopata!5e0!3m2!1ses-419!2spe!4v1745241941291!5m2!1ses-419!2spe"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                title="Ubicación Municipalidad de Tambopata"
                            ></iframe>
                        </div>
                    </CardContent>
                </Card>

                {/* Enlaces útiles */}
                <Card className="bg-transparent shadow-none border-none">
                    <CardContent className="p-0">
                        <h4 className="font-semibold mb-2 text-foreground">Enlaces útiles</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/transparencia" className="hover:underline">
                                    Portal de Transparencia
                                </Link>
                            </li>
                            <li>
                                <Link to="/tramites" className="hover:underline">
                                    Trámites en línea
                                </Link>
                            </li>
                            <li>
                                <Link to="/reclamos" className="hover:underline">
                                    Libro de Reclamaciones
                                </Link>
                            </li>
                            <li>
                                <Link to="/mapa" className="hover:underline">
                                    Mapa del sitio
                                </Link>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Redes sociales */}
                <Card className="bg-transparent shadow-none border-none">
                    <CardContent className="p-0">
                        <h4 className="font-semibold mb-2 text-foreground">Síguenos</h4>
                        <div className="flex gap-4 items-center">
                            <a
                                href="https://facebook.com/entidad"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 hover:text-blue-600" />
                            </a>
                            <a
                                href="https://twitter.com/entidad"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 hover:text-blue-500" />
                            </a>
                            <a
                                href="https://youtube.com/entidad"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 hover:text-red-600" />
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Separator />

            {/* Línea inferior */}
            <div className="bg-muted py-4 text-center text-xs text-muted-foreground">
                © {currentYear} Municipalidad Provincial de Tambopata. Todos los derechos reservados.
                <br />
                Diseñado y desarrollado por el área de tecnología.
            </div>
        </footer>
    );
};

export default Footer;
