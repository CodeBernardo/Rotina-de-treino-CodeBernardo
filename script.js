
const workOuts = [
  {
    diaSemana: "Segunda-feira: Ombros e tríceps",
    treinoDia: [
      {
        exercicio: "Aquecimento do manguito antes",
        series: "4x10 reps",
      },
      {
        exercicio: "Desenvolvimento frontal na maquina",
        series: "4x15 reps",
      },
      {
        exercicio: "Desenvolvimento frontal com halter",
        series: "4x10 reps",
      },
      {
        exercicio: "Elevação unilateral no cabo",
        series: "4x15 reps para cada lado",
      },
      {
        exercicio: "Elevação lateral na maquina",
        series: "4x12 reps",
      },
      {
        exercicio: "Aquecimento do manguito antes",
        series: "4x10 reps",
      },
      {
        exercicio: "Posterior de ombro na maquina",
        series: "4x12 reps",
      },
      {
        exercicio: "Tríceps corda",
        series: "4x15 reps + drop set",
      },
      {
        exercicio: "Tríceps francês unilateral",
        series: "4x10 reps",
      },
      {
        exercicio: "Triceps testa barra W",
        series: "4x10 reps",
      },
    ],
  },
  {
    diaSemana: 'Terça-feira: Dorsal',
    treinoDia: [
    {
      exercicio:'Barra fixa',
      series:'4x até a falha'
    },
    {
      exercicio: 'Puxada pela frente',
      series: '4x10 reps'
    },
    {
      exercicio:'Remada curvada livre',
      series: '4x10 reps'
    },
    {
      exercicio: 'Remada unilateral(serrote)',
      series:'4x10 reps'
    },    
    {
      exercicio:'Remada articulada',
      series: '4x10 reps + drop set'
    },    
    {
      exercicio: 'Remada baixa no cabo com barra larga',
      series: '4x10 reps'
    },    
    {
      exercicio: 'Levantemento terra parcial',
      series:'4x8 reps'
    },    
    {
      exercicio:'Crucifixo invertido',
      series: '4x15 reps'
    },
  ]
  },
  {
    diaSemana: 'Quarta-feira: Cardio',
    treinoDia: [
    {
      exercicio:'Cardio',
      series: '45 minutos'
    },
  ]
  },
  {
    diaSemana: 'Quinta-feira: Peito e abdômen',
    treinoDia: [
    {
      exercicio:'Supino reto com halter',
      series:'4x10 reps'
    },    
    {
      exercicio:'Supino inclinado com halter',
      series:'4x10 reps'
    },    
    {
      exercicio:'Crucifixo inclinado com halter',
      series:'4x10 reps'
    },    
    {
      exercicio:'Crossover',
      series:'4x15 + drop set'
    },    
    {
      exercicio:'Elevaçao de perna',
      series:'4x12 reps'
    },    
    {
      exercicio:'Abdominal com anilha',
      series:'4x12 reps'
    },
  ]
  },
  {
    diaSemana: 'Sexta-feira: Bíceps e panturrilha',
    treinoDia: [
    {
      exercicio:'Rosca scott',
      series:'4x10 reps'
    },    
    {
      exercicio:'Rosca alternada',
      series:'4x10 reps'
    },    
    {
      exercicio:'Rosca direta',
      series:' 4x8 reps + drop set'
    },    
    {
      exercicio:'Rosca martelo',
      series:'4x10 reps'
    },    
    {
      exercicio:'Rosca punho',
      series:'4x10 reps'
    },    
    {
      exercicio:'Gêmeos em pé',
      series:'4x12 reps + drop set'
    },    
    {
      exercicio:'Gêmeos sentado',
      series:'4x12 reps'
    },
  ]
  },
  {
    diaSemana: 'Sabado: Perna completa',
    treinoDia: [
    {
      exercicio:'Extensora',
      series:'4x12 reps'
    },    {
      exercicio:'Agachamento livre',
      series:'4x8 reps'
    },    {
      exercicio:'Legpress',
      series:'4x8 reps'
    },    {
      exercicio:'Passada com halter',
      series:'4x ida e volta'
    },    {
      exercicio:'Mesa flexora',
      series:'4x10 reps + drop set'
    },    {
      exercicio:'Stiff',
      series:'4x10 reps'
    },
  ]
  },
];

for(let i=0; i<workOuts.length; i++) {
  const main = document.querySelector('main')

  const section = document.createElement('section')                               
  section.classList.add('container-dia')
  section.id = 'dia_'+[i]                                          

  const h2 = document.createElement('h2')                                         
  h2.innerText = `${workOuts[i].diaSemana}`
  
  
  section.append(h2)
  main.appendChild(section)

  const sectionZero = document.getElementById('dia_'+[i])
const sectiontittle = sectionZero.querySelector('h2')

sectiontittle.addEventListener('click', function(event){

  const allElements = sectionZero.querySelectorAll('div')

  for(let i=0; i<allElements.length; i++) {
    allElements[i].classList.toggle('hidden')
  }
})
  
  for(let j=0; j<workOuts[i].treinoDia.length; j++) {
    const div = document.createElement('div')                                       
    div.classList.add('row', 'hidden')                                                        
    
    section.appendChild(div)

    const p = document.createElement('p')                                           
    p.innerText = `${workOuts[i].treinoDia[j].exercicio} : ${workOuts[i].treinoDia[j].series}`

    const label = document.createElement('label')                                   
    const input = document.createElement('input')                                   
    input.type = 'checkbox'                                                         
  
    label.appendChild(input)                                                        
    div.append(p, label) 
  }
}





