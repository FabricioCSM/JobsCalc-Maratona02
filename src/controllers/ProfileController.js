const Profile = require('../model/Profile');

module.exports = {
    async index (req,res){
        return res.render("profile", { profile: await Profile.get() })
    },
    async update(req, res){
        const data = req.body
        const weeksPerYear = 52
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"])/12
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
        const montlyTotalHours = weekTotalHours * weeksPerMonth
        
        data["value-hour"] =  data["monthly-budget"]/montlyTotalHours

        const profile = await Profile.get()
        await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": data["value-hour"] 
        })
        return res.redirect("profile")
    }
}