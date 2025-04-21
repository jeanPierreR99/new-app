import { Card, CardContent, CardTitle } from "@/shared/components/ui/card";

const securityStats = [
    {
        title: "Número de denuncias",
        value: "120",
    },
    {
        title: "Operativos realizados",
        value: "15",
    },
    {
        title: "Delitos reducidos",
        value: "25%",
    },
];

const SectionStatistcs = () => {
    return (
        <section className="pt-24 px-6">
            <div className="border-l-4 border-[#009649] pl-4">
                <h2 className="text-2xl font-bold text-[#009649] tracking-tight">📰 Indicadores de seguridad</h2>
            </div>
            <p className="text-lg text-muted-foreground my-4 text-center">
                A continuación, los últimos indicadores sobre las acciones de COPROSEC en nuestra comunidad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {securityStats.map((stat, index) => (
                    <Card
                        key={index}
                        className="flex flex-col items-center justify-center p-6 shadow-lg border rounded-xl bg-white transition-transform duration-300 hover:scale-105"
                    >
                        <CardContent className="text-center">
                            <CardTitle className="text-2xl font-semibold text-gray-700 mb-4">
                                {stat.title}
                            </CardTitle>
                            <span className="text-3xl font-bold text-gray-300">
                                {stat.value}
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default SectionStatistcs;
