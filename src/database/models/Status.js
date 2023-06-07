module.exports = function(sequelize, dataTypes){

    let alias = "Status" //Como sequelize llama a nuestra tabla
	let cols = {
		id_status: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		status: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "status",
		timestamps: false
	}
	let Status = sequelize.define(alias,cols,config);

	Status.associate = function(models){
		//Applicants Association
        Status.hasMany(models.Applicants, { 
            as: "Applicants", 
            foreignKey: "id_status"
        });
	}
    
	return Status;
}