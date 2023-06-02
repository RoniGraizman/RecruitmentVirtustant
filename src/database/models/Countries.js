module.exports = function(sequelize, dataTypes){

    let alias = "Countries" //Como sequelize llama a nuestra tabla
	let cols = {
		ID_Country: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Country: {
            type: dataTypes.STRING(50),
            allownull: false,
		},
	}
	let config = {
		tableName: "Countries",
		timestamps: false
	}
	let Countries = sequelize.define(alias,cols,config);

    Countries.associate = function(models){
        Countries.hasMany(models.Applicants, { 
            as: "Applicants", 
            foreignKey: "ID_Country"
        });
    }
	return Countries;
}