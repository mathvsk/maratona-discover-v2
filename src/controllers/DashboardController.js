const Job = require("../model/Job")
const Profile = require("../model/Profile")
const JobUtils = require("../utils/JobUtils")

module.exports = {
  //function
  async index(req, res) {
    const jobs = await Job.get()
    const profile = await Profile.get()

    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length
    }

    // total de horas por job/dia em progresso
    let jobTotalHours = 0

    const updateJobs = jobs.map(job => {
      const remaining = JobUtils.remainingDays(job)
      const status = remaining <= 0 ? 'done' : 'progress'

      // somando mais um job ao status[done || progress]
      statusCount[status] += 1
      jobTotalHours = status === "progress" ? jobTotalHours += Number(job["daily-hours"]) : jobTotalHours

      return {
        //espalhamento
        ...job,
        remaining,
        status,

        // retornado o valor do trabalho
        budget: JobUtils.calculateBudget(job, profile['value-hour'])
      }
    })

    // qnt de horas que quero trabalhar MENOS a qnt de horas/dia de cada job em progrees
    const freeHours = profile["hours-per-day"] - jobTotalHours

    return res.render('index', { jobs: updateJobs, profile: profile, statusCount: statusCount, freeHours: freeHours })
  }
}
