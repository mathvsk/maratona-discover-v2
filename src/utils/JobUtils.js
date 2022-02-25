module.exports = {
  // func para calcular os dias restantes
  remainingDays(job) {
    // ajustes no job(calculos e tals)
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

    // criando a data do inicio do projeto
    const createDate = new Date(job.created_at)

    //criando o dia do vencimento
    const dueDay = createDate.getDate() + Number(remainingDays)

    // criando a data do vencimento
    const dueDateInMs = createDate.setDate(dueDay)

    // pegando o tempo em milisegundos
    const timeDiffInMs = dueDateInMs - Date.now()

    // transformando MS em DIAS
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

    // retorna quantos dias faltam
    return dayDiff
  },

  calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}