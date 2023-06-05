module.exports = function(sequelize, dataTypes){

    let alias = "Applicants" //Como sequelize llama a nuestra tabla
	let cols = {
		id_aplicant: {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		first_name: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        last_name: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        email: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        phone: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        availability: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        resume_link: {
            type: dataTypes.STRING(256),
            allownull: true,
        },
        specialization: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_country: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        id_english_level: {
            type: dataTypes.INTEGER,
            allownull: false,
        },
        id_skill_1: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_skill_2: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_skill_3: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_skill_4: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_language_1: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_language_2: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_language_3: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_language_4: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
        id_language_5: {
            type: dataTypes.STRING(100),
            allownull: true,
        },
	}
	let config = {
		tableName: "applicants",
		timestamps: false
	}
	let Applicants = sequelize.define(alias,cols,config);

    Applicants.associate = function(models){
        //Country Association
        Applicants.belongsTo(models.Countries, { 
            as: "Country", 
            foreignKey: "id_country"
        });
        //English Level Association
        Applicants.belongsTo(models.EnglishLevels, { 
            as: "English_Level", 
            foreignKey: "id_english_level"
        });
        //Application Info Association
        Applicants.hasMany(models.ApplicationsInfo, { 
            as: "ApplicationsInfo", 
            foreignKey: "id_applicant"
        });
    }

    return Applicants;
}