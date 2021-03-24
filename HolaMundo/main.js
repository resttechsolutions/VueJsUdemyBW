const app = Vue.createApp({
    data(){
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 500,
            enlace: 'https://youtube.com/bluuweb',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques']
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad += 100;
        }
    },
})