import Sequelize, { Model, Op} from "sequelize";

class Customer extends Model {
    static init(sequelize) {
        super.init(
        {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
        },
        {
            scopes: {
                active: {
                    where: { status: "ACTIVE"},
                    order: ["createdAt"]
                },
                ryan: {
                    where: { name: "Ryan" }
                },
                created(date) {
                    return {
                        where: {createdAt: {[Op.gte]: date} }
                    }
                }
            },
            hooks: {
                beforeValidate: (customer) => {
                    //customer.status = "ARCHIVED" //Se eu rodar a criação de um customer, o default é ACTIVE, porém com o hook (gancho) de beforeValidate (antes de validar) ele altera o status pra ARCHIVED
                },
            },
            sequelize,
            name: {
                singular: "customer", plural: "customers",
            },
        });
    }

    static associate(models) {
        this.hasMany(models.Contact);
    }
}

export default Customer;
