module.exports = function(sequelize, dataTypes){

    let alias = "ApplicationsInfo" //Como sequelize llama a nuestra tabla
	let cols = {
        if_application : {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		id_applicant: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        id_customer_job : {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        applicant_hour_rate: {
            type: dataTypes.FLOAT,
            allownull: false,
        },
        date: {
            type: dataTypes.DATE,
            allownull: false,
        },
	}
	let config = {
		tableName: "application_information",
		timestamps: false
	}
	let ApplicationsInfo = sequelize.define(alias,cols,config);

    ApplicationsInfo.associate = function(models){
        ApplicationsInfo.belongsTo(models.Applicants, { 
            as: "Applicant", 
            foreignKey: "id_applicant"
        });
        ApplicationsInfo.belongsTo(models.CustomersJobs, { 
            as: "CustomerJob", 
            foreignKey: "id_customer_job"
        });
    }

    return ApplicationsInfo;
}