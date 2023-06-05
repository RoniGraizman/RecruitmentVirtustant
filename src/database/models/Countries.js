module.exports = function(sequelize, dataTypes){

    let alias = "Countries" //Como sequelize llama a nuestra tabla
	let cols = {
		id_country: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		country: {
            type: dataTypes.STRING(50),
            allownull: false,
		},
	}
	let config = {
		tableName: "countries",
		timestamps: false
	}
	let Countries = sequelize.define(alias,cols,config);

    Countries.associate = function(models){
        Countries.hasMany(models.Applicants, { 
            as: "Applicants", 
            foreignKey: "id_country"
        });
    }
	return Countries;
}