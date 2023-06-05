module.exports = function(sequelize, dataTypes){

    let alias = "CustomersJobs" //Como sequelize llama a nuestra tabla
	let cols = {
        id_customers_job : {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		customer: {
            type: dataTypes.STRING(100),
            allownull: false,
        },
        job_area: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        job: {
            type: dataTypes.STRING(100),
            allownull: false,
        },
        hour_rate: {
            type: dataTypes.FLOAT,
            allownull: false,
        },
    }
	let config = {
		tableName: "customers_job",
		timestamps: false
	}
	let CustomersJobs = sequelize.define(alias,cols,config);

    CustomersJobs.associate = function(models){
        CustomersJobs.hasMany(models.ApplicationsInfo, { 
            as: "ApplicationsInfo", 
            foreignKey: "id_customer_job"
        });
    }

    return CustomersJobs;
}