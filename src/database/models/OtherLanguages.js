module.exports = function(sequelize, dataTypes){

    let alias = "OtherLanguages" //Como sequelize llama a nuestra tabla
	let cols = {
		ID_Languages: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Languages: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "Other_Languages",
		timestamps: false
	}
	let OtherLanguages = sequelize.define(alias,cols,config);
    
	return OtherLanguages;
}