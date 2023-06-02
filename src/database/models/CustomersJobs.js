module.exports = function(sequelize, dataTypes){

    let alias = "CustomersJobs" //Como sequelize llama a nuestra tabla
	let cols = {
        ID_Customers_Job : {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Customer: {
            type: dataTypes.STRING(100),
            allownull: false,
        },
        Job_Area: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        Job: {
            type: dataTypes.STRING(100),
            allownull: false,
        },
        Hour_Rate: {
            type: dataTypes.FLOAT,
            allownull: false,
        },
    }
	let config = {
		tableName: "Customers_Job",
		timestamps: false
	}
	let CustomersJobs = sequelize.define(alias,cols,config);

    CustomersJobs.associate = function(models){
        CustomersJobs.hasMany(models.ApplicationsInfo, { 
            as: "ApplicationsInfo", 
            foreignKey: "ID_Customer_Job"
        });
    }

    return CustomersJobs;
}