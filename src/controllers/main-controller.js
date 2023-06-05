//SEQUELIZE
const { Applicants } = require("../database/models");
const { ApplicantsInfo } = require("../database/models");
const { Countries } = require("../database/models");
const { CustomersJob } = require("../database/models");
const { EnglishLevels } = require("../database/models");
const { OtherLanguages } = require("../database/models");
const { Skills } = require("../database/models");
const { Users } = require("../database/models");




module.exports = {

    logIn: async (req, res) => {

        res.render("login")
    },

    processLogIn: async (req, res) => {

        const UserName = req.body.userName
        const Password = req.body.password

        let userToLogin = await Users.findOne(
            {     
                where: {
                    username: UserName,
                    password: Password,
                }
            })
            
        if(userToLogin) {
            req.session.userLogged = await Users.findByPk(userToLogin.id_users)
            return res.redirect("/home")
        }
        else {
            return res.render("login", {
                errors: {
                        msg: 'credenciales inválidas'
                }
            })
        }

    },

    home: async (req, res) => {

        const AllApplicants = await Applicants.findAll({
            include: [
                {association: 'Country'},
                {association: 'English_Level'},
            ]
        })
        const AllCountries = await Countries.findAll()
        const AllEnglishLevels = await EnglishLevels.findAll()
        const AllSkills = await Skills.findAll()
        const AllOtherLanguages = await OtherLanguages.findAll()
        
        //res.send(AllApplicants)
        res.render("home", { AllApplicants, AllEnglishLevels, AllSkills, AllOtherLanguages, AllCountries})
    },

    filterApplicants: async (req, res) => {

        const AllCountries = await Countries.findAll()
        const AllEnglishLevels = await EnglishLevels.findAll()
        const AllSkills = await Skills.findAll()
        const AllOtherLanguages = await OtherLanguages.findAll()

        const filterFirstName = req.body.firstName;
        const filterLastName = req.body.lastName;
        const filterCountry = req.body.country
        const filterEnglishLevel = req.body.englishLevel;
        const filterSkill = req.body.skill;
        const filterOtherLanguage = req.body.otherLanguage;
        let oldData = req.body

        let filteredApplicants = await Applicants.findAll({
            include: [
                {association: 'Country'},
                {association: 'English_Level'},
            ]
        })

        if(filterFirstName !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.first_name === filterFirstName)
        }
        if(filterLastName !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.last_name === filterLastName)
        }
        if(filterCountry !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.id_country == filterCountry)

            //oldData
            oldData.country = await Countries.findAll({
                where: {
                    id_country: oldData.country
                }
            })
        }
        if(filterEnglishLevel !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.id_english_level == filterEnglishLevel)

            //oldData
            oldData.englishLevel = await EnglishLevels.findAll({
                where: {
                    id_english_level: oldData.englishLevel
                }
            })
        }
        if(filterSkill !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.id_skill_1 == filterSkill || applicant.id_skill_2 == filterSkill || applicant.id_skill_3 == filterSkill || applicant.id_skill_4 == filterSkill)

            //oldData
            oldData.skill = await Skills.findAll({
                where: {
                    id_skill: oldData.skill
                }
            }) 
        }
        if(filterOtherLanguage !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.id_language_1 == filterOtherLanguage || applicant.id_language_2 == filterOtherLanguage || applicant.id_language_3 == filterOtherLanguage || applicant.id_language_4 == filterOtherLanguage || applicant.id_language_5 == filterOtherLanguage)

            //oldData
            oldData.otherLanguage = await Skills.findAll({
                where: {
                    id_languages: oldData.otherLanguage
                }
            })
        }

        res.render("filteredApplicants", { filteredApplicants, AllEnglishLevels, AllSkills, AllOtherLanguages, AllCountries, oldData })
    }
}