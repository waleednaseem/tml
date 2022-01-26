module.exports=(Connection,DataTypes)=>{
    const data = Connection.define('userData',{
        order_from_country:{
            type: DataTypes.STRING,
            allowNull: false    
        },
        shipAddr:{
            type: DataTypes.STRING,
            allowNull: false    
        },
        shipTell:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        shipEmail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        shipPic:{
            type: DataTypes.STRING,
            allowNull: false
        },
        consAddr:{
            type: DataTypes.STRING,
            allowNull: false    
        },
        consTell:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        consEmail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        consPic:{
            type: DataTypes.STRING,
            allowNull: false
        },
        competition:{
            type: DataTypes.STRING,
            allowNull: false
        },
        volume:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        port_of_loading:{
            type: DataTypes.STRING,
            allowNull: false
        },
        port_of_discharge:{
            type: DataTypes.STRING,
            allowNull: false
        },
        final_destination:{
            type: DataTypes.STRING,
            allowNull: false
        },
        comodities:{
            type: DataTypes.STRING,
            allowNull: false
        },
        freight_term:{
            type: DataTypes.STRING,
            allowNull: false
        },
        remark:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })
    return data
}