import test from 'ava';
import Vue from 'vue';
import { mount } from 'avoriaz';
import Registro from './../src/componetes/LvInput.vue';

Vue.component('lv-input', LvInput);

let componente = mount(Registro);

test('formulario de Registro com mock de ação'), t => {
    componente.setData({
        usuario: {
            nome: 'Kauê',
            email: 'kauegouveia@gmail.com',
            senha: '12345678'
        }
    }),

        componente.vm.registrar = function () {
            componente.setData({
                estado: 'carregando...'
            })
        }

    componente.update()
    const botao = componente.find('input[type=submit]')[0]
    botao.trigget('click');
    t.is(botao.hasAttribute('disabled', 'disabled'), true)
}