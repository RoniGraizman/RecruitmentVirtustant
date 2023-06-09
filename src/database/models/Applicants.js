module.exports = function(sequelize, dataTypes){

    let alias = "Applicants" //Como sequelize llama a nuestra tabla
	let cols = {
		id_applicant: {
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
        id_availability: {
            type: dataTypes.STRING(50),
            allownull: false,
        },
        resume_link: {
            type: dataTypes.STRING(256),
            allownull: true,
        },
        id_specialization: {
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
        id_status: {
            type: dataTypes.INTEGER,
            allownull: false,
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
        //Specialization Association
        Applicants.belongsTo(models.Specializations, { 
            as: "Specialization", 
            foreignKey: "id_specialization"
        });
        //Availability Association
        Applicants.belongsTo(models.Availability, { 
            as: "Availability", 
            foreignKey: "id_availability"
        });
        //Status Association
        Applicants.belongsTo(models.Status, { 
            as: "Status", 
            foreignKey: "id_status"
        });
    }

    return Applicants;
}