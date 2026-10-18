import "./database";
import Customer from "./app/models/Customer";
import { Op } from "sequelize";
import Contact from ".app/models/Contact";

class Playground {
    static async play() {

        // Exemplo de manipulação de objeto no banco de dados
        const customer = await Customer.create({
            name: "Kyara",
            email: "kyky236@gmail.com",
        }); //Ao rodar, o usuário Kyara é criado com o email especificado no banco de dados
        console.log(JSON.stringify(customer, null, 2));

        const customer1 = await Customer.findByPk(1);
        console.log("Antes:", JSON.stringify(customer1, null, 2));

        const newCustomer = await customer.update({
            status: "ARCHIVED"
        }); //Ao rodar, o usuário de id 1 é atualizado para o status ARCHIVED
        console.log("Depois:", JSON.stringify(newCustomer, null, 2));
        newCustomer.destroy(); //Deleta esse usuário
    }
}

Playground.play();


