import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import React from "react";

const news = [
    {
        title: "Alcalde inaugura nuevo parque ecológico",
        description: "El nuevo parque ecológico contará con áreas verdes, juegos infantiles y zonas para mascotas.",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg",
    },
    {
        title: "Se anuncia campaña de vacunación gratuita",
        description: "La municipalidad organizará una campaña de vacunación en todos los centros de salud del distrito.",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg",
    },
    {
        title: "Feria gastronómica este fin de semana",
        description: "Productores y cocineros locales participarán en una feria gastronómica para impulsar la economía local.",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg",
    },
    {
        title: "Nueva planta de reciclaje en funcionamiento",
        description: "Se pone en marcha una moderna planta de reciclaje que procesará hasta 10 toneladas diarias.",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg",
    },
    {
        title: "Concurso de arte para jóvenes talentos",
        description: "Jóvenes de entre 12 y 20 años podrán participar en un concurso de arte organizado por la municipalidad.",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg",
    },
];

const CardEvent = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {news.map((item, index) => (
                <Card key={index} className="flex flex-col p-0 pb-2 justify-between shadow-md rounded-2xl border overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-60 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="ml-auto">Ver noticia</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default CardEvent;
