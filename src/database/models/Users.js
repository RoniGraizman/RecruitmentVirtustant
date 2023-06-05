module.exports = function(sequelize, dataTypes){

    let alias = "Users" //Como sequelize llama a nuestra tabla
	let cols = {
		id_users: {
            type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
        password: {
            type: dataTypes.STRING(100),
            allownull: false,
		},
	}
	let config = {
		tableName: "users",
		timestamps: false
	}
	let Users = sequelize.define(alias,cols,config);

	return Users;
}