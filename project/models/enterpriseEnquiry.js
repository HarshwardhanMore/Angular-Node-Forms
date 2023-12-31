module.exports = (sequelize, DataTypes)=>{
    
    const EnterpriseEnquiry = sequelize.define('EnterpriseEnquiry', {
        
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_line: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postal_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        business_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        enterprise_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        enterprise_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }      
    });
 
    return EnterpriseEnquiry;
}