module.exports = {
    remainingDays(job){

        // ajustes no job
        // cálculo de tempo restante    
        const remainingDays = ((job["total-hours"]/job["daily-hours"]).toFixed());

        const createDate = new Date(job.created_at)
        const dueDay = createDate.getDate() + Number(remainingDays)
        const dueDateInMili = createDate.setDate(dueDay)

        const timeDiffInMili = dueDateInMili - Date.now()
        // transformção mili em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMili/dayInMs)
        //restam x dias
        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
    
}