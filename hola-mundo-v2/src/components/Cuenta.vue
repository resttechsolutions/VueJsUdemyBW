<template>
    <h2>Tipo de cuenta {{cuenta}}</h2>
    <h2>Saldo: {{saldo}} </h2>
    <h2>Cuenta: {{estado ? 'Cuenta activa' : 'Cuenta desactivada'}} </h2>
    <div v-for="(servicio, index) in servicios" :key="index">
        {{index + 1}} - {{ servicio }}
    </div>
    <AccionSaldo 
        texto="Aumentar Saldo"
        @accion="aumentar"
        />
    <AccionSaldo 
        texto="Disminuir Saldo"
        @accion="disminuir"
        :disabled="deshabilitar"
        />
</template>

<script>
import AccionSaldo from './AccionSaldo'

export default {
    components: {
        AccionSaldo
    },
    name: 'Cuenta',
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: true,
            servicios: ['giro', 'abono', 'transferencia'],
            deshabilitar: false
        }
    },
    methods: {
        aumentar(){
            this.saldo += 100
        },
        disminuir(){
            if (this.saldo === 0) {
                alert('Saldo Agotado')
                this.deshabilitar = true
                return
            }
            this.saldo -= 100
        }
    },

}
</script>

<style>

</style>