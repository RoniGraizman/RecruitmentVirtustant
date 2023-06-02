module.exports = function(sequelize, dataTypes){

    let alias = "Applicants" //Como sequelize llama a nuestra tabla
	let cols = {
		ID_Aplicant: {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		First_Name: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        Last_Name: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        Email: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        Phone: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        Availability: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        Resume_Link: {
            type: dataTypes.STRING(256),
            allownull: true,
        },
        Specialization: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Country: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        ID_English_Level: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        ID_Skill_1: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Skill_2: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Skill_3: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Skill_4: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Language_1: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Language_2: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Language_3: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Language_4: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        ID_Language_5: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
	}
	let config = {
		tableName: "Applicants",
		timestamps: false
	}
	let Applicants = sequelize.define(alias,cols,config);

    Applicants.associate = function(models){
        //Country Association
        Applicants.belongsTo(models.Countries, { 
            as: "Country", 
            foreignKey: "ID_Country"
        });
        //English Level Association
        Applicants.belongsTo(models.EnglishLevels, { 
            as: "English_Level", 
            foreignKey: "ID_English_Level"
        });
        //Application Info Association
        Applicants.hasMany(models.ApplicationsInfo, { 
            as: "ApplicationsInfo", 
            foreignKey: "ID_Applicant"
        });
    }

    return Applicants;
}