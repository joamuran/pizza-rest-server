export default class OrderController {
    
    static count=0;
    static setOrder(req, res) {
        try {
            const { order } = req.body;
            // Validació: Assegurar que "order" és una llista i té almenys un element
            if (!Array.isArray(order) || order.length === 0) {
                return res.status(412).json({ 
                    // Error 412 precondition failed
                    confirmed: false, 
                    message: "Error: La comanda ha de contenir algun producte." 
                });
            }

            // Calcular temps de lliurament aleatori entre 15 i 120 minuts
            const tempsEntrega = Math.floor(Math.random() * (120 - 15 + 1)) + 15;
            
            // Obtenir l'hora estimada de lliurament
            const horaActual = new Date();
            const horaEntrega = new Date(horaActual.getTime() + tempsEntrega * 60000);
            const horaEntregaFormatada = horaEntrega.toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' });

            return res.status(200).json({
                confirmed: true,
                time: `${horaEntregaFormatada}`,
                order: OrderController.count++
            });

        } catch (error) {
            console.error("Error al processar la comanda:", error);
            return res.status(500).json({ 
                response: false, 
                message: "Error intern del servidor. Torna-ho a intentar més tard." 
            });
        }
    }
}
