import React from "react";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardTitle } from "@/shared/components/ui/card";
import { Link } from "react-router-dom";

const mainNotice = {
    title: "Municipalidad lanza nuevo programa social para adultos mayores",
    description:
        "Con el objetivo de mejorar la calidad de vida de los adultos mayores, se lanzó un programa integral que incluye atención médica gratuita, actividades recreativas y apoyo económico.",
    image: "https://cdn.www.gob.pe/uploads/document/file/6419216/standard_963605-445077142_844120334418123_4986675228728085132_n.jpg",
};

const otherNews = [
    {
        title: "Taller de reciclaje en colegios",
        description: "Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno.",
        image: "https://cdn.www.gob.pe/uploads/document/file/5042633/MPP%20retira%20publicidad%20de%20250%20postes%20de%20la%20ciudad.jpg",
    },
    {
        title: "Pavimentación de avenidas principales",
        description: "Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno.",
        image: "https://cdn.www.gob.pe/uploads/document/file/5042633/MPP%20retira%20publicidad%20de%20250%20postes%20de%20la%20ciudad.jpg",
    },
    {
        title: "Campaña de limpieza ciudadana",
        description: "Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno. Vecinos se unen para mantener limpio su entorno.",
        image: "https://cdn.www.gob.pe/uploads/document/file/5042633/MPP%20retira%20publicidad%20de%20250%20postes%20de%20la%20ciudad.jpg",
    },
];

const SectionNotice = () => {
    return (
        <section className="p-6 space-y-6">
            <div className="border-l-4 border-[#009649] pl-4">
                <h2 className="text-2xl font-bold text-[#009649] tracking-tight">📰 Noticias recientes</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="pb-4 overflow-hidden">
                        <img
                            src={mainNotice.image}
                            alt={mainNotice.title}
                            className="w-full h-[450px] object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">{mainNotice.title}</h2>
                            <p className="text-muted-foreground text-base">{mainNotice.description}</p>
                        </div>
                        <Button variant="link" className="self-center  text-[#009649] float-right">Ver noticia</Button>
                    </div>
                </div>

                {/* Otras noticias */}
                <div className="flex flex-col gap-4">
                    {otherNews.map((item, index) => (
                        <Card
                            key={index}
                            className="flex-row overflow-hidden cursor-pointer h-[150px] p-0 shadow-none border rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                        >
                            <Link to={`/noticia/${index}`} className="flex flex-row gap-2">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-34 h-full object-cover rounded-l-xl"
                                />
                                <CardContent className="py-4 px-2">
                                    <CardTitle className="text-sm font-semibold mb-1 line-clamp-2">{item.title}</CardTitle>
                                    <p className="text-xs text-muted-foreground line-clamp-4">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}

                    <Button variant="link" className="self-center mt-2  text-[#009649]">Ver más noticias</Button>
                </div>
            </div>
        </section>
    );
};

export default SectionNotice;
