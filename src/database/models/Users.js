module.exports = function(sequelize, dataTypes){

    let alias = "Users" //Como sequelize llama a nuestra tabla
	let cols = {
		ID_Users: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		UserName: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
        Password: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "Users",
		timestamps: false
	}
	let Users = sequelize.define(alias,cols,config);

	return Users;
}