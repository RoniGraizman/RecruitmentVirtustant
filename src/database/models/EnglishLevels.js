module.exports = function(sequelize, dataTypes){

    let alias = "EnglishLevels" //Como sequelize llama a nuestra tabla
	let cols = {
		ID_English_Level: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		English_Level: {
            type: dataTypes.STRING(50),
            allownull: false,
		},
	}
	let config = {
		tableName: "English_Levels",
		timestamps: false
	}
	let EnglishLevels = sequelize.define(alias,cols,config);

    EnglishLevels.associate = function(models){
        EnglishLevels.hasMany(models.Applicants, { 
            as: "Applicants", 
            foreignKey: "ID_English_Level"
        });
    }
	return EnglishLevels;
}