// Criando os objetos que contem outros objetos dentro
var dadosOrcamento = {
  aplle: {
    "iPhone-XR": {
      "tela-quebrada": 500.0,
      "tampa-trincada": 400.0,
      "bateria": 300.0,
      "conector-ruim": 350.0,
    },

    "iPhone-13": {
      "tela-quebrada": 600.0,
      "tampa-trincada": 400.0,
      "bateria": 300.0,
      "conector-ruim": 350.0,
    },

    "iPhone-14": {
      "tela-quebrada": 600.0,
      "tampa-trincada": 400.0,
      bateria: 300.0,
      "conector-ruim": 350.0,
    },

    "iPhone-15": {
      "tela-quebrada": 600.0,
      "tampa-trincada": 400.0,
      bateria: 300.0,
      "conector-ruim": 350.0,
    },
  },

 "samsung" : {
    "S23": {
      "tela-quebrada": 500.0,
      "tampa-trincada": 400.0,
      "bateria": 300.0,
      "conector-ruim": 350.0,
    },

    "S24": {
      "tela-quebrada": 500.0,
      "tampa-trincada": 400.0,
      "bateria": 300.0,
      "conector-ruim": 350.00,
    },

    "S25": {
      "tela-quebrada": 500.0,
      "tampa-trincada": 400.0,
      "bateria": 300.00,
      "conector-ruim": 350.0,
    },
  },


  "xiomi": {

    "xiomi-14":{
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,
    
    }, 

    "Redmi":{
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,
    
    }, 

    "Poco-X6":{
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,
    
    }, 

    "Redmi-A3":{
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,
    
    }, 

  },


  "motorola" :{

    "motorola-edge": {
         "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,

    },

     "moto-G84": {
         "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,

    },

     "moto-E22": {
         "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,

    },

     "motorola-razr": {
         "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
       " bateria": 300.0,
        "conector-ruim": 350.0,

    },

  }
};

// Criei a variavel
const fabricanteSelect = document.getElementById("fabricante-select");

// Estou fazendo um for..in
for (const fabricanteSelect in dadosOrcamento){

    const option = document.createAttribute(option);
    

}