module.exports = function(sequelize, dataTypes){

    let alias = "Specializations" //Como sequelize llama a nuestra tabla
	let cols = {
		id_specialization: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		specialization: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "specialization",
		timestamps: false
	}
	let Specializations = sequelize.define(alias,cols,config);

	Specializations.associate = function(models){
		//Applicants Association
        Specializations.hasMany(models.Applicants, { 
            as: "Applicants", 
            foreignKey: "id_specialization"
        });
	}
    
	return Specializations;
}