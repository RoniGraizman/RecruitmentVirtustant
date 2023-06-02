module.exports = function(sequelize, dataTypes){

    let alias = "ApplicationsInfo" //Como sequelize llama a nuestra tabla
	let cols = {
        ID_Application : {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		ID_Applicant: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        ID_Customer_Job : {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        Applicant_Hour_Rate: {
            type: dataTypes.FLOAT,
            allownull: false,
        },
        Date: {
            type: dataTypes.DATE,
            allownull: false,
        },
	}
	let config = {
		tableName: "Application_Information",
		timestamps: false
	}
	let ApplicationsInfo = sequelize.define(alias,cols,config);

    ApplicationsInfo.associate = function(models){
        ApplicationsInfo.belongsTo(models.Applicants, { 
            as: "Applicant", 
            foreignKey: "ID_Applicant"
        });
        ApplicationsInfo.belongsTo(models.CustomersJobs, { 
            as: "CustomerJob", 
            foreignKey: "ID_Customer_Job"
        });
    }

    return ApplicationsInfo;
}