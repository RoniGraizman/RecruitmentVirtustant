module.exports = function(sequelize, dataTypes){

    let alias = "OtherLanguages" //Como sequelize llama a nuestra tabla
	let cols = {
		id_languages: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		languages: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "other_languages",
		timestamps: false
	}
	let OtherLanguages = sequelize.define(alias,cols,config);
    
	return OtherLanguages;
}