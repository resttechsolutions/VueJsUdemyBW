const app = Vue.createApp({
    data(){
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 1000,
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
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})