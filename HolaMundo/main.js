const app = Vue.createApp({
    data(){
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 500,
            enlace: 'https://youtube.com/bluuweb',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad += 100;
        },
        disminuirSaldo(valor){
            if (this.cantidad === 0) {
                this.desactivar = true
                alert('Saldo en cero')
                return
            } 

            this.cantidad -= valor
        }
    },
})