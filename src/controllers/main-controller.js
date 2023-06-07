//SEQUELIZE
const { Applicants } = require("../database/models");
const { ApplicantsInfo } = require("../database/models");
const { Countries } = require("../database/models");
const { CustomersJob } = require("../database/models");
const { EnglishLevels } = require("../database/models");
const { OtherLanguages } = require("../database/models");
const { Availability } = require("../database/models");
const { Specializations } = require("../database/models");
const { Status } = require("../database/models");
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
        const AllOtherLanguages = await OtherLanguages.findAll()
        const AllAvailability = await Availability.findAll()
        const AllSpecializations = await Specializations.findAll()

        
        //res.send(AllApplicants)
        res.render("home", { AllApplicants, AllEnglishLevels, AllOtherLanguages, AllCountries, AllAvailability, AllSpecializations})
    },

    filterApplicants: async (req, res) => {

        const AllCountries = await Countries.findAll()
        const AllEnglishLevels = await EnglishLevels.findAll()
        const AllOtherLanguages = await OtherLanguages.findAll()
        const AllAvailability = await Availability.findAll()
        const AllSpecializations = await Specializations.findAll()

        const filterFirstName = req.body.firstName;
        const filterLastName = req.body.lastName;
        const filterCountry = req.body.country
        const filterEnglishLevel = req.body.englishLevel;
        const filterSpecialization = req.body.specialization;
        const filterAvailability = req.body.availability;
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
        if(filterSpecialization !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.id_specialization == filterSpecialization)

            //oldData
            oldData.specialization = await Specializations.findAll({
                where: {
                    id_specialization: oldData.specialization
                }
            }) 
        }
        if(filterAvailability !== '') {
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.id_availability == filterAvailability)

            //oldData
            oldData.availability = await Availability.findAll({
                where: {
                    id_availability: oldData.availability
                }
            }) 
        }
        if(filterOtherLanguage !== '') {
            
            filteredApplicants = filteredApplicants.filter(applicant =>
                applicant.other_languages.includes(filterOtherLanguage))
            
            //oldData
            oldData.otherLanguage = await OtherLanguages.findAll({
                where: {
                    languages: oldData.otherLanguage
                }
            })
        }

        res.render("filteredApplicants", { filteredApplicants, AllEnglishLevels, AllOtherLanguages, AllCountries, AllAvailability, AllSpecializations, oldData })
    }
}