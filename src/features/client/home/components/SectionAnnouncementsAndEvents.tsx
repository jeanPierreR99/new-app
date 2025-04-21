import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardTitle } from "@/shared/components/ui/card";
import React from "react";
import CardEvent from "./CardEvent";

// Ficticios anuncios y eventos con imagen
const announcementsAndEvents = [
    {
        title: "Charla sobre seguridad ciudadana",
        description:
            "Únete a nuestra charla donde se discutirán estrategias para mejorar la seguridad en nuestra comunidad.",
        date: "22 de abril, 2025",
        link: "/evento/charla-seguridad",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg", // Imagen de ejemplo
    },
    {
        title: "Limpieza comunitaria",
        description:
            "Participa en nuestra jornada de limpieza para mantener nuestra ciudad limpia y segura para todos.",
        date: "28 de abril, 2025",
        link: "/evento/limpieza-comunitaria",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg", // Imagen de ejemplo
    },
    {
        title: "Campaña de vacunación gratuita",
        description:
            "No faltes a la campaña de vacunación gratuita para los residentes de la ciudad.",
        date: "5 de mayo, 2025",
        link: "/evento/campana-vacunacion",
        image: "https://via.placeholder.com/300x200", // Imagen de ejemplo
    },
    {
        title: "Feria de salud y bienestar",
        description:
            "Ven y participa en una feria dedicada a la salud y bienestar de la comunidad, con actividades y consultas gratuitas.",
        date: "10 de mayo, 2025",
        link: "/evento/feria-salud-bienestar",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg", // Imagen de ejemplo
    },
];

const SectionAnnouncementsAndEvents = () => {
    return (
        <section className="pt-24 px-6">
            {/* Titulo de la sección */}
            <div className="border-l-4 border-[#009649] pl-4 mb-8">
                <h2 className="text-2xl font-bold text-[#009649] tracking-tight">📰 Anuncios y Eventos</h2>
            </div>

            <CardEvent></CardEvent>
        </section>
    );
};

export default SectionAnnouncementsAndEvents;
