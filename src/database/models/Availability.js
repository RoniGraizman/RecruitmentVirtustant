module.exports = function(sequelize, dataTypes){

    let alias = "Availability" //Como sequelize llama a nuestra tabla
	let cols = {
		id_availability: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		availability: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "availability",
		timestamps: false
	}
	let Availability = sequelize.define(alias,cols,config);

	Availability.associate = function(models){
		//Applicants Association
        Availability.hasMany(models.Applicants, { 
            as: "Applicants", 
            foreignKey: "id_availability"
        });
	}
    
	return Availability;
}