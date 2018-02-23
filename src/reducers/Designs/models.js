const defaultModels = [
  {
    id:1,
    name:'Pria kerah O',
    type:null,
    categoryId:1
  },
  {
    id:2,
    name:'Pria kerah V',
    type:null,
    categoryId:1
  }
]


const initialState = {
  selectedId:1,
  models:[
    ...defaultModels
  ]
}


const models = ( state = initialState, action ) => {
  return state
}

export default models
