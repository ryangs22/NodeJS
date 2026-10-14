import Sequelize, { Model } from "sequelize";

class Customer extends Model {
    static init(sequelize) {
        super.init(
        {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            status: Sequelize.ENUM('ACTIVE', 'INACTIVE'),
        },
        {
            sequelize,
        });
    }
}

export default Customer;
