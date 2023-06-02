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
                    userName: UserName,
                    password: Password,
                }
            })
            
        if(userToLogin) {
            req.session.userLogged = await Users.findByPk(userToLogin.ID_Users)
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

        let filteredApplicants = await Applicants.findAll({
            include: [
                {association: 'Country'},
                {association: 'English_Level'},
            ]
        })

        if(filterFirstName !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.First_Name === filterFirstName)
        }
        if(filterLastName !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.Last_Name === filterLastName)
        }
        if(filterCountry !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.ID_Country == filterCountry)
        }
        if(filterEnglishLevel !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.ID_English_Level == filterEnglishLevel)
        }
        if(filterSkill !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.ID_Skill_1 == filterSkill || applicant.ID_Skill_2 == filterSkill || applicant.ID_Skill_3 == filterSkill || applicant.ID_Skill_4 == filterSkill)
        }
        if(filterOtherLanguage !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.ID_Language_1 == filterOtherLanguage || applicant.ID_Language_2 == filterOtherLanguage || applicant.ID_Language_3 == filterOtherLanguage || applicant.ID_Language_4 == filterOtherLanguage || applicant.ID_Language_5 == filterOtherLanguage)
        }

        res.render("filteredApplicants", { filteredApplicants, AllEnglishLevels, AllSkills, AllOtherLanguages, AllCountries})
    }
}