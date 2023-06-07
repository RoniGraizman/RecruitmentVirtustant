module.exports = function(sequelize, dataTypes){

    let alias = "EnglishLevels" //Como sequelize llama a nuestra tabla
	let cols = {
		id_english_level: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		english_level: {
            type: dataTypes.STRING(50),
            allownull: false,
		},
	}
	let config = {
		tableName: "english_levels",
		timestamps: false
	}
	let EnglishLevels = sequelize.define(alias,cols,config);

    EnglishLevels.associate = function(models){
		//Applicants Association
        EnglishLevels.hasMany(models.Applicants, { 
            as: "Applicants", 
            foreignKey: "id_english_level"
        });
    }
	return EnglishLevels;
}