module.exports = function(sequelize, dataTypes){

    let alias = "Skills" //Como sequelize llama a nuestra tabla
	let cols = {
		id_skill: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		skill: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "skills",
		timestamps: false
	}
	let Skills = sequelize.define(alias,cols,config);
    
	return Skills;
}