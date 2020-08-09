const Database = require('./db.js')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Inserir Dados

    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://github.com/maykbrito.png", 
        whatsapp: "900000000", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        // O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id vira pelo banco de dados, apos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db,{proffyValue,classValue,classScheduleValues})

    //Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // Consultar as calsses de um professor e traze ele junto
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // Horario de trabalho ex
    //8h - 18h o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)
})