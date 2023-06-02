module.exports = function(sequelize, dataTypes){

    let alias = "Skills" //Como sequelize llama a nuestra tabla
	let cols = {
		ID_Skill: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Skill: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "Skills",
		timestamps: false
	}
	let Skills = sequelize.define(alias,cols,config);
    
	return Skills;
}